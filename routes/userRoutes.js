const express = require("express");


const protect = require("../middleware/authMiddleware");
const adminMid = require("../middleware/adminMiddleware");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/")
    .get([protect,adminMid], userController.getAllUsers)
    .post(protect, userController.createUser);

router.route("/:id")
    .get(protect, userController.getOneUser)
    .patch(protect, userController.updateUser)
    .delete(protect, userController.deleteUser);


module.exports = router;