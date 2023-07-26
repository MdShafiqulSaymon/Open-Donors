import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import SignInForm from "../components/SignInForm";
import { UserContext } from "../Contexts/UserContext";
const SignInPage = () => {
	const { user } = useContext(UserContext);
	return (
		<>
			<SignInForm />
		</>
	);
};
export default SignInPage;
