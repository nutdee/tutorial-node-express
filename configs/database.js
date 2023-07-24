const mongoose = require("mongoose");

const database = {
  mongoDB() {
    const uri =
      "mongodb://root:Aa123456@localhost:27017/local?authSource=admin";
    const db = mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to the database"))
      .catch((err) => console.error("Error:", err));

    return db;
  },
};

module.exports = database.mongoDB();
