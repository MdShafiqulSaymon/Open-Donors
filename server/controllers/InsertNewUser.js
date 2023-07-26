const mongoose = require("mongoose");
const Users = require("../models/Users");
const InsertNewUser = (finalData) => {
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
module.exports = InsertNewUser;
