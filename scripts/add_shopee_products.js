const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../js/products.js');

// User provided links
const rawLinks = `
https://s.shopee.com.br/6VIJly5Jkf
https://s.shopee.com.br/8AQXlDPX9s
https://s.shopee.com.br/7pnhMv5Jmp
https://s.shopee.com.br/4VXFOsXiyq
https://s.shopee.com.br/8AQXlf5M3g
https://s.shopee.com.br/8V3OANwrHo
https://s.shopee.com.br/7VAqya4Bka
https://s.shopee.com.br/5fjCnFf5aj
https://s.shopee.com.br/6pvABR0J5k
https://s.shopee.com.br/70EaNm3OyL
https://s.shopee.com.br/14q2wOqJ3
https://s.shopee.com.br/8fMoMuQAd5
https://s.shopee.com.br/8fMoMwgp8r
https://s.shopee.com.br/AUoSYLddu4
https://s.shopee.com.br/6fbjzLiDyq
https://s.shopee.com.br/9KcVAH2GDb
https://s.shopee.com.br/2LSkpSAEgN
https://s.shopee.com.br/9UvvMei93G
https://s.shopee.com.br/9pYllJF826
https://s.shopee.com.br/W16eBwmxM
https://s.shopee.com.br/3qHYcMDx3m
https://s.shopee.com.br/4AuP10KfrW
https://s.shopee.com.br/4fqfbxQy6X
https://s.shopee.com.br/7VAqzCSVLy
https://s.shopee.com.br/9fFLZDJNbP
https://s.shopee.com.br/1VtdqEnf5F
https://s.shopee.com.br/4AuP1Aclqh
https://s.shopee.com.br/6KytbBTiMY
https://s.shopee.com.br/7AY0akYOcT
https://s.shopee.com.br/7AY0amkmsV
https://s.shopee.com.br/6VIJnb4K3d
https://s.shopee.com.br/7fUHBm3Gcm
https://s.shopee.com.br/7AY0at4V3D
https://s.shopee.com.br/7AY0av7xDN
https://s.shopee.com.br/7fUHBrNJYP
https://s.shopee.com.br/8077aUdExY
https://s.shopee.com.br/7VAqzaND3k
https://s.shopee.com.br/1BGnRxKRuX
https://s.shopee.com.br/4VXFQ6l1P6
https://s.shopee.com.br/7AY0b15bDM
https://s.shopee.com.br/3qHYctvokp
https://s.shopee.com.br/9pYllw8Nct
https://s.shopee.com.br/6AfTPD8Wsy
https://s.shopee.com.br/6pvACS9zGx
https://s.shopee.com.br/LhgSWGnY1
https://s.shopee.com.br/2VmB2VdHOX
https://s.shopee.com.br/1VtdqgKtE1
https://s.shopee.com.br/5fjCoLe1FG
https://s.shopee.com.br/3fy8QgPMs3
https://s.shopee.com.br/50TW19Jkbx
https://s.shopee.com.br/5VPmc5DBII
https://s.shopee.com.br/9AJ4ypcgM4
https://s.shopee.com.br/4qA5osO2tu
https://s.shopee.com.br/1LaDeSAhmG
https://s.shopee.com.br/60M3D2NWzw
https://s.shopee.com.br/9fFLZmiq5j
https://s.shopee.com.br/5q2d0kSA4Y
https://s.shopee.com.br/20puRiKQ9i
https://s.shopee.com.br/6VIJnzPDgH
https://s.shopee.com.br/2B9Ke2WVrG
https://s.shopee.com.br/8pgEaJ2XIv
https://s.shopee.com.br/8zzemcWUf5
https://s.shopee.com.br/1VtdqqhBDA
https://s.shopee.com.br/7KrQnaGEp4
https://s.shopee.com.br/10xNFx4kMu
https://s.shopee.com.br/BOGGR7W0I
https://s.shopee.com.br/4qA5p1c4sf
https://s.shopee.com.br/9zsByWn4LY
https://s.shopee.com.br/3LLI2HuRhR
https://s.shopee.com.br/1BGnSJT5o2
https://s.shopee.com.br/6fbk0QYYKT
https://s.shopee.com.br/AABcAs7cpf
https://shopee.com.br/product/1393520997/41819218483,https://s.shopee.com.br/6fbk0u9IvK
https://shopee.com.br/product/811924245/23693563192,https://s.shopee.com.br/14q4eYgQd
https://shopee.com.br/product/407760070/43374111473,https://s.shopee.com.br/1BGnSnUF3s
https://shopee.com.br/product/1409837330/22298078581,https://s.shopee.com.br/10xNGUUsOr
https://shopee.com.br/product/1005980154/19297921250,https://s.shopee.com.br/qdx4BVVjq
https://shopee.com.br/product/1082769865/23992747038,https://s.shopee.com.br/gKWrsW94p
https://shopee.com.br/product/1550289868/41506401000,https://s.shopee.com.br/4VXFQvHYIa
https://shopee.com.br/product/855448900/22898218673,https://s.shopee.com.br/4LDpEcIBdZ
https://shopee.com.br/product/342898831/26088354720,https://s.shopee.com.br/4AuP2JIoyY
https://shopee.com.br/product/1464833466/23594534540,https://s.shopee.com.br/40ayq0JSJX
https://shopee.com.br/product/1571166082/23694215749,https://s.shopee.com.br/5AmwE9F0wm
https://shopee.com.br/product/1362617427/24093330211,https://s.shopee.com.br/50TW1qFeHl
https://shopee.com.br/product/1506941149/23293865458,https://s.shopee.com.br/4qA5pXGHck
https://shopee.com.br/product/1540426526/23098905031,https://s.shopee.com.br/4fqfdEGuxj
https://shopee.com.br/product/523145812/23398794668,https://s.shopee.com.br/3B1rqTMd0S
https://shopee.com.br/product/376179356/20097732642,https://s.shopee.com.br/30iReANGLR
https://shopee.com.br/product/1580145778/19899844544,https://s.shopee.com.br/2qP1RrNtgQ
https://shopee.com.br/product/511410160/23498052271,https://s.shopee.com.br/2g5bFYOX1P
https://shopee.com.br/product/1046016014/22098208730,https://s.shopee.com.br/3qHYdhK5ee
https://shopee.com.br/product/512962451/23094355849,https://s.shopee.com.br/3fy8ROKizd
https://shopee.com.br/product/415175805/22693482091,https://s.shopee.com.br/3VeiF5LMKc
https://shopee.com.br/product/300779622/22591754767,https://s.shopee.com.br/3LLI2mLzfb
https://shopee.com.br/product/763085885/21397806660,https://s.shopee.com.br/7AY0bp7OtM
https://shopee.com.br/product/424349311/22793110454,https://s.shopee.com.br/70EaPW82EL
https://shopee.com.br/product/316557325/19397976808,https://s.shopee.com.br/6pvADD8fZK
https://shopee.com.br/product/1526576446/19698201316,https://s.shopee.com.br/6fbk0u9IuJ
https://shopee.com.br/product/1454188932/22993711209,https://s.shopee.com.br/7pnhP34rXY
https://shopee.com.br/product/1421762996/22498420877,https://s.shopee.com.br/7fUHCk5UsX
https://shopee.com.br/product/859822393/19799214704,https://s.shopee.com.br/7VAr0R68DW
https://shopee.com.br/product/1006215031/29603671691,https://s.shopee.com.br/7KrQo86lYV
https://shopee.com.br/product/289956076/22698846073,https://s.shopee.com.br/5q2d1NCTbE
https://shopee.com.br/product/752849300/22292953138,https://s.shopee.com.br/5fjCp4D6wD
https://shopee.com.br/product/1251924206/23093156561,https://s.shopee.com.br/5VPmclDkHC
https://shopee.com.br/product/1481309741/20998090455,https://s.shopee.com.br/5L6MQSENcB
https://shopee.com.br/product/434046753/22797757736,https://s.shopee.com.br/6VIJob9wFQ
https://shopee.com.br/product/407760070/23698691180,https://s.shopee.com.br/6KytcIAZaP
https://shopee.com.br/product/340096629/18569891295,https://s.shopee.com.br/6AfTPzBCvO
https://shopee.com.br/product/552958714/44110578765,https://s.shopee.com.br/60M3DgBqGN
https://shopee.com.br/product/309437445/23492991813,https://s.shopee.com.br/9pYlmixFU8
https://shopee.com.br/product/1543234138/43254372497,https://s.shopee.com.br/9fFLaPxsp7
https://shopee.com.br/product/406969593/22498946021,https://s.shopee.com.br/9UvvO6yWA6
https://shopee.com.br/product/325008325/25745811858,https://s.shopee.com.br/9KcVBnz9V5
https://shopee.com.br/product/625559139/22394064681,https://s.shopee.com.br/AUoSZwui8K
https://shopee.com.br/product/324536294/21497617879,https://s.shopee.com.br/AKV2NdvLTJ
https://shopee.com.br/product/646539763/28088314056,https://s.shopee.com.br/AABcBKvyoI
https://shopee.com.br/product/1177903362/23094361277,https://s.shopee.com.br/9zsBz1wc9H
https://shopee.com.br/product/318621368/10995948083,https://s.shopee.com.br/8V3OCH2KC0
https://shopee.com.br/product/280039385/22193751978,https://s.shopee.com.br/8Kjxzy2xWz
https://shopee.com.br/product/1381918631/22298489702,https://s.shopee.com.br/8AQXnf3ary
https://shopee.com.br/product/333326095/41724016874,https://s.shopee.com.br/8077bM4ECx
https://shopee.com.br/product/1354787518/25139057687,https://s.shopee.com.br/9AJ4zUzmqC
https://shopee.com.br/product/676737455/23194146795,https://s.shopee.com.br/8zzenC0QBB
https://shopee.com.br/product/944725778/23892665618,https://s.shopee.com.br/8pgEat13WA
https://shopee.com.br/product/944725778/23892665618,https://s.shopee.com.br/8pgEat13WA
https://s.shopee.com.br/3B1rqTMd1V
https://shopee.com.br/product/422650277/19698315702,https://s.shopee.com.br/2g5bFYOX2Q
https://shopee.com.br/product/1235661835/23993095948,https://s.shopee.com.br/2qP1RrNthT
https://shopee.com.br/product/1262803914/58252672110,https://s.shopee.com.br/3fy8ROKj0e
https://shopee.com.br/product/982283887/42258150093,https://s.shopee.com.br/3qHYdhK5fh
https://shopee.com.br/product/926331543/42219110909,https://s.shopee.com.br/3LLI2mLzgc
https://shopee.com.br/product/1032838083/22298151589,https://s.shopee.com.br/3VeiF5LMLf
https://shopee.com.br/product/1521699574/23898692172,https://s.shopee.com.br/70EaPW82FM
https://shopee.com.br/product/318877408/22235007748,https://s.shopee.com.br/7AY0bp7OuP
https://shopee.com.br/product/1379143262/22498067516,https://s.shopee.com.br/3qHYdJKutZ
https://shopee.com.br/product/1509457209/26939635756,https://s.shopee.com.br/3LLI2OMouU
https://shopee.com.br/product/300779622/22992945609,https://s.shopee.com.br/3VeiEhMBZX
https://shopee.com.br/product/424349311/20497726820,https://s.shopee.com.br/4LDpEEJ0si
https://shopee.com.br/product/1506941149/55900821899,https://s.shopee.com.br/4VXFQXINXl
https://shopee.com.br/product/1103946075/23192640123,https://s.shopee.com.br/40aypcKHYg
https://shopee.com.br/product/1489642243/28630143344,https://s.shopee.com.br/4AuP1vJeDj
https://shopee.com.br/product/450530875/23494065778,https://s.shopee.com.br/50TW1SGTWu
https://shopee.com.br/product/1394198147/20099675334,https://s.shopee.com.br/5AmwDlFqBx
https://shopee.com.br/product/1509346262/22498645087,https://s.shopee.com.br/4fqfcqHkCs
https://shopee.com.br/product/1423372949/23998685581,https://s.shopee.com.br/4qA5p9H6rv
https://shopee.com.br/product/1103946075/22597120770,https://s.shopee.com.br/LhgSsYF04
https://shopee.com.br/product/413049152/23994621968,https://s.shopee.com.br/W16fBXbf7
https://shopee.com.br/product/453246782/40627875504,https://s.shopee.com.br/14q4GZVg2
https://shopee.com.br/product/325008325/21071530577,https://s.shopee.com.br/BOGGZYsL5
`;

// 1. Leia o arquivo existente
let fileContent = fs.readFileSync(filePath, 'utf8');

// 2. Extrair o array existente (simplista, assumindo que window.products = [ ... ];)
// Vamos fazer um parsing manual seguro
const startMarker = 'window.products = [';
const endMarker = '];';
const startIndex = fileContent.indexOf(startMarker);
const endIndex = fileContent.lastIndexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error("Não foi possível encontrar a estrutura do array products.");
    process.exit(1);
}

const currentArrayContent = fileContent.substring(startIndex + startMarker.length, endIndex);
// Para avaliar, vamos criar um contexto seguro ou regex. 
// Regex para extrair links existentes.
const linkRegex = /"link":\s*"(.*?)"/g;
let match;
const existingLinks = new Set();
while ((match = linkRegex.exec(currentArrayContent)) !== null) {
    existingLinks.add(match[1]);
}

// 3. Processar os novos links
const newProducts = [];
let nextId = 107; // Começar do 107 conforme análise

const lines = rawLinks.trim().split('\n');

for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    // Se tiver vírgula, pegar a parte depois (link afiliado)
    let link = line;
    if (line.includes(',')) {
        link = line.split(',')[1].trim();
    }

    // Verificar duplicata
    if (existingLinks.has(link)) {
        console.log(`Link duplicado ignorado: ${link}`);
        continue;
    }

    // Adicionar novo produto
    newProducts.push({
        id: nextId++,
        name: `Produto Shopee ${nextId - 1}`, // Nome genérico
        category: "shopee",
        price: 0.00,
        oldPrice: null,
        description: "Descrição do produto Shopee. Clique em Ver Oferta.",
        image: "assets/img/placeholder.png", // Imagem genérica
        link: link,
        highlight: false
    });

    // Adicionar aos links existentes para evitar duplicatas na própria lista de entrada
    existingLinks.add(link);
}

// 4. Gerar strings dos novos objetos
const newObjectsString = newProducts.map(p => JSON.stringify(p, null, 4)).join(',\n    ');

// 5. Inserir no arquivo
// Vamos inserir antes do último '];'
if (newProducts.length > 0) {
    const finalContent = fileContent.slice(0, endIndex).trimEnd().replace(/,$/, '') + ',\n    ' + newObjectsString + '\n];';
    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log(`${newProducts.length} novos produtos adicionados com sucesso!`);
} else {
    console.log("Nenhum produto novo para adicionar.");
}
