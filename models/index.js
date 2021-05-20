const User = require('./User');
const Books = require('./Books');
<<<<<<< HEAD
const Music = require('./Music');
const Movies = require('./Movies');

 

module.exports = { User, Books, Movies , Music,};
=======
const Music = require('./Music')
// User.hasMany(Books, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

module.exports = { User, Books, Movies, Music };
>>>>>>> main
