const router = require("express").Router();
const { Books, Movies, Music } = require("../models");

// GET all galleries for homepage
// changed galleries to books and painting into movies
router.get("/", async (req, res) => {
  try {
    let books;
    let movies;
    let music;
    if (req.session.loggedIn) {
      const dbbooksData = await Books.findAll({});
      books = dbbooksData.map((book) => book.get({ plain: true }));

      const dbMoviesData = await Movies.findAll({});
      movies = dbMoviesData.map((movie) => movie.get({ plain: true }));

      const dbMusicData = await Music.findAll({});
      music = dbMusicData.map((musicItem) => musicItem.get({ plain: true }));
    }

    res.render("homepage", {
      items: {
        books,
        movies,
        music,
      },
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get("/books/:id", async (req, res) => {
  try {
    const dbbooksData = await Books.findByPk(req.params.id, {});
    const book = dbbooksData.get({ plain: true });
    res.render("books", { book, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting is now movies
router.get("/movies/:id", async (req, res) => {
  try {
    const dbmoviesData = await Movies.findByPk(req.params.id);
    console.log(dbmoviesData);
    const movie = dbmoviesData.get({ plain: true });
    console.log("MOVIE:", movie);
    res.render("movies", { movie, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
