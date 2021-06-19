const express = require('express');
const router = express.Router();
const postgresql = require('https://bancocadastro.herokuapp.com/cadastros/5').pool;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/login', (req, res, next) => {
    postgresql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        const query = 'SELECT * FROM usuarios WHERE email = ?';
        conn.query = (query, [req.body.email], (error, results, fields) => {
            conn.release();
            if (error) { return res.status(500).send({ error: error }) }
            if (results.length < 1) {
                return res.status(401).send({ mensagem: 'Falha na autenticação' })
            }
            bcrypt.compare(req.body.senha, results[0].senha, (err, result) => {
                if (err) {
                    return res.status(401).send({ mensagem: 'Falha na autenticação' })
                }
                if (result) {
                    const token = jwt.sign({
                        id_usuario: results[0].id_usuario,
                        email: results[0].email
                    });
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                };

            return res.status(200).send({
                mensagem: 'Autenticado com sucesso.',
                token: token
            });
        }
				return res.status(401).send({ mensagem: 'Falha na autenticação' });
    });
});
    });
});

export default router;