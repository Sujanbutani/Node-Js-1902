// const http = require('http');
// const express = require("express");
// const { connectDB } = require("../src/db/dbconnection");
// const config = require("../src/config/config");
// const routes = require("./routes/v1")
// const app = express();
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use("/v1", routes);
// connectDB();

// // create server using http
// const server = http.createServer(app);

// server.listen(config.port, () =>{
//   console.log("server listning port number 8080");
// });


// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

// let movies = [
//   { id: 1, title: 'Inception', director: 'Christopher Nolan' },
//   { id: 2, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
//   { id: 3, title: 'The Godfather', director: 'Francis Ford Coppola' },
//   { id: 4, title: 'Pulp Fiction', director: 'Quentin Tarantino' },
//   { id: 5, title: 'The Dark Knight', director: 'Christopher Nolan' },
//   { id: 6, title: 'Fight Club', director: 'David Fincher' },
//   { id: 7, title: 'Forrest Gump', director: 'Robert Zemeckis' },
//   { id: 8, title: 'The Matrix', director: 'The Wachowskis' },
//   { id: 9, title: 'Schindler\'s List', director: 'Steven Spielberg' },
//   { id: 10, title: 'Titanic', director: 'James Cameron' },
//   // Add more movies as needed
// ];

// // Get all movies
// app.get('/api/movies', (req, res) => {
//   res.json(movies);
// });

// // Get a specific movie by ID
// app.get('/api/movies/:id', (req, res) => {
//   const movieId = parseInt(req.params.id);
//   const movie = movies.find((m) => m.id === movieId);

//   if (movie) {
//     res.json(movie);
//   } else {
//     res.status(404).json({ message: 'Movie not found' });
//   }
// });

// // Add a new movie
// app.post('/api/movies', (req, res) => {
//   const newMovie = req.body;
//   newMovie.id = movies.length + 1;
//   movies.push(newMovie);

//   res.status(201).json(newMovie);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let movies = [
  { id: 1, title: 'The Dark Knight', Image: 'https://media.istockphoto.com/id/1488301035/photo/buying-movie-tickets.jpg?s=2048x2048&w=is&k=20&c=hO_ekk9dYRlQp_W3y7EYp0nzVe4Mfr8yBs5SwxpQY6A=' },
  { id: 2, title: 'Fight Club', Image: 'https://media.istockphoto.com/id/1488301035/photo/buying-movie-tickets.jpg?s=2048x2048&w=is&k=20&c=hO_ekk9dYRlQp_W3y7EYp0nzVe4Mfr8yBs5SwxpQY6A=' },
  { id: 3, title: 'Forrest Gump', Image: 'https://media.istockphoto.com/id/1488301035/photo/buying-movie-tickets.jpg?s=2048x2048&w=is&k=20&c=hO_ekk9dYRlQp_W3y7EYp0nzVe4Mfr8yBs5SwxpQY6A=' },
  { id: 4, title: 'The Godfather', Image: 'https://media.istockphoto.com/id/1488301035/photo/buying-movie-tickets.jpg?s=2048x2048&w=is&k=20&c=hO_ekk9dYRlQp_W3y7EYp0nzVe4Mfr8yBs5SwxpQY6A=' },
  { id: 5, title: 'Inception', Image: 'https://media.istockphoto.com/id/1488301035/photo/buying-movie-tickets.jpg?s=2048x2048&w=is&k=20&c=hO_ekk9dYRlQp_W3y7EYp0nzVe4Mfr8yBs5SwxpQY6A=' },
  { id: 6, title: 'Pulp Fiction', Image: 'https://media.istockphoto.com/id/1488301035/photo/buying-movie-tickets.jpg?s=2048x2048&w=is&k=20&c=hO_ekk9dYRlQp_W3y7EYp0nzVe4Mfr8yBs5SwxpQY6A=' },
  { id: 7, title: 'Schindler\'s List', Image: 'https://media.istockphoto.com/id/1488301035/photo/buying-movie-tickets.jpg?s=2048x2048&w=is&k=20&c=hO_ekk9dYRlQp_W3y7EYp0nzVe4Mfr8yBs5SwxpQY6A=' },
  { id: 8, title: 'The Matrix', Image: 'https://media.istockphoto.com/id/1488301035/photo/buying-movie-tickets.jpg?s=2048x2048&w=is&k=20&c=hO_ekk9dYRlQp_W3y7EYp0nzVe4Mfr8yBs5SwxpQY6A=' },
  { id: 9, title: 'The Shawshank Redemption', Image: 'https://media.istockphoto.com/id/1488301035/photo/buying-movie-tickets.jpg?s=2048x2048&w=is&k=20&c=hO_ekk9dYRlQp_W3y7EYp0nzVe4Mfr8yBs5SwxpQY6A=' },
  { id: 10, title: 'Titanic', Image: 'https://media.istockphoto.com/id/1488301035/photo/buying-movie-tickets.jpg?s=2048x2048&w=is&k=20&c=hO_ekk9dYRlQp_W3y7EYp0nzVe4Mfr8yBs5SwxpQY6A=' },
];

// Sort movies alphabetically by title
movies.sort((a, b) => a.title.localeCompare(b.title));

// Get all movies
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

// Get a specific movie by ID
app.get('/api/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === movieId);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

// Add a new movie
app.post('/api/movies', (req, res) => {
  const newMovie = req.body;
  newMovie.id = movies.length + 1;
  movies.push(newMovie);

  // Sort movies alphabetically after adding a new one
  movies.sort((a, b) => a.title.localeCompare(b.title));

  res.status(201).json(newMovie);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
