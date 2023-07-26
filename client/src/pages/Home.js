import React, { useContext } from "react";
import AboutCard from "../components/about/AboutCard";
import Hero from "../components/hero/Hero";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import { UserContext } from "../Contexts/UserContext";
import "../styles/home.css";
const Home = () => {
	const { user, setUser } = useContext(UserContext);
	return (
		<>
			<Header />
			<Hero />
			<AboutCard />
			{/* <Footer /> */}
		</>
	);
};

export default Home;
