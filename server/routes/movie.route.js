const express = require('express');
const router = express.Router(); //initiate router
const pool = require('../modules/pool'); //pull in pool.js

router.get('/', (req, res) => {

    const queryText = 'SELECT * FROM movie'
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {

    const movie = req.body
    const queryText = 'INSERT INTO movie (title, genre_id) VALUES($1, $2)';
    pool.query(queryText, [movie.title, movie.genre_id])
        .then( (result) => {
            console.log('movie posted succesfully');
            res.sendStatus(200);
        }).catch( (error) => {
            res.sendStatus(500);
        });
}); //end POST

router.delete('/:id', (req, res) => {
     const id = req.params.id;
     const queryText = 'DELETE FROM movie WHERE id=$1';
     pool.query(queryText, [id])
        .then( (result) => {
            console.log('MOVIE DELETED', id);
            res.sendStatus(200);
        }).catch( (err) => {
            res.sendStatus(500);
        });
}); //end DELETE

module.exports = router;