const express = require('express');
const router = express.Router(); //initiate router
const pool = require('../modules/pool'); //pull in pool.js

router.get('/', (req, res) => {

    const queryText = 'SELECT * FROM genre';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            res.sendStatus(500);
        });
}); //end GET

router.get('/count', (req, res) => {

    const queryText = `SELECT genre.id, genre.genre_name, COUNT(movie.genre_id) FROM movie
    JOIN genre ON movie.genre_id=genre.id
    GROUP BY genre.id, genre.genre_name;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            res.sendStatus(500);
        });
}); //end GET

router.post('/', (req, res) => {

    const genre = req.body
    const queryText = 'INSERT INTO genre (genre_name) VALUES($1)';
    pool.query(queryText, [genre.genre_name])
        .then( (result) => {
            console.log('genre posted succesfully');
            res.sendStatus(200);
        }).catch( (error) => {
            res.sendStatus(500);
        });
}); //end POST

router.delete('/:id', (req, res) => {
     const id = req.params.id;
     const queryText = 'DELETE FROM genre WHERE id=$1';
     pool.query(queryText, [id])
        .then( (result) => {
            console.log('GENRE DELETED', id);
            res.sendStatus(200);
        }).catch( (err) => {
            res.sendStatus(500);
        });
}); //end DELETE

module.exports = router;