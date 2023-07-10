const router = require("express").Router();

router.use("/", (req, res) => {
  res.send("Hello World from route folder");
});

module.exports = router;
