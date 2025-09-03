# Introduction générale

## La génèse de Linux

Linux (parfois nommé GNU/Linux) est un système d'exploitation open source de type Unix, basé sur le noyau Linux créé en 1991 par Linus Torvalds. De nombreuses distributions Linux ont depuis vu le jour et constituent un important vecteur de popularisation du mouvement du logiciel libre.

Si, à l'origine, Linux a été développé pour les ordinateurs compatibles PC et accompagné des logiciels GNU, il n'a jamais équipé plus d'une très faible part des ordinateurs personnels. Mais le noyau Linux, accompagné ou non des logiciels GNU, est largement utilisé sur les serveurs, téléphones mobiles, systèmes embarqués et les superordinateurs. 

## Commandes de base

### Navigation et affichage

| Commande | Description |
| ----- | ----- |
| `cd` | Change de répertoire (ex: `cd /home`). |
| `ls` | Liste le contenu d’un répertoire. |
| `pwd` | Affiche le chemin du répertoire courant. |
| `cat` | Affiche le contenu d’un fichier. |

### Recherche et filtrage

| Commande | Description |
| ----- | ----- |
| `grep "motif" fichier` | Recherche un motif dans un fichier. |
| `find / -name "*.txt"` | Recherche des fichiers par nom. |

### Aide et historique

| Commande | Description |
| ----- | ----- |
| `man` | Affiche le manuel d’une commande. |
| `history` | Affiche l’historique des commandes. |

### Outils utiles

| Commande | Description |
| ----- | ----- |
| `echo "texte"` | Affiche un texte dans la console. |
| `clear` | Efface le contenu de la console. |

## Gestionnaires de paquets

### Qu’est-ce qu’un gestionnaire de paquets ?
Un gestionnaire de paquets est un outil qui permet d’installer, mettre à jour, configurer et supprimer des logiciels sur un système Linux. Il gère automatiquement les dépendances (les bibliothèques ou autres logiciels nécessaires au fonctionnement d’un programme).

### Les Gestionnaires de Paquets les Plus Courants

| Gestionnaire de Paquets | Distribution(s) Associée(s) | Commandes de Base (Installation, Mise à jour, Suppression) | Particularités |
| ----- | ----- | ----- | ----- |
| **APT** (Advanced Package Tool) | Debian, Ubuntu, Linux Mint | `sudo apt update` (mettre à jour la liste des paquets), `sudo apt install [nom]`, `sudo apt remove [nom]`, `sudo apt upgrade` | Interface simple, très répandu, utilise des dépôts logiciels. |
| **DPKG** | Debian, Ubuntu | `sudo dpkg -i [fichier.deb]` (installation manuelle), `sudo dpkg -r [nom]` | Outil bas niveau, souvent utilisé avec APT. |
| **YUM** (Yellowdog Updater Modified) | CentOS, RHEL, Fedora (anciennes versions) | `sudo yum install [nom]`, `sudo yum remove [nom]`, `sudo yum update` | Remplacé par DNF sur les versions récentes de Fedora. |
| **DNF** (Dandified YUM) | Fedora, RHEL, CentOS (récent) | `sudo dnf install [nom]`, `sudo dnf remove [nom]`, `sudo dnf upgrade` | Plus rapide et efficace que YUM. |
| **Pacman** | Arch Linux, Manjaro | `sudo pacman -S [nom]` (installation), `sudo pacman -R [nom]` (suppression), `sudo pacman -Syu` (mise à jour) | Simple et rapide, très apprécié des utilisateurs d’Arch Linux. |
| **Zypper** | openSUSE | `sudo zypper install [nom]`, `sudo zypper remove [nom]`, `sudo zypper update` | Puissant et complet, idéal pour openSUSE. |
| **Snap** | Multi-distributions | `sudo snap install [nom]`, `sudo snap remove [nom]`, `sudo snap refresh` | Gère les paquets Snap (conteneurs logiciels). |
| **Flatpak** | Multi-distributions | `flatpak install [nom]`, `flatpak remove [nom]`, `flatpak update` | Permet d’installer des applications sandboxées. |

### Comparatif Rapide

| Critère | APT/DPKG | DNF/YUM | Pacman | Snap/Flatpak |
| ----- | ----- | ----- | ----- | ----- |
| **Facilité d’utilisation** | ★★★★☆ | ★★★★☆ | ★★★☆☆ | ★★★★★ |
| **Gestion des dépendances** | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★★ |
| **Vitesse** | ★★★☆☆ | ★★★★☆ | ★★★★★ | ★★★☆☆ |
| **Portabilité** | Debian/Ubuntu | RHEL/Fedora | Arch Linux | Multi-distributions |

### Conseils pour les Débutants

* Ubuntu/Debian : Commencez avec APT, c’est le plus simple et le plus documenté.
* Fedora : Utilisez DNF, il est moderne et performant.
* Arch Linux : Pacman est puissant mais nécessite un peu plus d’attention.
* Snap/Flatpak : Idéal pour installer des applications récentes ou non disponibles dans les dépôts officiels.

### Exemple Pratique

#### Pour installer le navigateur Firefox sur Ubuntu :

```shell
sudo apt update
sudo apt install firefox
```

#### Pour installer Firefox via Snap :

```shell
sudo snap install firefox
```

## Sources

[Linux](https://fr.wikipedia.org/wiki/Linux)

