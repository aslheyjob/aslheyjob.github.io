$path = "js/products.js"
$EncLatin1 = [System.Text.Encoding]::GetEncoding("iso-8859-1")
$EncUTF8 = [System.Text.Encoding]::UTF8

# Read with UTF8
$lines = Get-Content $path -Encoding UTF8
$newLines = @()

foreach ($line in $lines) {
    if ($line -match "[\u00C0-\u00FF]") {
        try {
            # Attempt to fix
            # Get bytes as if the current characters are Latin1 bytes interpreted as text
            $bytes = $EncLatin1.GetBytes($line)
            # Re-interpret those bytes as UTF8
            $candidate = $EncUTF8.GetString($bytes)
            
            # Check if valid (no replacement char U+FFFD) and actually changed
            if ($candidate -notmatch "\uFFFD" -and $candidate -ne $line) {
                $newLines += $candidate
                continue
            }
        } catch {
            # ignore
        }
    }
    $newLines += $line
}

$newLines | Set-Content $path -Encoding UTF8
Write-Host "Encoding fix complete."
