const router = require('express').Router();
const { Gallery, Painting } = require('../models');
const movies = require('../models/movies');

// GET all galleries for homepage
// changed galleries to books and painting into movies
router.get('/', async (req, res) => {
  try {
    const dbbooksData = await books.findAll({
      include: [
        {
          model: movies,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const galleries = dbbooksData.map((books) =>
      books.get({ plain: true })
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
    const dbbooksData = await books.findByPk(req.params.id, {
      include: [
        {
          model: movies,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const gallery = dbbooksData.get({ plain: true });
    res.render('gallery', { books, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting is now movies 
router.get('/movies/:id', async (req, res) => {
  try {
    const dbmoviesData = await movies.findByPk(req.params.id);

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
