FILENAME="_files/$(date +%y%m%d)_$1.html"
cp "./templates/letter.html" "$FILENAME"
echo "$FILENAME"
