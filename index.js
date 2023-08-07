const express = require("express");
const app = express();
const config = require("./configs/app");

// express configs
require('./configs/express')(app)

// connect database
require("./configs/database.js");

// route
app.use(require("./routes"));

app.listen(config.port, () => {
  console.log("Start server at port 3030.");
});
