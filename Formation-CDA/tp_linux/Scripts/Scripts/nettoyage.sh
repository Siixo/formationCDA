
#!/bin/bash
# @file nettoyage
# @brief Script qui supprime les fichiers de "temp" non modifiés depuis 2 jours
# @description
# La fonction est composée des éléments suivants :
# - sudo pour être sûr d'avoir la permission de supprimer les fichiers ; la commande crontab a également 
#   été écrite en SU pour qu'elle puisse être exécutée sans problème de permissions.
# - find "path" pour rechercher le dossier Temp 
# - -type f pour cibler uniquement les fichiers à l'intérieur en supposant qu'il n'y aura que des fichiers temp 
#   et pas de dossiers créés
# - mtime +2 sert à cibler les fichiers modifiés (modified time) il y a plus de 2 jours.

sudo find /home/siixo/Documents/tp_linux/Temp/ -type f -mtime +2
