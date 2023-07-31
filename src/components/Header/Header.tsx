import CreateGradient from "../CreateGradient/CreateGradient";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={` w-100 ${styles.header}`}>
			<div className={`container text-center py-5  `}>
				<CreateGradient />
        <div className=" my-5 w-75 mx-auto">
          <hr />
        </div>
				<h1 className="pb-2 mt-3">Browse 100 stunning gradients</h1>
				<p className="fs-5">
					Unlock the true potential of your projects with this captivating
					collection of hundreds of stunning gradients.
				</p>
			</div>
		</header>
	);
};

export default Header;
