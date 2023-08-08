const config = require("../configs/app");
const jwt = require("jsonwebtoken");

const authMiddleware = {
  auth: (req, res, next) => {
    let accessToken = req.header("Authorization");
    if (!accessToken) {
      return res
        .status(401)
        .json({ error: "Unauthorized", message: "Access token is required" });
    }

    if (!accessToken.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Unauthorized", message: "Access token is invalid" });
    }

    accessToken = accessToken.split(" ")[1];
    jwt.verify(accessToken, config.jwtAccessTokenSecret, (error, decoded) => {
      if (error) {
        return res
          .status(403)
          .json({ error: "Unauthorized", message: error.message });
      }
      next();
    });
  },
};

module.exports = authMiddleware;
