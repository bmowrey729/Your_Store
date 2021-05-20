const sequelize = require('../config/connection');
const seedMovies = require('./moviesData');
const seedBooks = require('./booksData');
const seedMusic = require('./musicdata');
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMovies();  

  await seedBooks();
  await seedMusic();


  await seedMusic();

  process.exit(0);
};

seedAll();
