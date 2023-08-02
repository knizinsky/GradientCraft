import React, { useEffect, useRef } from "react";
import GradientBlock from "../../components/GradientBlock/GradientBlock";

interface MoreGradientsSectionProps {
	gradient: {
		id: number;
		mainColor: string;
		gradientsData: { id: number; gradient: string }[];
	}[];
}

const MoreGradientsSection: React.FC<MoreGradientsSectionProps> = (props) => {
	const section = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const childrenBlocks = [...entry.target.children];
					let timeOffset = 0;

					childrenBlocks.forEach((block) => {
						timeOffset += 10;

						setTimeout(() => {
							block.classList.toggle("opacity-100", entry.isIntersecting);
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

	return (
		<>
			<p className="fs-2 text-uppercase pt-5">{props.gradient[0].mainColor}</p>
			<div
				className="container d-flex flex-wrap justify-content-center"
				ref={section}
			>
				{props.gradient[0].gradientsData.map((gradient) => {
					return (
						<GradientBlock
							key={gradient.id}
							gradientData={gradient.gradient}
						></GradientBlock>
					);
				})}
			</div>
		</>
	);
};

export default MoreGradientsSection;
