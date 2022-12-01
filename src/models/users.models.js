const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users', {
  id: {},
  first_name: {},
  last_name: {},
  user_name: {},
  email: {},
  password: {},
  age: {},
  role: {},
  country: {}

})