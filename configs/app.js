require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3030,
  apiVersion: process.env.API_VERSION || 1,
  jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
  jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
}