const User = require("../models/user.model");

const methods = {
  createUser(req) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = new User({
          email: req.email,
          password: req.password,
          firstName: req.firstName,
          lastName: req.lastName,
        });
        const res = await user.save();
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
  findAll() {
    return new Promise(async (resolve, reject) => {
      try {
        Promise.all([User.find(), User.countDocuments()])
          .then((result) => {
            const res = result[0],
              count = result[1];
            resolve({
              totolCount: count,
              result: res,
            });
          })
          .catch((error) => {
            reject(error);
          });
      } catch (error) {
        reject(error);
      }
    });
  },
};

module.exports = { ...methods };
