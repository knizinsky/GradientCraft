import React from "react";

import styles from "./GradientBlock.module.css";

const GradientBlock: React.FC<{
	gradientData:string;
}> = (props) => {
	return (
		<div
			className={styles.gradientBlock}
			style={{
				background: `${props.gradientData}`,
			}}
		>
        </div>
	);
};

export default GradientBlock;
