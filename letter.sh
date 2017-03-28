FILENAME="$(date +%y%m%d)_$1.html"
cp templates/letter.html "_files/$FILENAME"
vim "_files/$FILENAME"
