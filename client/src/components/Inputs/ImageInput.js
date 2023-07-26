import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import getBase64Image from "../Helpers/getBase64Image";
const ImageInput = () => {
	const [image, setImage] = useState(null);
	const handleImageChange = async (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				//setImageBase64(reader.result);// If you and CompleteReg (imageBase64) data unCheck
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};
	return (
		<div
			className={`w-32 h-32 rounded-full border ${
				image ? "border-green-500" : "border-gray-300"
			}`}
		>
			{image ? (
				<img
					className="w-full h-full object-cover rounded-full"
					src={image}
					alt="Uploaded"
				/>
			) : (
				<label
					htmlFor="imageInput"
					className="flex flex-col items-center justify-center space-y-2 h-full cursor-pointer"
				>
					<FontAwesomeIcon icon={faPlus} size="2x" className="text-deepgray" />
					<p className="text-deepgray">Add photo</p>
					<input
						id="imageInput"
						type="file"
						accept="image/*"
						className="hidden"
						onChange={handleImageChange}
					/>
				</label>
			)}
		</div>
	);
};
export default ImageInput;
