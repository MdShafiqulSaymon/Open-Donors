import React, { useEffect, useState } from "react";
import ResultsetRow from "./ResultSetRow";

const Resultset = ({ divisionId, district, blood, handleSearch }) => {
	const [Data, setData] = useState([]);
	useEffect(() => {
		FindAllUser();
	}, [, district, divisionId, blood]);
	let preStateForBlood = [];
	// console.log(divisionId);
	// console.log(district);
	console.log(blood);
	const FindAllUser = async () => {
		const AllUsers = await fetch("https://open-donors.onrender.com//services", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const response = await AllUsers.json();
		if (divisionId >= "1" && divisionId <= "8") {
			const filterData = response.filter(
				(div) => div.divisionId === divisionId
			);
			if (district !== "64" && district >= "1") {
				const filterData2 = response.filter((div) => div.district === district);
				console.log(filterData2);
				setData(filterData2);
				preStateForBlood = filterData2;
			} else {
				preStateForBlood = filterData;
				setData(filterData);
			}
		} else {
			preStateForBlood = response;
			setData(response);
		}
		if (blood) {
			if (blood !== "All") {
				const filterData3 = preStateForBlood.filter((BL) => BL.blood === blood);
				console.log(filterData3);
				setData(filterData3);
			} else {
				setData(preStateForBlood);
			}
		}
	};

	return (
		<div>
			{Data.map((row) => (
				<div className="m-1 p-2">
					<ResultsetRow
						key={row._id}
						photo={"/images/avataricon.png"}
						fullName={row.FirstName + " " + row.LastName}
						bloodGroup={row.blood}
						phoneNumber={row.phone}
						activeStatus={row.activeStatus}
					/>
				</div>
			))}
		</div>
	);
};

export default Resultset;
