import React from "react";
import GradientBlock from "../GradientBlock/GradientBlock";

import styles from './GradientSection.module.css'
import { Link } from "react-router-dom";

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
		<div className={`w-100 ${styles[`${props.mainColor}-block`]}`} id={`${props.mainColor}`}>
			<div className={`container text-center d-flex flex-column `}>
			<p className={`fs-2 my-4 mt-5 fw-medium text-uppercase ${styles.blockTitle}`}>
				{capitalizeFirstLetter(props.mainColor)} gradients
			</p>
			<div className="d-flex w-100 justify-content-center flex-wrap">
				{props.gradientsData.map((gradient) => {
					return <GradientBlock key={gradient.id} gradientData={gradient.gradient}></GradientBlock>;
				})}
			</div>
			<Link to={`/${props.mainColor}`} className={`fs-4 m-4 mb-5 text-light ${styles.link}`}>See more {props.mainColor} gradients...</Link>
		</div>
		</div>
	);
};

export default GradientSection;
