# Linux - Manipulation de fichiers

## Création et suppression

| Commande | Exemple d'utilisation | Description |
| ----- | ----- | ----- |
| `touch` | `touch rapport.txt` | Crée un fichier vide nommé "rapport.txt". |
| `rm` | `rm ancien_fichier.txt` | Supprime le fichier "ancien_fichier.txt". |
| `rm -r` | `rm -r vieux_dossier/` | Supprime le dossier "vieux_dossier" et tout son contenu. |

### Astuce :

Pour éviter les erreurs, utilisez l’option `-i` avec `rm` ou `mv` pour une confirmation avant suppression/déplacement.

## Copie et déplacement

| Commande | Exemple d'utilisation | Description |
| ----- | ----- | ----- |
| `cp` | `cp rapport.txt sauvegarde/` | Copie "rapport.txt" dans le dossier "sauvegarde". |
| `cp -r` | `cp -r Documents/ Backup/` | Copie tout le dossier "Documents" dans "Backup". |
| `mv` | `mv rapport.txt archives/rapport_2025.txt` | Déplace "rapport.txt" vers "archives" et le renomme. |

## 

## Affichage et consultation

| Commande | Exemple d'utilisation | Description |
| ----- | ----- | ----- |
| `cat` | `cat rapport.txt` | Affiche le contenu de "rapport.txt". |
| `less` | `less long_fichier.log` | Affiche "long_fichier.log" page par page (quitter avec `q`). |
| `head` | `head -n 3 rapport.txt` | Affiche les 3 premières lignes de "rapport.txt". |
| `tail` | `tail -n 5 error.log` | Affiche les 5 dernières lignes de "error.log". |

## Droits et permissions

| Commande | Exemple d'utilisation | Description |
| ----- | ----- | ----- |
| `chmod` | `chmod 644 script.sh` | Donne les droits lecture/écriture au propriétaire et lecture aux autres pour "script.sh". |
| `chown` | `chown alice:dev rapport.txt` | Change le propriétaire à "alice" et le groupe à "dev" pour "rapport.txt". |

### Droits courants :

* `644` : Lecture/écriture pour le propriétaire, lecture pour les autres.  
* `755` : Lecture/écriture/exécution pour le propriétaire, lecture/exécution pour les autres.

### En savoir plus : 

[https://fr.wikipedia.org/wiki/Chmod](https://fr.wikipedia.org/wiki/Chmod)

## Recherche

| Commande | Exemple d'utilisation | Description |
| ----- | ----- | ----- |
| `chmod` | `chmod 644 script.sh` | Donne les droits lecture/écriture au propriétaire et lecture aux autres pour "script.sh". |
| `chown` | `chown alice:dev rapport.txt` | Change le propriétaire à "alice" et le groupe à "dev" pour "rapport.txt". |

# Compression et archivage

| Commande | Exemple d'utilisation | Description |
| ----- | ----- | ----- |
| `tar -cvf` | `tar -cvf archive.tar /dossier/` | Crée une archive "archive.tar" du dossier "/dossier/". |
| `tar -xvf` | `tar -xvf archive.tar` | Extrait le contenu de "archive.tar". |
| `gzip` | `gzip gros_fichier.txt` | Compresse "gros_fichier.txt" en "gros_fichier.txt.gz". |

# Outils avancés

| Commande | Exemple d'utilisation | Description |
| ----- | ----- | ----- |
| `diff` | `diff version1.txt version2.txt` | Compare les différences entre "version1.txt" et "version2.txt". |
| `wc` | `wc -l rapport.txt` | Compte le nombre de lignes dans "rapport.txt". |

