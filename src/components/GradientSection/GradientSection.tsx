import React, { useRef, useEffect } from "react";
import GradientBlock from "../GradientBlock/GradientBlock";

import styles from "./GradientSection.module.css";
import { Link } from "react-router-dom";

interface GradientsSectionProps {
	mainColor: string;
	gradientsData: {
		id: number;
		gradient: string;
	}[];
}

const GradientSection: React.FC<GradientsSectionProps> = (props) => {
	const section = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const childrenBlocks = [...entry.target.children];
					let timeOffset = 0;

					childrenBlocks.forEach((block) => {
						timeOffset+=60;

						setTimeout(() => {
							block.classList.toggle(
								"opacity-100",
								entry.isIntersecting
							);
						}, timeOffset);
						
					});

					if (entry.isIntersecting) {
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		if (section.current) {
			observer.observe(section.current);
		}

		return () => {
			if (section.current) {
				observer.unobserve(section.current);
			}
		};
	}, []);

	const capitalizeFirstLetter = (text: string) => {
		const firstLetter = text.charAt(0).toUpperCase();
		const restOfText = text.slice(1, text.length);

		return firstLetter + restOfText;
	};

	return (
		<div
			className={`w-100 ${styles[`${props.mainColor}-block`]}`}
			id={props.mainColor}
		>
			<div className={`container text-center d-flex flex-column`}>
				<p
					className={`fs-2 my-4 mt-5 fw-medium text-uppercase ${styles.blockTitle}`}
				>
					{capitalizeFirstLetter(props.mainColor)} gradients
				</p>
				<div
					className="d-flex w-100 justify-content-center flex-wrap"
					id={props.mainColor}
					ref={section}
				>
					{props.gradientsData.map((gradient) => {
						return (
							<GradientBlock
								key={gradient.id}
								gradientData={gradient.gradient}
							></GradientBlock>
						);
					})}
				</div>
				<div className="w-100 m-4 mb-5">
					<Link
						to={`/${props.mainColor}`}
						className={`fs-4 m-4 mb-5 text-light ${styles.link}`}
					>
						See more {props.mainColor} gradients...
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GradientSection;
