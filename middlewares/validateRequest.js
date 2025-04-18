const { validationResult } = require('express-validator');

module.exports = function (req, res, next) {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array().map(err => ({
                campo: err.param,
                mensaje: err.msg
            }))
        });
    }

    next();

}