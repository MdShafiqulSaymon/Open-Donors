import React from "react";

const ResultsetRow = ({
	photo,
	fullName,
	bloodGroup,
	phoneNumber,
	activeStatus,
}) => {
	return (
		<div className="flex items-center justify-between bg-red-300 hover:bg-gray-300 rounded-lg shadow-md hover:bg-light-green hover:shadow-xl">
			{/* Photo */}
			<div className="ml-2">
				<div
					className={`w-12 h-12 rounded-full ${
						activeStatus ? "border-green-500" : "border-red-500"
					} border p-1`}
				>
					<img
						src={photo}
						alt="Profile Photo"
						className="w-full h-full rounded-full"
					/>
				</div>
			</div>

			{/* Full Name */}
			<div>
				<h3 className="text-lg font-medium">{fullName}</h3>
			</div>

			{/* Blood Group */}
			<div className="ml-4">
				<p className="text-sm text-gray-500">Blood Group: {bloodGroup}</p>
			</div>

			{/* Phone Number */}
			<div className="ml-4">
				<p className="text-sm text-gray-500">Phone: {phoneNumber}</p>
			</div>

			{/* Active Status */}
			<div className="ml-4 mr-2">
				<span
					className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
						activeStatus
							? "bg-green-100 text-green-800"
							: "bg-gray-100 text-red-800"
					}`}
				>
					{activeStatus ? "Active" : "Inactive"}
				</span>
			</div>
		</div>
	);
};

export default ResultsetRow;
