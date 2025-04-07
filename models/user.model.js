const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		phone: { type: String, required: true },
		tarif: { type: String, required: true },
		image: { type: String, required: true },
	},
	{ timestamps: true }
)

module.exports = model('User', UserSchema)