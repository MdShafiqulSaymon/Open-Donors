const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	FirstName: String,
	LastName: String,
	activeStatus: Boolean,
	phone: { type: String, unique: true },
	age: Number,
	blood: String,
	confirmPassword: String,
	district: String,
	divisionId: String,
	dob: String,
	email: { type: String, unique: true },
	imageBase64: String,
	password: String,
});
const Users = mongoose.model("user", userSchema);
module.exports = Users;
