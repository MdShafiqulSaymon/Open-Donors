import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../styles/SignIn.css";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
const SignInForm = () => {
	const { user, setUser } = useContext(UserContext);
	const [isFormVisible, setFormVisible] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
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
		console.log(password);
		const singInData = {
			email,
			password,
		};
		try {
			const request = await fetch("https://open-donors.onrender.com/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(singInData),
			});
			const response = await request.json();
			if (request.status === 200) {
				localStorage.setItem("token", response.token);
				const decodedToken = jwtDecode(response.token);
				setUser(decodedToken);
				navigate("/");
			} else if (request.status === 400) {
				alert(response.messege);
			}
		} catch {
			console.error("Error:");
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
				{/* <CSSTransition
					in={isFormVisible}
					appear={true}
					timeout={500}
					classNames="swipe-left"
				> */}
				<form
					className="h-1/2 flex flex-col justify-center p-8"
					onSubmit={handleSubmit}
				>
					<h2 className="text-3xl mb-6">Sign In</h2>
					<input
						className="w-full border border-gray-900 rounded px-4 py-2 mb-4"
						type="text"
						placeholder="Username"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						className="w-full border border-gray-900 rounded px-4 py-2 mb-4"
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<div className="flex justify-between">
						<button
							className="bg-blue-500 text-white py-2 px-4 rounded"
							type="submit"
							onSubmit={handleSubmit}
						>
							Sign In
						</button>
						<Link to="/forgetpass">
							<a href="#" className="text-sky-500">
								Forgot password?
							</a>
						</Link>
					</div>
					<div className="mt-6">
						<Link to="/signup" className="text-blue-500">
							Register?
						</Link>
					</div>
				</form>
				{/* </CSSTransition> */}
			</div>
			<div className="absolute top-1/2 transform -translate-y-1/2 left-16 text-red-500 text-center">
				<h1 className="text-6xl font-bold">Open Donors</h1>
			</div>
		</div>
	);
};

export default SignInForm;
