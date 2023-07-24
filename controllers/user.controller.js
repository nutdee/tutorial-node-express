const userService = require("../services/user.service");

const methods = {
  async createUser(req, res) {
    try {
      let result = await userService.createUser(req.body);
      let response = {
        data: result,
      };
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getUsers(req, res) {
    try {
      let result = await userService.findAll();
      let response = {
        data: result,
      };
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = { ...methods };
