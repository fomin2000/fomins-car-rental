const Cars = require('./cars')
const User = require('./users')

User.hasMany(Cars, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Cars.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { Cars, User }