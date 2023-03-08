const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const User = sequelize.define('user_shopping_site', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING
  }
})

module.exports = User