import React, { useState } from "react";

const TrafficLight = () => {

	const [selectedColor, setSelectedColor] = useState("red");

	const changeColor = () => {
		const arr = ["red", "yellow", "green"];
		const rand = arr[Math.floor(Math.random() * arr.length)];
		setSelectedColor(rand);
	  };

	return (
		<div className="container text-center">
		<div className="traffic-light">
			<div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
			<div onClick={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
			<div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
		</div>
		<div className='text-center'>
		<button onClick={changeColor}
		className="btn btn-primary" > Randomize</button>
		</div>
		</div>

		
	);
};

export default TrafficLight;