const jsonwebtoken = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jsonwebtoken.verify(token, 'ma_clé_secrète_à_changer_en_prod');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            console.log("User ID non valable");
            throw "User ID non valable";  
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée' });
    }
}