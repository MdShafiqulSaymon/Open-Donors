const express = require("express");
const router = express.Router();
const User = require("../models/Users");
router.put("/", async (req, res) => {
	try {
		const fullData = req.body;
		const preData = fullData.preData;
		const newUpdatedData = {
			email: preData.email,
			password: fullData.password,
			confirmPassword: fullData.password,
			FirstName: fullData.FirstName,
			LastName: fullData.LastName,
			phone: preData.phone,
			dob: preData.dob,
			age: preData.age,
			blood: preData.blood,
			divisionId: fullData.divisionId,
			district: fullData.district,
			activeStatus: fullData.isActive,
			imageBase64: preData.imageBase64,
		};
		res
			.status(200)
			.json({ mess: "Data get Successfully", preData, newUpdatedData })
			.end();
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
