import styles from "./MoreGradients.module.css";
import MoreGradientsSection from "./MoreGradientsSection";

import {
	classicRedGradients,
	lightRedGradients,
	darkRedGradients,
	lightYellowGradients,
	darkYellowGradients,
	classicYellowGradients,
	lightGreenGradients,
	darkGreenGradients,
	classicGreenGradients,
	lightBlueGradients,
	darkBlueGradients,
	classicBlueGradients,
	lightPurpleGradients,
	darkPurpleGradients,
	classicPurpleGradients,
	lightDarkGradients,
	darkDarkGradients,
	classicDarkGradients,
} from "../../data/data";
import { Link } from "react-router-dom";

const MoreGradients = () => {
	const currentPath = window.location.pathname;

	return (
		<>
			{currentPath === "/red" && (
				<div className={`mt-5 text-center ${styles.container}`}>
					<MoreGradientsSection gradient={lightRedGradients} />
					<MoreGradientsSection gradient={classicRedGradients} />
					<MoreGradientsSection gradient={darkRedGradients} />
					<div className="py-5">
						<Link
							to="/"
							className="fs-4 link-dark text-decoration-underline link-opacity-75-hover"
						>
							Back to home page...
						</Link>
					</div>
				</div>
			)}
			{currentPath === "/yellow" && (
				<div className={`mt-5 text-center ${styles.container}`}>
					<MoreGradientsSection gradient={lightYellowGradients} />
					<MoreGradientsSection gradient={classicYellowGradients} />
					<MoreGradientsSection gradient={darkYellowGradients} />
					<div className="py-5">
						<Link
							to="/"
							className="fs-4 link-dark text-decoration-underline link-opacity-75-hover"
						>
							Back to home page...
						</Link>
					</div>
				</div>
			)}
			{currentPath === "/green" && (
				<div className={`mt-5 text-center ${styles.container}`}>
					<MoreGradientsSection gradient={lightGreenGradients} />
					<MoreGradientsSection gradient={classicGreenGradients} />
					<MoreGradientsSection gradient={darkGreenGradients} />
					<div className="py-5">
						<Link
							to="/"
							className="fs-4 link-dark text-decoration-underline link-opacity-75-hover"
						>
							Back to home page...
						</Link>
					</div>
				</div>
			)}
			{currentPath === "/blue" && (
				<div className={`mt-5 text-center ${styles.container}`}>
					<MoreGradientsSection gradient={lightBlueGradients} />
					<MoreGradientsSection gradient={classicBlueGradients} />
					<MoreGradientsSection gradient={darkBlueGradients} />
					<div className="py-5">
						<Link
							to="/"
							className="fs-4 link-dark text-decoration-underline link-opacity-75-hover"
						>
							Back to home page...
						</Link>
					</div>
				</div>
			)}
			{currentPath === "/purple" && (
				<div className={`mt-5 text-center ${styles.container}`}>
					<MoreGradientsSection gradient={lightPurpleGradients} />
					<MoreGradientsSection gradient={classicPurpleGradients} />
					<MoreGradientsSection gradient={darkPurpleGradients} />
					<div className="py-5">
						<Link
							to="/"
							className="fs-4 link-dark text-decoration-underline link-opacity-75-hover"
						>
							Back to home page...
						</Link>
					</div>
				</div>
			)}
			{currentPath === "/dark" && (
				<div className={`mt-5 text-center ${styles.container}`}>
					<MoreGradientsSection gradient={lightDarkGradients} />
					<MoreGradientsSection gradient={classicDarkGradients} />
					<MoreGradientsSection gradient={darkDarkGradients} />
					<div className="py-5">
						<Link
							to="/"
							className="fs-4 link-dark text-decoration-underline link-opacity-75-hover"
						>
							Back to home page...
						</Link>
					</div>
				</div>
			)}
		</>
	);
};

export default MoreGradients;
