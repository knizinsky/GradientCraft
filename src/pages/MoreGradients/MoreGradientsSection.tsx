import React from "react";
import GradientBlock from "../../components/GradientBlock/GradientBlock";

const MoreGradientsSection: React.FC<{
	gradient: {
		id: number;
		mainColor: string;
		gradientsData: { id: number; gradient: string }[];
	}[];
}> = (props) => {
	return (
		<>
			<p className="fs-2 text-uppercase pt-5">{props.gradient[0].mainColor}</p>
			<div className="container d-flex flex-wrap justify-content-center">
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
