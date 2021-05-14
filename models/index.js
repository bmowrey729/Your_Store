const User = require('./User');
const Movies = require('./Movies');
const Books = require('./Books');
const Music = require('./Music')
// User.hasMany(Books, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

module.exports = { User, Books, Movies, Music };
