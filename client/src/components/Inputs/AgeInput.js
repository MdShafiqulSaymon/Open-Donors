import React, { useState, useEffect } from "react";
import DobInput from "./DateOfBirthInput";
const AgeInput = ({ dob, setDob, age, setAge, handleAgeChange }) => {
	useEffect(() => {
		calculateAge();
	}, [dob]);
	const calculateAge = () => {
		const birthDate = new Date(dob);
		const currentDate = new Date();
		const calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();

		setAge(calculatedAge);
	};
	return (
		<div>
			<DobInput dob={dob} setDob={setDob} onAgeChange={handleAgeChange} />
			<label>Age</label>
			<input
				className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
				type="number"
				value={age || 0}
				disabled
				style={{ color: "gray" }}
			/>
			{age>=18? '': <p className="text-red-500 text-xs italic">Age must be 18 or above</p>}
		</div>
	);
};

export default AgeInput;
