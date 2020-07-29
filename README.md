

## Problèmes de version des dépendances et du frontend
Le [frontend fourni par OpenClassrooms](https://github.com/OpenClassrooms-Student-Center/dwj-projet6) utilise Angular 7, et les dépendances utilisées provoquaient des erreurs sous ma machine (Linux Mint) car la version de Node était trop récente.   
Pour solutionner le problème, deux options :
1. Première méthode - utiliser une version de node plus ancienne :
  - Installation de **nvm** pour gérer les versions de Node.js (https://github.com/nvm-sh/nvm)
  - Installation de la version 10.13 (**nvm install 10.13**)
  - Utilisation de la version 10.13  (**nvm use 10.13**)
  - Installation de node-sass : principal package qui posait problème dans le frontend (**npm install node-sass**)
  - Le frontend fonctionne finalement correctement !
  - Mais de ce fait, **coté backend**, puisque Node tourne avec une version ancienne, les dernières versions de certaines dépendances ne peuvent pas être utilisées: notamment bcrypt utilise la version 3.0.0
  - Utiliser la méthode 2 pour utiliser les dernières versions
2. Deuxième méthode - mettre à jour le frontend fourni :
  - Changer la version du package frontend qui pose problème : **npm install node-sass@4.12.0 --no-save --unsafe-perm** (à faire avant chaque lancement du front pour ne pas le modifier définitivement)
  - Réinstaller les packages du backend avec les dernières versions
  - Lancer le backend avec la dernière version de Node.js (^12)
  - front et back devraient fonctionner dorrectement
