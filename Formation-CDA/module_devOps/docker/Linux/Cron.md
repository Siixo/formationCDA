# Linux - Cron

## Planifier des tâches avec cron

| Commande/Étape | Exemple | Description |
| ----- | ----- | ----- |
| **Éditer la crontab** | `crontab -e` | Ouvre l’éditeur pour modifier les tâches planifiées de l’utilisateur courant. |
| **Syntax cron** | `* * * * * /chemin/vers/script.sh` | `minute heure jour mois jour_de_la_semaine commande` (ex: `0 3 * * *` = tous les jours à 3h). |
| **Exemple cron** | `0 3 * * * /home/user/backup.sh` | Exécute `backup.sh` tous les jours à 3h. |
| **Lister les tâches** | `crontab -l` | Affiche les tâches planifiées pour l’utilisateur courant. |
| **Supprimer cron** | `crontab -r` | **Attention** : Supprime toutes les tâches cron de l’utilisateur. |

## Syntaxe cron détaillée

| Position | Valeur possible | Description |
| ----- | ----- | ----- |
| 1 | 0-59 | Minute (0 à 59) |
| 2 | 0-23 | Heure (0 à 23) |
| 3 | 1-31 | Jour du mois (1 à 31) |
| 4 | 1-12 | Mois (1 à 12) |
| 5 | 0-6 | Jour de la semaine (0=dimanche) |

### Exemples :

* `*/5 * * * *` : Toutes les 5 minutes.  
* `0 0 * * 0` : Tous les dimanches à minuit.  
* `30 2 * * 1-5` : Du lundi au vendredi à 2h30.