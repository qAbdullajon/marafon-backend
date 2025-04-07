const userService = require("../service/user.service")

class UserCantroller {
    async create(req, res, next) {
		try {
            const {name, phone, tarif, image} = req.body
			const post = await userService.create(name, phone, tarif, image)
			res.status(201).json(post)
		} catch (error) {
			next(error)
		}
	}
	async fileUpload(req, res, next) {
		try {
			const post = await userService.fileUpload(req.files.image)
			res.status(201).json(post)
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new UserCantroller()