const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const {email, password} = req.body;

    try{
        const [rows] = await db.query('SELECT id From users WHERE email = ?', [email]);
        if(rows.length > 0){
            return res.status(400).json({message: 'Usuario ya existe'});
        }

        const hashed = bcrypt.hashSync(password, 10);
        await db.query('INSERT INTO users (email, password) VALUES (?,?)', [email, hashed]);
        res.status(201).json({message: 'Usuario registrado'});
    } catch(err){
        console.error(err);
        res.status(500).json({message: 'Error en el servidor'});
    }

};

exports.login = async (req, res) => {
    
    const {email, password} = req.body;

    try{
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if(rows.length === 0){
            return res.status(400).json({message: 'Credenciales invalidas'});
        }

    const user = rows[0];
    const valid = bcrypt.compareSync(password, user.password);
    if(!valid) return res.status(400).json({message: 'Credenciales invalidas'});

    const token = jwt.sign({email: user.email}, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.json({token});

    } catch(err){
        console.error(err);
        res.status(500).json({message: 'Error en el servidor'});
    }

};

exports.profile = (req, res) => {
    res.json({message: `Perfil de ${req.user.email}`});
};