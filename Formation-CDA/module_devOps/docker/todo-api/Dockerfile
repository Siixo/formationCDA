# Image légère Node.js
    FROM node:20-alpine

    # Dossier de travail
    WORKDIR /app

    # Installer uniquement ce qui est nécessaire pour "npm ci"
    COPY package*.json ./

    # Installation propre, sans devDependencies pour prod
    RUN npm ci --omit=dev

    # Copier le reste du code
    COPY . .

    # Variables d'env raisonnables
    ENV NODE_ENV=production     PORT=3000

    # Exposer le port de l’API
    EXPOSE 3000

    # Commande de démarrage
    CMD ["npx", "nodemon", "serveur.js"]