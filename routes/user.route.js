const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router.post("/users", userController.create);
router.post("/file-upload", userController.fileUpload);
router.get("/users/download-excel", userController.downloadUsersExcel);
router.post("/register", userController.register)
router.get("/register/download-excel", userController.downloadRegisterExcel)
module.exports = router;