const userService = require("../service/user.service");

class UserCantroller {
  async create(req, res, next) {
    try {
      const { name, phone, tarif, image } = req.body;
      const post = await userService.create(name, phone, tarif, image);
      res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  }
  async fileUpload(req, res, next) {
    try {
      const post = await userService.fileUpload(req.files.image);
      res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  }
  async downloadUsersExcel(req, res, next) {
    try {
      const users = await userService.getAllUsers();

      const ExcelJS = require("exceljs");
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Users");

      worksheet.columns = [
        { header: "ID", key: "_id", width: 30 },
        { header: "Name", key: "name", width: 30 },
        { header: "Phone", key: "phone", width: 20 },
        { header: "Tarif", key: "tarif", width: 20 },
        { header: "Image", key: "image", width: 40 },
      ];

      users.forEach((user) => {
        worksheet.addRow(user);
      });

      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader("Content-Disposition", "attachment; filename=users.xlsx");

      await workbook.xlsx.write(res);
      res.end();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserCantroller();
