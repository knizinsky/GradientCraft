import React from "react";
import GradientBlock from "../GradientBlock/GradientBlock";

const GradientSection: React.FC<{
	mainColor: string;
	gradientsData: {
		id: number;
		gradient: string;
	}[];
}> = (props) => {
	const capitalizeFirstLetter = (text: string) => {
		const firstLetter = text.charAt(0).toUpperCase();
		const restOfText = text.slice(1, text.length);

		return firstLetter + restOfText;
	};

	return (
		<div className="container text-center d-flex flex-column my-4">
			<p className="fs-3 mb-3">
				{capitalizeFirstLetter(props.mainColor)} gradients
			</p>
			<div className="d-flex w-100 justify-content-center flex-wrap">
				{props.gradientsData.map((gradient) => {
					return <GradientBlock key={gradient.id} gradientData={gradient.gradient}></GradientBlock>;
				})}
			</div>
			<p className="fs-5">See more {props.mainColor} gradients...</p>
			<hr />
		</div>
	);
};

export default GradientSection;
