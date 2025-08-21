#!/bin/bash
echo "Bonjour"

if [ "\$USER" == "root" ]; then
    echo "Vous êtes root."
else
    echo "Vous n'êtes pas root."
fi

for i in {1..10} ; do echo "bonjour" ; done


for i in {1..5}; do
    echo "Itération $i"
done

echo "Bonjour $1"

current_date=$(date)

echo ${current_date} >  /home/siixo/Documents/tp_linux/date.txt


