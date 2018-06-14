//require in pg
const pg = require('pg');

//not a function. is element of Pool
const Pool = pg.Pool;

//name of DB ----------------------------ADD NEW
const DATABASE_NAME = 'movie_db';

//configuration
const config = {
    database: DATABASE_NAME,  //The name of the DB to connect to
    host: 'localhost',        //Where the db is located
    port: 5432,               //the port the db is listening on
    max: 10,                  //max number of connections
    idleTimeoutMillis: 30000  //limit of 30 seconds to connect
}

const pool = new Pool(config);

pool.on('connect', (client) => {
    console.log(`Connected to database ${DATABASE_NAME} from ${client}`);   
});

pool.on('error', (err, client) => {
    console.log(`Error with database connection from ${client}. Error: ${err}`);
    process.exit(-1); //used to exit process
});

module.exports = pool;