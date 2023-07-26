import React from "react";

const Heading = ({ subtitle1, subtitle2, title }) => {
	return (
		<>
			<div id="heading">
				<h3>{subtitle1} </h3>
				<h3>{subtitle2} </h3>
				<h1><strong>{title}</strong> </h1>
			</div>
		</>
	);
};

export default Heading;
