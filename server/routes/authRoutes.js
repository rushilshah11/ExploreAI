const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test } = require("../controllers/authController");

//middleware

router.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);

router.get("/", test);

module.exports = router;