# Linux - Droits utilisateurs et groupes

## Gestion des utilisateurs

| Commande | Exemple d'utilisation | Description |
| ----- | ----- | ----- |
| `useradd` | `sudo useradd -m -s /bin/bash alice` | Crée l’utilisateur "alice" avec un répertoire personnel et le shell Bash. |
| `userdel` | `sudo userdel -r bob` | Supprime l’utilisateur "bob" et son répertoire personnel (`-r`). |
| `usermod` | `sudo usermod -aG developers alice` | Ajoute "alice" au groupe "developers" (`-aG`). |
| `passwd` | `sudo passwd alice` | Change le mot de passe de "alice". |
| `id` | `id alice` | Affiche l’UID, le GID et les groupes de "alice". |
| `cut -d: -f1 /etc/passwd` | `cut -d: -f1 /etc/passwd` | Liste tous les utilisateurs du système. |

## Gestion des groupes

| Commande | Exemple d’utilisation | Description |
| ----- | ----- | ----- |
| `groupadd` | `sudo groupadd developers` | Crée un groupe nommé "developers". |
| `groupdel` | `sudo groupdel oldgroup` | Supprime le groupe "oldgroup". |
| `gpasswd -a` | `sudo gpasswd -a alice developers` | Ajoute "alice" au groupe "developers". |
| `gpasswd -d` | `sudo gpasswd -d alice developers` | Retire "alice" du groupe "developers". |
| `groups` | `groups alice` | Affiche les groupes auxquels "alice" appartient. |
| `cut -d: -f1 /etc/group` | `cut -d: -f1 /etc/group` | Liste tous les groupes du système. |

## Commandes utiles

| Commande | Exemple d’utilisation | Description |
| ----- | ----- | ----- |
| `getent group` | `getent group developers` | Affiche la liste des membres du groupe "developers". |
| `chgrp` | `sudo chgrp developers fichier.txt` | Change le groupe propriétaire de "fichier.txt" à "developers". |
| `chown` | `sudo chown alice:developers fichier.txt` | Change le propriétaire à "alice" et le groupe à "developers" pour "fichier.txt". |

