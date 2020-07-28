const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sauceRoutes = require('./routes/sauce');

/**
 * Connexion à la base de données
 */
mongoose.connect('mongodb+srv://romain:iwVq4ewFUfYer3Wd@cluster0.c40ys.gcp.mongodb.net/sopekocko?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Lancement de Express
const app = express();

/**
 * Middlewares
 */
// Autorise le CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// Parse le body des requetes en json
app.use(bodyParser.json());

/**
 * Routes
 */
app.use('/api/sauces', sauceRoutes);

module.exports = app;