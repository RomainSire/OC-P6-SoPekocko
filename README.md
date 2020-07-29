# OpenClassrooms P6 - API backend SoPekocko
6ème projet de la formation de [développeur web de OpenClassrooms](https://openclassrooms.com/fr/paths/185-developpeur-web)

## Scénario
Développement d'une application web dans laquelle les utilisateurs pourront ajouter leurs sauces préférées et liker ou disliker les sauces proposées par les autres utilisateurs.  
Le but est de créer le backend de l'application, le frontend étant déjà codé et fourni.

## Objectifs du projet et compétences évaluées
Développement Backend en Javascript
- Node.js
- Framework Express
- Base de données MongoDB
  - Hébergement sur MongoDB Atlas
  - Opérations relatives à la BDD réalisées avec mongoose
- API REST
- Sécurité OWASP et RGPD

## Pour tester l'application
1. Cloner le [frontend  de l'application fourni par OpenClassrooms](https://github.com/OpenClassrooms-Student-Center/dwj-projet6), et le lancer : 
    - Dans un terminal, accéder au dossier du frontend
    - Installer les dépendances: **npm install**
    - Lancer: **ng serve**
    - NB: attention, possible problème de version (cf. ci-dessous)
2. Cloner ce repository backend
3. Ajouter lun fichier de configuration nommé **".env"** à la racine du backend. A l'intérieur, 3 variables d'environnement "secrètes" seront définies:
    - MONGODB_PATH='lien_vers_la_base_de_données_mongoDB'
    - TOKEN_KEY='clé_secrète_pour_crypter_les_tokens'
    - EMAIL_KEY='clé_secrète_pour_crypter_les_emails'
4. Lancer le backend
    - Dans un autre terminal, accéder au dossier du backend
    - Installer les dépendances: **npm install**
    - Lancer **node server**
5. Le frontend est accessible à l'adresse http://localhost:4200
6. Pour des tests spécifiques (avec postman par exemple), le backend répond à l'adresse: http://localhost:3000

## Problèmes de version du frontend
Le [frontend fourni par OpenClassrooms](https://github.com/OpenClassrooms-Student-Center/dwj-projet6) utilise Angular 7, et les dépendances utilisées provoquaient des erreurs sous ma machine (Linux Mint) car la version de Node était trop récente.   
Pour solutionner le problème, deux options :
1. **Première méthode - utiliser une version de node plus ancienne :**
    - Installation de **nvm** pour gérer les versions de Node.js (https://github.com/nvm-sh/nvm)
    - Installation de la version 10.13 (**nvm install 10.13**)
    - Utilisation de la version 10.13  (**nvm use 10.13**)
    - Installation de node-sass : principal package qui posait problème dans le frontend (**npm install node-sass**)
    - Le frontend fonctionne finalement correctement !
    - Mais de ce fait, **coté backend**, puisque Node tourne avec une version ancienne, les dernières versions de certaines dépendances ne peuvent pas être utilisées: notamment bcrypt utilise la version 3.0.0
    - Utiliser la méthode 2 pour utiliser les dernières versions
2. **Deuxième méthode - mettre à jour le frontend fourni :**
    - Changer la version du package frontend qui pose problème : **npm install node-sass@4.12.0 --no-save --unsafe-perm**
    - Réinstaller les packages du backend avec les dernières versions
    - Lancer le backend avec la dernière version de Node.js (^12)
    - front et back devraient fonctionner correctement
