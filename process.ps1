$headers = "Col0", "Name", "Col2", "Col3", "Col4", "Col5", "Col6", "Col7", "ShortLink"
$csvPath = "c:\Users\Val\Desktop\aslhey\aslheyjob.github.io\data.csv"
$jsPath = "c:\Users\Val\Desktop\aslhey\aslheyjob.github.io\js\products.js"

$csv = Import-Csv -Path $csvPath -Header $headers -Encoding UTF8

$lines = @()
$current_id = 354
foreach ($row in $csv) {
    if (-not [string]::IsNullOrWhiteSpace($row.Name)) {
        $name = $row.Name.Replace('"', '\"')
        $link = $row.ShortLink
        $obj = @"
    {
        "id": $current_id,
        "name": "$name",
        "category": "shopee",
        "price": 0.00,
        "oldPrice": null,
        "description": "Oferta Shopee. Clique para conferir.",
        "image": "",
        "link": "$link",
        "highlight": false
    }
"@
        $lines += $obj
        $current_id++
    }
}

$insertText = $lines -join ",`r`n"

$content = [System.IO.File]::ReadAllText($jsPath)
$lastIdx = $content.LastIndexOf("];")
if ($lastIdx -ge 0) {
    # Check if there's an existing object list just above
    $newContent = $content.Substring(0, $lastIdx) + ",`r`n" + $insertText + "`r`n];"
    [System.IO.File]::WriteAllText($jsPath, $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "Added $($lines.Count) products."
}
else {
    Write-Host "Could not find '];' in $jsPath"
}
