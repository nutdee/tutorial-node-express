const express = require("express");
const cors = require("cors");

module.exports = async (app) => {
  // Connect MongoDB
  require("../configs/database.js");

  // Parser Body
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // core
  app.use(
    cors({
      origin: "https://example.com",
      methods: ["GET", "POST", "PATCH"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
};
