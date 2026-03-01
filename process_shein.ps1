$lines = @(
    @{
        "name" = "conjunto de alfaiataria elegante com calça pantalona e cropped/DD032 50 vendido"
        "link" = "https://onelink.shein.com/31/5hyx10vdse80"
    },
    @{
        "name" = "Conjunto Feminino Bomber Estampado Shorts Saia Tactel Animal Print Moda"
        "link" = "https://onelink.shein.com/31/5hyx1yewygjr"
    },
    @{
        "name" = "BARUBT 1 Peça Pasta de Dente Clareadora de Niacinamida - Menta Fresca - Limpeza Profunda, Ajuda a Remover Manchas - Refresca o Hálito - Adequada para Casa e Viagem, 100g"
        "link" = "https://onelink.shein.com/31/5hyx2s0dna6p"
    },
    @{
        "name" = "Vestido de Bebê Manga Curta Vicky"
        "link" = "https://onelink.shein.com/31/5hyx3bqorty6"
    },
    @{
        "name" = "Tênis Cano Baixo Bebe Menina e Menino - VÁRIAS CORES"
        "link" = "https://onelink.shein.com/31/5hyx3xg0tes3"
    },
    @{
        "name" = "Cápsulas Concentradas de Detergente de Lavanderia 5 em 1, Pérolas Multiuso Adequadas para Apartamentos e Uso Doméstico 100 vendido"
        "link" = "https://onelink.shein.com/31/5hyx4p2gc2mi"
    },
    @{
        "name" = "Slide Feminino em PVC Melflex, Conforto Prolongado e Design Moderno, Ideal para Look Casual e Atividades do Dia a Dia"
        "link" = "https://onelink.shein.com/31/5hyx6k5i81m7"
    },
    @{
        "name" = "SHEIN Conjunto de 2 peças Blusa Moletom Colorblock com Estampa de Coração e Legging Fofas para Meninas Jovens, Manga Longa Quente e Confortável, Ótimo para Uso Casual, Diário, Escolar e Doméstico no Outono e Inverno, para o Natal"
        "link" = "https://onelink.shein.com/31/5hyx7hp12vbe"
    }
)

$jsPath = "c:\Users\Val\Desktop\aslhey\aslheyjob.github.io\js\products.js"

$objs = @()
$current_id = 3000

foreach ($item in $lines) {
    $name = $item.name.Replace('"', '\"')
    $link = $item.link
    $obj = @"
    {
        "id": $current_id,
        "name": "$name",
        "category": "shopee",
        "price": 0.00,
        "oldPrice": null,
        "description": "Oferta Shein. Clique para conferir.",
        "image": "",
        "link": "$link",
        "highlight": false
    }
"@
    $objs += $obj
    $current_id++
}

$insertText = $objs -join ",`r`n"

$content = [System.IO.File]::ReadAllText($jsPath)
$lastIdx = $content.LastIndexOf("];")
if ($lastIdx -ge 0) {
    $newContent = $content.Substring(0, $lastIdx) + ",`r`n" + $insertText + "`r`n];"
    [System.IO.File]::WriteAllText($jsPath, $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "Added $($objs.Count) products."
}
else {
    Write-Host "Could not find '];' in $jsPath"
}
