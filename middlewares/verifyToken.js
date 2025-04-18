const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    const authHeader = req.headers['authorization'];

    if(!authHeader) return res.status(403).json({message: 'Token requerido'});

    const token = authHeader.replace('Bearer ', '');

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        res.status(401).json({message: 'Token invalido o expirado'});
    }


}
