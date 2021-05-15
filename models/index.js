const User = require('./User');
<<<<<<< Updated upstream
const Gallery = require('./Gallery');
const Painting = require('./Painting');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});
=======
const Books = require('./Books');
const Movies = require('./Movies');

// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });
>>>>>>> Stashed changes

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting };
