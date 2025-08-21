
#!/bin/bash
# @file nettoyage
# @brief Script qui supprime les fichiers du dossier Temp non modifiés depuis 2 jours
# @description
# Ce script :
# - utilise sudo pour garantir les permissions nécessaires à la suppression
# - exécute la commande crontab en tant que super-utilisateur pour éviter les problèmes de permission
# - utilise find pour localiser le dossier Temp
# - cible uniquement les fichiers grâce à -type f
# - sélectionne les fichiers modifiés il y a plus de 2 jours grâce à -mtime +2

sudo find /home/siixo/Documents/tp_linux/Temp/ -type f -mtime +2
