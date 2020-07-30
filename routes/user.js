const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const validator = require('../middlewares/validator');

router.post(
    '/signup',
    validator.userValidationRules(),
    validator.validate,
    userCtrl.signup
);
router.post(
    '/login',
    validator.userValidationRules(),
    validator.validate,
    userCtrl.login
);

module.exports = router;