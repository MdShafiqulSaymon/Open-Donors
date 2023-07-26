const express = require("express");
const router = express.Router();
const CheckUserExitstOrNot = require("../controllers/CheckUserExitstOrNot");
const InsertNewUser = require("../controllers/InsertNewUser");
router.post("/", async (req, res) => {
	try {
		const formData = req.body;
		const exist = await CheckUserExitstOrNot(formData.email, formData.phone);
		const existingUser = exist ? true : false;
		if (existingUser) {
			res
				.status(400)
				.json({
					messege: "This Email or Phone Number Already Exist!",
					user: exist,
				})
				.end();
		} else {
			InsertNewUser(formData);
			res.status(200).json({ messege: "Data Received Successfully!" }).end();
		}
	} catch {
		res
			.status(400)
			.json({
				messege: "Sending data are not correct formate and error",
			})
			.end();
	}
});
module.exports = router;
