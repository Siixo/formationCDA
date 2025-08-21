# Nettoyage

>Script qui supprime les fichiers du dossier Temp non modifiés depuis 2 jours

## Overview

**Ce script** :
1. utilise sudo pour garantir les permissions nécessaires à la suppression
2. exécute la commande crontab en tant que super-utilisateur pour éviter les problèmes de permission
3. utilise find pour localiser le dossier Temp
4. cible uniquement les fichiers grâce à -type f
5. sélectionne les fichiers modifiés il y a plus de 2 jours grâce à -mtime +2

