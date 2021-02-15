const { Model } = require("sequelize")
const Sequelize = require("sequelize")

const connection = new Sequelize('guiapress123', 'alexdev', 'olocomeu',{
    host: 'mysql742.umbler.com',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection;