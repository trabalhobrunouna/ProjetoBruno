import express from 'express';
const router = express.Router();
const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt');
const jwt = require('jasonwebtoken');


router.post('/login', (req, res, next) =>{
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({error: error})}
        const query = `SELECT * FROM usuarios WHERE email = ?`;
        conn.query(query,[req.body.email], (error, results, fields) => {
            conn.release();
            if (error) { return res.status(500).send({ error: error})}
            if (results.length < 1) {
                return res.status(401).send({mensagem: 'Falha na autenticação'})
            }
            bcrypt.compare(req.body.senha, results[0].senha, (err, result) => {
                if (err) {
                    return res.status(401).send({mensagem: 'Falha na autenticação' }) 
                }
                if (result) {
                    let token = jwt.sign({
                        id_usuario: results[0].id_usuario,
                        email: results[0].email
                    }, '')
                    return res.status(200).send({ mensagem: 'Autenticado com sucesso.'})
                }

                return   res.status(401).send({mensagem: 'Falha na autenticação' }) 
            });
        });
    });
})

export default router;