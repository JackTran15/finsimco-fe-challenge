#!/bin/bash

# This script converts "export function" to "export const ... = () =>"
# and "export default function" to "export default const ... = () =>"

# Find all TypeScript and TSX files with export function declarations
FILES=$(find src -type f -name "*.ts" -o -name "*.tsx" | xargs grep -l "export function\|export default function")

for file in $FILES; do
  echo "Processing $file..."
  
  # Temporary file
  tmp_file=$(mktemp)
  
  # Convert "export function functionName(" to "export const functionName = ("
  sed -E 's/export function ([a-zA-Z0-9_]+)(\([^)]*\))/export const \1 = \2 =>/' "$file" > "$tmp_file"
  
  # Convert "export default function functionName(" to "export default const functionName = ("
  sed -i.bak -E 's/export default function ([a-zA-Z0-9_]+)(\([^)]*\))/export default const \1 = \2 =>/' "$tmp_file"
  
  # Make sure we replace the closing bracket of the function with a semicolon
  perl -0777 -i.bak -pe 's/}\s*$/};/g' "$tmp_file"
  
  # Replace the original file with the modified version
  mv "$tmp_file" "$file"
  
  # Remove backup files
  rm -f "$file.bak" "$tmp_file.bak"
done

echo "Conversion complete!" 