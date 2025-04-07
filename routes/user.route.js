const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router.post("/users", userController.create);
router.post("/file-upload", userController.fileUpload);

module.exports = router;