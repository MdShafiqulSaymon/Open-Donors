const mongoose = require("mongoose");
const Users = require("../models/Users");
const EmailExistOrNot = async (Useremail) => {
	const exist = await Users.findOne({ email: Useremail });
	return exist;
};
module.exports = EmailExistOrNot;
