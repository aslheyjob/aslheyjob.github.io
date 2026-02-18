$path = "js/products.js"
$lines = Get-Content $path
$newLines = @()

foreach ($line in $lines) {
    if ($line -match '^\s*"id": (\d+), "name": "(.*?)", "category": "(.*?)", "price": ([\d\.]+), "oldPrice": (.*?), "description": "(.*?)", "image": "(.*?)", "link": "(.*?)", "highlight": (.*?)\s*$') {
        $id = $Matches[1]
        $name = $Matches[2]
        $cat = $Matches[3]
        $price = $Matches[4]
        $oldPrice = $Matches[5]
        $desc = $Matches[6]
        $img = $Matches[7]
        $link = $Matches[8]
        $high = $Matches[9]

        $newLines += "        `"id`": $id,"
        $newLines += "        `"name`": `"$name`","
        $newLines += "        `"category`": `"$cat`","
        $newLines += "        `"price`": $price,"
        $newLines += "        `"oldPrice`": $oldPrice,"
        $newLines += "        `"description`": `"$desc`","
        $newLines += "        `"image`": `"$img`","
        $newLines += "        `"link`": `"$link`","
        $newLines += "        `"highlight`": $high"
    } else {
        $newLines += $line
    }
}

$newLines | Set-Content $path -Encoding UTF8
Write-Host "Formatting complete."
