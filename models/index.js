const User = require('./User');
const Books = require('./Books');
const Music = require('./Music');
const Movies = require('./Movies');

// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

module.exports = { User, Books, Movies , Music,};
