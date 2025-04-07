const userModel = require("../models/user.model");
const fileService = require("./file.service");

class PostService {
  async create(name, phone, tarif, image) {
    const newPost = await userModel.create({ name, phone, tarif, image });
    return newPost;
  }
  async fileUpload(file) {
    const fileName = fileService.save(file);
    return fileName;
  }
  async getAllUsers() {
    return await userModel.find();
  }
}

module.exports = new PostService();
