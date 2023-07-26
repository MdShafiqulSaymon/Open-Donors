const mongoose = require("mongoose");
const Users = require("../models/Users");
// Checking for Registration. Email or phone exist or not from Databse.
const CheckUserExitstOrNot = async (Useremail, Userphone) => {
	const exist = await Users.findOne({
		$or: [{ email: Useremail }, { phone: Userphone }],
	});
	return exist;
};
module.exports = CheckUserExitstOrNot;
