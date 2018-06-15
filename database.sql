CREATE TABLE genre(
    id SERIAL PRIMARY KEY,
    genre_name VARCHAR(80) NOT NULL
);

CREATE TABLE movie (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    genre_id INTEGER NOT NULL REFERENCES genre,
    release_date DATE NOT NULL,
    run_time INTEGER NOT NULL
);

