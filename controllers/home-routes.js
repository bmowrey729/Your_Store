const router = require('express').Router();
const { Books, Movies } = require('../models');

// GET all galleries for homepage
// changed galleries to books and painting into movies
router.get('/', async (req, res) => {
  try {
    const dbbooksData = await Books.findAll({
      // include: [
      //   {
      //     model: Movies,
      //     attributes: ['filename', 'description'],
      //   },
      // ],
    });

    const books = dbbooksData.map((book) =>
      book.get({ plain: true })
    );
    res.render('homepage', {
      books,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/books/:id', async (req, res) => {
  try {
    const dbbooksData = await Books.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: movies,
      //     attributes: [
      //       'id',
      //       'title',
      //       'artist',
      //       'exhibition_date',
      //       'filename',
      //       'description',
      //     ],
      //   },
      // ],
    });

    const book = dbbooksData.get({ plain: true });
    res.render('books', { book, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting is now movies 
router.get('/movies/:id', async (req, res) => {
  try {
    const dbmoviesData = await Movies.findByPk(req.params.id);

    const movies = dbmoviesData.get({ plain: true });
    res.render('movies', { movies, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
