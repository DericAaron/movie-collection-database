const express = require('express');
const router = express.Router(); //initiate router
const pool = require('../modules/pool'); //pull in pool.js

router.get('/', (req, res) => {

    const queryText = `SELECT movie.id, movie.title, movie.release_date, genre.genre_name, movie.run_time FROM movie
    JOIN genre ON movie.genre_id=genre.id;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {

    const movie = req.body
    const queryText = 'INSERT INTO movie (title, genre_id, release_date, run_time) VALUES($1, $2, $3, $4)';
    pool.query(queryText, [movie.title, movie.genre_id, movie.release_date, movie.run_time])
        .then( (result) => {
            console.log('movie posted succesfully');
            res.sendStatus(200);
        }).catch( (error) => {
            console.log('Error in post', error);
            
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