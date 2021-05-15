const sequelize = require('../config/connection');
const seedMovies = require('./moviesData');
const seedBooks = require('./booksData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMovies();

  await seedBooks();

  process.exit(0);
};

seedAll();
