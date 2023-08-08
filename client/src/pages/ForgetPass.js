// import React, { useState } from "react";
// import EmailInput from "../components/Inputs/EmailInput";
// const ForgetPass = () => {
// 	const [value, setValue] = useState("");
// 	console.log(value);
// 	return (
// 		<div>
// 			<EmailInput
// 				label={"Enter Your email"}
// 				placeholder={""}
// 				name={"email"}
// 				value={value}
// 				setValue={setValue}
// 			/>
// 		</div>
// 	);
// };

// export default ForgetPass;
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../styles/SignIn.css";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
const ForgetPass = () => {
	const { user, setUser } = useContext(UserContext);
	const [isFormVisible, setFormVisible] = useState(false);
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		setFormVisible(true);
		const token = localStorage.getItem("token");
		if (token) {
			// Extract user data from the token and set it in the user state
			const decodedToken = jwtDecode(token);
			setUser(decodedToken);
			navigate("/");
		}
	}, [setUser]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email);
		const request = await fetch(
			"https://open-donors.onrender.com//forgetpass",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: email }),
			}
		);
		const response = await request.status;
		if (response == 200) {
			navigate("/signin");
		} else {
			alert("This is invalid mail");
		}
	};
	return (
		<div
			className="relative h-screen flex items-center bg-center bg-cover"
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/images/SignIn.jpg)`,
			}}
		>
			<div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-2/5 bg-white bg-opacity-50 rounded-lg">
				<CSSTransition
					in={isFormVisible}
					appear={true}
					timeout={3000}
					classNames="swipe-left"
				>
					<form
						className="h-1/2 flex flex-col justify-center p-8"
						onSubmit={handleSubmit}
					>
						<h2 className="text-3xl mb-6">Enter the email of your account</h2>
						<input
							className="w-full border border-gray-900 rounded px-4 py-2 mb-4"
							type="text"
							placeholder="Email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<div className="flex justify-between">
							<button
								className="bg-blue-500 text-white py-2 px-4 rounded"
								type="submit"
								onSubmit={handleSubmit}
							>
								Send
							</button>
						</div>
					</form>
				</CSSTransition>
			</div>
			<div className="absolute top-1/2 transform -translate-y-1/2 left-16 text-red-500 text-center">
				<h1 className="text-6xl font-bold">Open Donors</h1>
			</div>
		</div>
	);
};

export default ForgetPass;
