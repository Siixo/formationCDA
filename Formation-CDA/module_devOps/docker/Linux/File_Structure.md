# Linux - Structure de fichiers

## Liste des répertoires dans `/`

| Répertoire | Description | Exemple d’utilisation |
| ----- | ----- | ----- |
| **/`bin`** | Contient les commandes de base (binaires) essentielles pour tous les utilisateurs. | `ls`, `cp`, `mv` : commandes utilisées quotidiennement. |
| **/`sbin`** | Contient les commandes système réservées à l’administrateur (root). | `fdisk`, `ifconfig` : outils pour gérer les disques et le réseau. |
| **/`etc`** | Fichiers de configuration du système et des applications. | `/etc/passwd` : informations sur les utilisateurs. |
| **/`home`** | Répertoires personnels des utilisateurs (ex: `/home/nathan`). | Stockage des documents, téléchargements, etc. |
| **/`root`** | Répertoire personnel de l’administrateur (root). | Fichiers et configurations spécifiques à l’administrateur. |
| **/`var`** | Fichiers variables comme les logs, les caches, et les données des services. | `/var/log/` : journaux (logs) du système. |
| **/`tmp`** | Fichiers temporaires. Le contenu est souvent supprimé au redémarrage. | Stockage temporaire de fichiers par des applications. |
| **/`usr`** | Programmes et bibliothèques pour les utilisateurs (non essentiels au démarrage). | `/usr/bin/` : commandes supplémentaires. |
| **/`lib`** | Bibliothèques partagées essentielles pour les commandes dans `/bin` et `/sbin`. | Fichiers `.so` utilisés par les programmes. |
| **/`dev`** | Fichiers représentant les périphériques (disques, clavier, etc.). | `/dev/sda` : premier disque dur. |
| **/`mnt`** | Point de montage pour les systèmes de fichiers temporaires (clés USB, disques externes). | `/mnt/usb` : montage d’une clé USB. |
| **/`media`** | Point de montage pour les périphériques amovibles (automatique). | `/media/cdrom` : montage d’un CD/DVD. |
| **/`opt`** | Logiciels supplémentaires installés manuellement. | `/opt/google/chrome` : installation personnalisée de Chrome. |
| **/`boot`** | Fichiers nécessaires au démarrage du système (noyau, GRUB). | `/boot/vmlinuz` : noyau Linux. |
| **/`proc`** | Système de fichiers virtuel contenant des informations sur les processus et le noyau. | `/proc/cpuinfo` : informations sur le processeur. |
| **/`sys`** | Informations sur les périphériques et les pilotes (similaire à `/proc`). | `/sys/class/net/` : informations sur les interfaces réseau. |

## **Points clés à retenir**

* **`/`** est la racine du système de fichiers.  
* **`/home`** est l’endroit où les utilisateurs stockent leurs fichiers.  
* **`/etc`** et **`/var`** sont cruciaux pour la configuration et le fonctionnement du système.  
* **`/bin`** et **`/sbin`** contiennent des commandes essentielles.  
* **Ne pas modifier** les répertoires système (`/bin`, `/sbin`, `/etc`, etc.) sans comprendre les conséquences.

