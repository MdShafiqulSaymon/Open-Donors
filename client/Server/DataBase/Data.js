const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./Connection");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(express.json());
app.use(cors());
// Data Base Connection
// Creating Schema
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
// According to the Schema Creating Model.
const Users = mongoose.model("user", userSchema);
//Checking the eamil or phone already use or not.
const checkIfExists = async (Useremail, Userphone) => {
	const exist = await Users.findOne({
		$or: [{ email: Useremail }, { phone: Userphone }],
	});
	return exist;
};
const userValidation = async (Useremail, UserPassword) => {
	const exist = await Users.findOne({
		$and: [{ email: Useremail }, { password: UserPassword }],
	});
	return exist;
};
// Inserting Data to the model "Users" , where  "user" are collection
const InsertData = async (finalData) => {
	const newUser = new Users({
		FirstName: finalData.FirstName,
		LastName: finalData.LastName,
		activeStatus: finalData.activeStatus,
		phone: finalData.phone,
		age: finalData.age,
		blood: finalData.blood,
		confirmPassword: finalData.confirmPassword,
		district: finalData.district,
		divisionId: finalData.divisionId,
		dob: finalData.dob,
		email: finalData.email,
		imageBase64: "",
		password: finalData.password,
	});
	try {
		newUser.save();
	} catch (error) {
		if (error.code === 11000) {
			throw new Error("Email or Phone Number Already Exists");
		}
		throw error;
	}
};
module.exports = { InsertData, checkIfExists, userValidation };
