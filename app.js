const express = require('express');
const app = express();


app.use((req, res) => {  // Pour chaque requête
    res.json({ message : "requete bien reçue! :)"}); // on va renvoyer un objet json
});

module.exports = app;