import React from "react";
const BloodGroupInput = ({ blood, setBlood }) => {
	const bloodGroups = [
		" ",
		"A+",
		"A-",
		"B+",
		"B-",
		"AB+",
		"AB-",
		"O+",
		"O-",
		"All",
	];

	return (
		<div>
			<label htmlFor="bloodGroup">Blood Group: </label>
			<select
				className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
				id="bloodGroup"
				name="bloodGroup"
				value={blood}
				onChange={(e) => setBlood(e.target.value)}
			>
				{bloodGroups.map((group) => (
					<option key={group} value={group}>
						{group}
					</option>
				))}
			</select>
		</div>
	);
};
export default BloodGroupInput;
