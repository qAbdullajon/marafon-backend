const registerModel = require("../models/register.model");

class RegisterService {
  async create(name, phone) {
    const newPost = await registerModel.create({name, phone})
    return newPost;
  }
  async getAll() {
    const allData = await registerModel.find()
    return allData
  }
}

module.exports = new RegisterService();
