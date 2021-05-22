const User = require('./User');
const Books = require('./Books');
const Music = require('./Music');
const Movies = require('./Movies');

User.hasMany(Movies, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Movies.belongsTo(User, {
    foreignKey: 'user_id'
});


User.hasMany(Books, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Books.belongsTo(User, {
    foreignKey: 'user_id'
});
User.hasMany(Music, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Music.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Books, Movies, Music, };
