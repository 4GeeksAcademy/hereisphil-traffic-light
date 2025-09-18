import React, { useState, useEffect } from "react";

const Home = () => {
	const [ color, setColor ] = useState("red");

	useEffect(() => {
		let counter = 0;
		const colors = ["red", "yellow", "green"];
   		
		setInterval(() => {
		counter > 2 ? counter = 0 : counter++;
    	setColor(colors[counter])}, 500);

  	}, []);

	return (
		<div className="the-traffic-lights">
			<div className={`a-single-light ${color === "red" ? "red active" : "red"}`}></div>
			<div className={`a-single-light ${color === "yellow" ? "yellow active" : "yellow"}`}></div>
			<div className={`a-single-light ${color === "green" ? "green active" : "green"}`}></div>
		</div>
	);
};

export default Home;