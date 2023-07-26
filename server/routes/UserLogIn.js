const express = require("express");
const router = express.Router();
const ValidateUser = require("../controllers/ValidateUser");
const JWT = require("jsonwebtoken");
require("dotenv/config");
router.post("/", async (req, res) => {
	try {
		const formData = req.body;
		const exist = await ValidateUser(formData.email, formData.password);
		const existingUser = exist ? true : false;
		if (existingUser) {
			const token = JWT.sign({ user: exist }, process.env.JWT_SECRET_KEY, {
				expiresIn: "2h",
			});
			res
				.status(200)
				.json({
					messege: "Authorize User!",
					user: exist,
					token: token,
				})
				.end();
		} else {
			res.status(400).json({ messege: "Wrong User" }).end();
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
