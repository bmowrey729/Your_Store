const { Movies } = require("../models");

const sequelize = require("../config/connection");
const seedMovies = require("./moviesData");
const seedBooks = require("./booksData");
const seedMusic = require("./musicdata");
const seedAll = async () => {
  await sequelize.sync({ force: true });

  // fetch movie data from some API
  // const API_URL = "";
  // const apiData = await fetch(API_URL);
  // const apiMovies = apiData.map((movie) => {
  //   // here map this movie data to what your database expects
  //   return {
  //     title: movie.title, // movie title from api data
  //     release_year, // ...
  //   };
  // });
  // Movies.bulkCreate(moviedata);

  // DO SAME FOR BOOKS

  // DO SAME FOR MOVIES

  await seedMovies();
  await seedBooks();
  await seedMusic();

  process.exit(0);
};

seedAll();
