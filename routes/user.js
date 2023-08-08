const router = require("express").Router();
const controller = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/", authMiddleware.auth, controller.getUsers);
router.post("/", controller.createUser);
router.patch("/:id", controller.updateUser);

module.exports = router;
