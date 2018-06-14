//requires
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//uses
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
const movie = require('./routes/movie.route');
app.use('/movie', movie);

const genre = require('./routes/genre.route');
app.use('/genre', genre);

//port
const port = process.env.PORT || 5000;

//server up
app.listen(port, () =>{
    console.log('Listening on port:', port); 
});