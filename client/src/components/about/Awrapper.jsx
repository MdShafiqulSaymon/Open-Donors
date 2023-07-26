import React from "react";
import { awrapper } from "../../dummydata";
import { useState, useEffect } from "react";

const Awrapper = () => {
	const [counts, setCounts] = useState([]);

	useEffect(() => {
		const intervals = awrapper.map((val) => {
			const data = parseInt(val.data);
			console.log(data);
			let count = 0;
			const interval = setInterval(() => {
				if (count < data) {
					count += 1;
					setCounts((prevCounts) => {
						const updatedCounts = [...prevCounts];
						const index = awrapper.findIndex((item) => item.data === val.data);
						updatedCounts[index] = count;
						return updatedCounts;
					});
				} else {
					clearInterval(interval);
				}
			}, 1); // Adjust the interval timing as per your preference

			return interval;
		});

		return () => {
			intervals.forEach((interval) => {
				clearInterval(interval);
			});
		};
	}, []);
	return (
		<>
			<section className="awrapper">
				<div className="container grid">
					{awrapper.map((val, index) => {
						return (
							<div className="box flex">
								<div className="img">
									<img src={val.cover} alt="" />
								</div>
								<div className="text">
									<h1>{counts[index]}+</h1>
									<h3>{val.title}</h3>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Awrapper;
