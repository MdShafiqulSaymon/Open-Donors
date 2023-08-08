const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const EmailExistOrNot = require("../controllers/EmailExistOrNot");

router.post("/", async (req, res) => {
	console.log(req.body.email);
	const exits = await EmailExistOrNot(req.body.email);
	if (!exits) {
		res.status(400).json({ message: " This Email Not Exist" });
	} else {
		const tempPass = Math.floor(Math.random() * (999999 - 10000)) + 10000;
		exits.password = tempPass;
		try {
			await exits.save();
		} catch {
			console.log("Something is wrong");
		}
		const transporter = nodemailer.createTransport({
			service: "gmail",
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: "cuetblooddonors@gmail.com",
				pass: "rsucbsduyjiwddmc",
			},
		});
		const mailOptions = {
			from: "cuetblooddonors@gmail.com",
			to: `${req.body.email}`,
			subject: "Sending Email using Node.js",
			text: `This is your New password : ${tempPass} . Enter using this password and login. we suggeste you to change your password ASAP`,
		};
		try {
			transporter.sendMail(mailOptions, function (err, info) {
				if (err) {
					console.log(err);
					res
						.status(400)
						.json({ message: `${req.body.email} is Invalid email.` });
				} else {
					res
						.status(200)
						.json({ message: `Email Sent to this: ${req.body.email}` });
				}
			});
		} catch {
			res
				.status(200)
				.json({ message: `Email Sent to this: ${req.body.email}` });
		}
	}
});
module.exports = router;
