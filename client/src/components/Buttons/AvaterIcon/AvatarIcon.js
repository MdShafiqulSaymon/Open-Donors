import React, { useState, useRef, useContext } from "react";
import { UserContext } from "../../../Contexts/UserContext";
import { useNavigate, Link } from "react-router-dom";
const AvatarIcon = ({ firstName, lastName }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const navigate = useNavigate();
	let timer;

	const handleMouseEnter = () => {
		clearTimeout(timer);
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		timer = setTimeout(() => {
			setIsOpen(false);
		}, 300); // 300ms delay before dropdown disappears
	};

	const handleActiveToggle = () => {
		setIsActive(!isActive);
	};

	const avatarText = `${firstName[0]}${lastName[0]}`.toUpperCase();
	const { user, setUser } = useContext(UserContext);
	const token = localStorage.getItem("token");
	const Logout = () => {
		if (localStorage.getItem("token")) {
			localStorage.removeItem("token");
			setUser(null);
			navigate("/signin");
		}
	};
	return (
		<div
			className="relative m-2"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
				{avatarText}
			</button>
			{isOpen && (
				<div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl">
					<div className="flex justify-between items-center px-4 py-2">
						<span className="text-sm text-black">
							{isActive ? "Active" : "Inactive"}
						</span>
						<div
							onClick={handleActiveToggle}
							className={`w-12 h-6 rounded-full p-1 ${
								isActive ? "bg-green-400" : "bg-red-400"
							}`}
						>
							<div
								className={`transform ${
									isActive ? "translate-x-6" : "translate-x-0"
								} transition-transform duration-200 ease-in-out bg-white w-4 h-4 rounded-full`}
							></div>
						</div>
					</div>
					{token && (
						<Link
							to="/edituser"
							className="block px-4 py-2 text-sm text-black hover:bg-gray-200"
							href="#"
						>
							Edit Account Information
						</Link>
					)}
					{token ? (
						<Link>
							<a
								className="block px-4 py-2 text-sm text-black hover:bg-gray-200"
								href="#"
								onClick={Logout}
							>
								Logout
							</a>
						</Link>
					) : (
						<Link to="/signin">
							<a
								className="block px-4 py-2 text-sm text-black hover:bg-gray-200"
								href="#"
								onClick={Logout}
							>
								LogIn
							</a>
						</Link>
					)}
				</div>
			)}
		</div>
	);
};

export default AvatarIcon;
