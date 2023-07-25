const User = require("../models/user.model");
const md5 = require("md5");

const methods = {
  createUser(req) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = new User({
          email: req.email,
          password: md5(req.password),
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
  updateUser(id, req) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await User.findOneAndUpdate(
          { _id: id },
          {
            email: req.email,
            password: md5(req.password),
            firstName: req.firstName,
            lastName: req.lastName,
          },
          { new: true }
        );

        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  },
};

module.exports = { ...methods };
