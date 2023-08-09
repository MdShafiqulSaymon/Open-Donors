import React, { useState, useEffect, useContext } from "react";
import { FiMenu } from "react-icons/fi";
import AvatarIcon from "../../Buttons/AvaterIcon/AvatarIcon";
import NotificationDropdown from "../../Buttons/NotificationIcon";
import { toBeRequired } from "@testing-library/jest-dom/matchers";
import { Link } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";
import jwtDecode from "jwt-decode";
const Header = () => {
	const { user, setUser } = useContext(UserContext);
	const [isOpen, setIsOpen] = useState(false);
	const [users, setUsers] = useState(true); // Initialize user as null
	const token = localStorage.getItem("token");
	let userData = {
		user:{
			firstName:"ABU",
			lastName:"HASAN",
		}
	}
	if(token){
		userData=jwtDecode(token);
	}
	useEffect(() => {
		console.log(userData)
	}, []);
	return (
		<nav className="bg-red-500 p-6">
			<div className="flex flex-col md:flex-row items-center justify-between mt-2">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-white text-2xl font-bold font-courgette">
							Open Donors
						</h1>
						<h2 className="text-white text-sm md:ml-4 md:text-lg font-courgette md:inline-block hidden">
							Donate And Find Donors Online
						</h2>
					</div>
					<button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
						<FiMenu className="text-2xl text-white" />
					</button>
				</div>
				<div className="flex flex-col md:flex-row items-center md:items-start mt-4 md:mt-0">
					<div
						className={`flex flex-col space-y-4 md:space-y-0 md:flex-row space-x-0 md:space-x-4 transition-all duration-1000 ${
							isOpen ? "block" : "hidden"
						} md:block`}
					>
						<Link to="/">
							<button className="text-white hover:bg-red-400 hover:shadow-md py-2 px-4 rounded font-courgette">
								Home
							</button>
						</Link>
						<Link to="/">
							<button className="text-white hover:bg-red-400 hover:shadow-md py-2 px-4 rounded font-courgette">
								About
							</button>
						</Link>

						{/* Conditionally render the Services button if user is logged in */}
						<Link to={token ? "/services" : "/signin"}>
							<button className="text-white hover:bg-red-400 hover:shadow-md py-2 px-4 rounded font-courgette">
								Services
							</button>
						</Link>
						<Link to="/contact">
							<button className="text-white hover:bg-red-400 hover:shadow-md py-2 px-4 rounded font-courgette">
								Contact
							</button>
						</Link>
					</div>

					<div className="flex items-center">
						{/* Conditionally render the SignInSignUp or AvatarIcon based on user's authentication status */}
						{!token ? (
							<Link to="/signin">
								<button className="text-white hover:bg-red-400 hover:shadow-md py-2 px-4 rounded font-courgette md:mb-0 mb-4 self-center md:self-auto md:ml-4 md:justify-self-end">
									SignIn/SignUp
								</button>
							</Link>
						) : (
							<div className="flex">
								<NotificationDropdown />

								<AvatarIcon firstName={userData.user.FirstName} lastName={userData.user.LastName} />
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
