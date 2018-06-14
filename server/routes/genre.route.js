const express = require('express');
const router = express.Router(); //initiate router
const pool = require('../modules/pool'); //pull in pool.js

router.get('/', (req, res) => {

    const queryText = 'SELECT * FROM genre'
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            res.sendStatus(500);
        });
});

module.exports = router;