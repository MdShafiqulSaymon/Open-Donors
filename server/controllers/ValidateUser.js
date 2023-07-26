const mongoose = require("mongoose");
const Users = require("../models/Users");
const userValidation = async (Useremail, UserPassword) => {
	const exist = await Users.findOne({
		$and: [{ email: Useremail }, { password: UserPassword }],
	});
	return exist;
};
module.exports = userValidation;
