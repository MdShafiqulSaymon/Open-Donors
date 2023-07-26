import React from "react";
import { Link } from "react-router-dom";
import Heading from "../common/heading/Heading";
import "../hero/Hero.css";

const Hero = () => {
	return (
		<>
			<section className="hero">
				<div className="container">
					<div className="row">
						<Heading title="OPEN BLOOD DONATION PLATFORM" />
						<p className="hero-text"><strong>Why buy blood from hospitals when you can get here for free?</strong></p>
					</div>
				</div>
			</section>
			<div className="margin"></div>
		</>
	);
};

export default Hero;
