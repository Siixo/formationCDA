# Linux - Scripts

## Introduction

Les scripts sous Linux (souvent appelés scripts shell) sont des fichiers texte contenant une série de commandes destinées à être exécutées par un interpréteur (comme Bash, Python, Perl, etc.). Ils permettent d’automatiser des tâches répétitives, de combiner des commandes, et de créer des outils personnalisés.

## Les bases des scripts shell

* **Langage** : Le plus courant est **Bash** (Bourne Again SHell), mais on peut aussi utiliser Python, Perl, etc.  
* **Extension** : `.sh` (ex: `mon_script.sh`), mais ce n’est pas obligatoire.  
* **Shebang** : La première ligne du script indique l’interpréteur à utiliser. Exemple : `#!/bin/bash` pour Bash.

## Créer et exécuter un script

### Créer le fichier

```shell
user@host:~$ nano mon_script.sh
```

### Ajouter le shebang et les commandes

```bash
#!/bin/bash  
echo "Bonjour, $USER ! Aujourd’hui nous sommes le $(date)."
```

### Rendre le script exécutable

```shell
user@host:~$ chmod +x mon_script.sh
```

### Exécuter le script

```shell
user@host:~$ ./mon_script.sh
```

## Fonctionnalités clés

### Variables

```bash
NOM="Alice"  
echo "Bonjour, $NOM !"
```

### Conditions

```bash
if [ "$USER" == "root" ]; then  
    echo "Vous êtes root."  
else  
    echo "Vous n’êtes pas root."  
fi
```

### Boucles

```bash
for i in {1..5}; do  
    echo "Itération $i"  
done
```

### Arguments

```bash
echo "Premier argument : $1"
``` 

#### Appel
```shell
user@host:~$ ./mon_script.sh argument1
```

### Sorties et erreurs

```shell
user@host:~$ ls fichier_inexistant 2> erreurs.log
```

## Cas d’usage courants

* **Automatiser des tâches** : Sauvegardes, nettoyage de fichiers, déploiements.  
* **Combiner des commandes** : Chaîner des outils comme `grep`, `awk`, `sed`.  
* **Personnaliser l’environnement** : Configurer des alias, variables, etc.

## Bonnes pratiques

* **Commentaires** : Utilise `#` pour expliquer ton code.  

* **Gestion des erreurs** : `set -e` arrête le script en cas d’erreur

* **Débogage** : `bash -x mon_script.sh` affiche chaque commande avant exécution

## Exemple complet : Script de sauvegarde

```bash
#!/bin/bash
# Sauvegarde un dossier dans /backup
DIR_SOURCE="/dossier/important"
DIR_BACKUP="/backup/$(date +%Y-%m-%d)"
mkdir -p "$DIR_BACKUP"
cp -r "$DIR_SOURCE" "$DIR_BACKUP/"
echo "Sauvegarde terminée dans $DIR_BACKUP"
```

## Outils complémentaires

* **Cron** : Planifier l’exécution automatique des scripts (ex: sauvegardes nocturnes).  
* **Logs** : Redirige les sorties pour suivre l’exécution : `./mon_script.sh >> log.txt 2>&1`

