const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

const { isAuth } = require("../middleware/auth");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/isAuthTest", isAuth(), authController.authTest);

module.exports = router;
