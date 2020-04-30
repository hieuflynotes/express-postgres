const moment = require('moment');
const dbQuery = require('../db/dbQuery');
const express = require('express');
const router = express.Router();

    

router.post('/', async (req, res) => {
    console.log('[USER] create ');
    const { email, first_name, last_name, password } = { email: 'hohieukn@gmail.com', first_name: 'ho', last_name: 'hieu', password: 'hohieu123' };
    const createdAt = moment(new Date());
    var
        isAdmin = false;
    const createUserQuery = `INSERT INTO
    users(email, first_name, last_name, password, created_at)
    VALUES($1, $2, $3, $4, $5)
    returning *`;
    const values = [
        email, first_name, last_name, password, createdAt
    ]

    try {
        const { rows } = await dbQuery.query(createUserQuery, values);
        res.send(rows[0]);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;