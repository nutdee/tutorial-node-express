const router = require("express").Router();

router.use("/users", require('./user'))
router.use("/auth", require('./auth'))

module.exports = router;
