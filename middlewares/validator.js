const { body, param, validationResult } = require('express-validator');

/**
 * Règles de validation et assainissement des données d'entrée lors du signup et login d'un utilisateur
 */
exports.userValidationRules = () => {
    return [
        // email doit être un email
        body('email').isEmail().normalizeEmail(),
        // mot de passe doit faire 4 caractères minimum
        body('password').isLength({ min: 4 }).trim().escape()
    ]
};




/**
 * Module de validation, à lancer après chaque règle de validation
 */
exports.validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    return res.status(422).json({ errors: extractedErrors })
};

