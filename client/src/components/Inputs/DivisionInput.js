import React, { useEffect, useState } from "react";

const DivisionInput = ({ divisions, onChange }) => {
	const handleSelectChange = (e) => {
		onChange(e.target.value);
	};

	// const filteredDivisions = divisions.filter((division) => {
	//     const divisionName = division.name || ""; // Check if division.name exists
	//     return divisionName.toLowerCase().includes(searchText.toLowerCase());
	// });
	return (
		<div>
			<label htmlFor="division">Division:</label>
			<select
				id="division"
				className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
				onChange={handleSelectChange}
			>
				<option value="">Select Division</option>
				{divisions.map((division) => (
					<option key={division.id} value={division.id}>
						{division.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default DivisionInput;
