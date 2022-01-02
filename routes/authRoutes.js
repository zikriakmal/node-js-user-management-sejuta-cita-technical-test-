const express = require("express");
const authController = require("../controllers/authController");
const protectMiddleware =require("../middleware/authMiddleware");

const router = express.Router();


router.route('/login').post(authController.login);

router.route('/get-info').get(protectMiddleware,authController.getInfo);

module.exports = router;