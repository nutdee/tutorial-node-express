const authService = require("../services/auth.service");

const methods = {
  async login(req, res) {
    try {
      const user = await authService.login(req.body);
      if (user) {
        const token = await authService.genAccessToken(user);
        const refreshToken = await authService.genRefreshToken(user);
        let response = {
          accessToken: token,
          refreshToken: refreshToken
        };
        res.status(200).json(response);
      } else {
        res.status(404).json();
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async logout(req, res) {
    try {
      res.status(200).json();
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async refreshToken(req, res) {
    try {
      res.status(200).json();
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = { ...methods };
