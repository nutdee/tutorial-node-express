require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3030,
  apiVersion: process.env.API_VERSION || 1,
}