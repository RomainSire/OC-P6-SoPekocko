const Joi = require('@hapi/joi');

/**
 * Validation des données d'entrée lors du signup et login d'un utilisateur
 */
const userSchema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(4).required()
});
exports.user = (req, res, next) => {
    const {error, value} = userSchema.validate(req.body);
    if (error) {
        res.status(422).json({ error: "email ou mot de passe invalide" });
    } else {
        next();
    }
};




/**
 * Validation des données d'entrée lors de l'ajout ou la modification d'une sauce
 */


//     body('sauce.*.userId').isLength({ min: 24, max: 24 }).trim().escape(),
//     body('sauce.*.name').isLength({ min: 10 }),
//     body('sauce.*.manufacturer').notEmpty().trim().escape(),
//     body('sauce.*.description').notEmpty().trim().escape(),
//     body('sauce.*.mainPepper').notEmpty().trim().escape(),
//     body('sauce.*.heat').isInt({ gt: 1, lt: 10 })