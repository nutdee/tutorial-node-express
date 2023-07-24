const express = require('express');

module.exports = async (app) => {
  // Connect MongoDB
  require('../configs/database.js')

  // Parser Body
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
}
