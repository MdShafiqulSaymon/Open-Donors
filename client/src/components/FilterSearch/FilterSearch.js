import React, { useEffect, useState } from "react";
import DivisionInput from "../Inputs/DivisionInput";
import DistrictInput from "../Inputs/DistrictInput";
import divisiondata from "../../api/divisions.json";
import districtdata from "../../api/districts.json";
import BloodGroupInput from "../Inputs/BloodGroupInput";
import Resultset from "./Resultset";
const FilterSearchBar = () => {
	const [blood, setBlood] = useState("");
	const [divisionId, setDivisionID] = useState("");
	const [district, setDistrict] = useState("");

	const handleDivisionChange = (value) => {
		setDivisionID(value);
	};

	const handleDistrictChange = (value) => {
		setDistrict(value);
	};
	const handleBlood = (value) => {
		setBlood(value);
	};
	const handleSearch = () => {};
	useEffect(() => {}, [divisionId, district, blood, handleSearch]);
	return (
		<div>
			<div className="flex items-center justify-between bg-red-300 rounded-lg shadow-md hover:bg-light-green hover:shadow-xl">
				<div className="flex space-x-4 ml-10 mr-2">
					<DivisionInput
						className="mb-2"
						divisions={divisiondata}
						onChange={handleDivisionChange}
					/>
					<DistrictInput
						className="mb-2"
						districts={districtdata}
						divisionId={divisionId}
						onChange={handleDistrictChange}
					/>
					<BloodGroupInput
						className="mb-2"
						blood={blood}
						handleBlood={handleBlood}
					/>
				</div>
				<button
					className=" border border-gray-300 rounded px-4 py-2 bg-red-800 relative mr-64 hover:bg-red-700"
					onClick={handleSearch}
				>
					Search
				</button>
			</div>
			<Resultset
				divisionId={divisionId}
				district={district}
				blood={blood}
				handleSearch={handleSearch}
			/>
		</div>
	);
};

export default FilterSearchBar;
