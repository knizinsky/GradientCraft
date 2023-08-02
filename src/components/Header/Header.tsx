import CreateGradient from "../CreateGradient/CreateGradient";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={`text-white w-100 ${styles.header}`} id="gradient-creator">
			<div className={`container text-center py-5  ${styles.createGradientSection}`}>
				<CreateGradient />
				<div className=" my-5 w-75 mx-auto">
					<hr />
				</div>
				<h2 className="pb-2 mt-3 fs-1" id="browse-gradients">Browse 100 stunning gradients</h2>
				<p className="fs-5">
					Unlock the true potential of your projects with this captivating
					collection of hundreds of stunning gradients.
				</p>
			</div>
			<div className={styles.bluredBlock1}></div>
			<div className={styles.bluredBlock2}></div>
			<div className={styles.bluredBlock3}></div>
			<div className={styles.bluredBlock4}></div>
			<div className={styles.bluredBlock5}></div>
			<div className={styles.bluredBlock6}></div>
			<div className={styles.bluredBlock7}></div>
		</header>
	);
};

export default Header;
