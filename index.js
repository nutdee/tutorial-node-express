const express = require("express");
const app = express();
const config = require("./configs/app");

app.use(require("./routes"));

app.listen(config.port, () => {
  console.log("Start server at port 3030.");
});
