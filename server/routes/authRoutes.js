const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

//middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded token data to request object
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid token." });
  }
};

router.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getProfile);

module.exports = router;
