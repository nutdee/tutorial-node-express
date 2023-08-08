const config = require("../configs/app");
const User = require("../models/user.model");
const md5 = require("md5");
const jwt = require("jsonwebtoken");

const methods = {
  async login(req) {
    return new Promise(async (resolve, reject) => {
      try {
        const md5Password = md5(req.password);
        const user = await User.findOne({
          email: req.email,
          password: md5Password,
        });

        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  },
  async genAccessToken(user) {
    return new Promise(async (resolve, reject) => {
      try {
        const payload = {
          id: user.id,
        };

        const accessToken = jwt.sign(
          payload,
          config.jwtAccessTokenSecret,
          { expiresIn: "1h" }
        );
        resolve(accessToken);
      } catch (error) {
        reject(error);
      }
    });
  },
  async genRefreshToken(user) {
    return new Promise(async (resolve, reject) => {
      try {
        const payload = {
          id: user.id,
        };

        const accessToken = jwt.sign(
          payload,
          config.jwtRefreshTokenSecret,
          { expiresIn: "24h" }
        );
        resolve(accessToken);
      } catch (error) {
        reject(error);
      }
    });
  },
};

module.exports = { ...methods };
