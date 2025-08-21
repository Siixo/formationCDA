# TP Linux : Commandes de base, droits, cron et scripts

### **Étape 1 : Préparation de l'environnement**
1. **Créer une arborescence de dossiers :**
   - Créez un dossier `TP_Linux` dans votre répertoire personnel.
   - Dans `TP_Linux`, créez les sous-dossiers : `Scripts`, `Logs`, `Backup`, et `Temp`.

2. **Créer et manipuler des fichiers :**
   - Dans `Scripts`, créez un fichier vide `mon_script.sh`.
   - Dans `Logs`, créez un fichier `log_2025.txt` contenant : *"Premier log du TP Linux"*.
   - Déplacez `log_2025.txt` vers `Backup`.

3. **Afficher et rechercher du contenu :**
   - Affichez le contenu de `log_2025.txt` sans éditeur de texte.
   - Recherchez tous les fichiers commençant par `log` dans `TP_Linux` et ses sous-dossiers.

---

### **Étape 2 : Gestion des droits et utilisateurs**
1. **Modifier les permissions :**
   - Donnez à `mon_script.sh` les permissions : lecture/exécution pour tous, écriture uniquement pour le propriétaire.
   - Retirez toute permission d’écriture pour le groupe et les autres sur `Temp`.

2. **Créer un utilisateur et un groupe :**
   - Créez un utilisateur `etudiant` avec un mot de passe.
   - Créez un groupe `dev` et ajoutez `etudiant` à ce groupe.

3. **Changer propriétaire et groupe :**
   - Changez le propriétaire de `Scripts` pour `etudiant`.
   - Changez le groupe de `log_2025.txt` pour `dev`.

---

### **Étape 3 : Automatisation avec cron**
1. **Planifier une tâche :**
   - Ajoutez une tâche cron pour exécuter `date >> /home/[votre_utilisateur]/TP_Linux/Logs/date_log.txt` toutes les 5 minutes.
   - Vérifiez son exécution en consultant `date_log.txt`.

2. **Script de sauvegarde :**
   - Créez un script `backup.sh` dans `Scripts` qui copie le contenu de `Logs` vers `Backup`.
   - Planifiez son exécution quotidienne à 18h via cron.

---

### **Étape 4 : Création de scripts bash**
1. **Script de nettoyage :**
   - Créez `nettoyage.sh` dans `Scripts` pour supprimer les fichiers de `Temp` non modifiés depuis 2 jours.
   - Ajoutez un commentaire expliquant son fonctionnement.

2. **Script interactif :**
   - Créez `info_systeme.sh` pour afficher :
     - L’utilisateur actuel.
     - L’espace disque disponible sur `/`.
     - Les utilisateurs connectés.

---

### **Étape 5 : Challenge final (optionnel)**
1. **Script de surveillance :**
   - Créez `surveillance.sh` qui :
     - Vérifie l’existence de `Backup` (sinon, le crée).
     - Archive `Logs` dans `backup_logs.tar.gz` dans `Backup`.
     - Logge la date/heure dans `surveillance.log`.
   - Planifiez son exécution quotidienne à minuit via cron.

