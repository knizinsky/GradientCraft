import styles from "./MoreGradients.module.css";
import MoreGradientsSection from "./MoreGradientsSection";
import { Link } from "react-router-dom";
import { gradientData } from "../../data/data";

const MoreGradients = () => {
  const currentPath = window.location.pathname;
  const selectedGradients = gradientData.find(
    (item) => item.path === currentPath
  );

  return (
    <div className={`mt-5 text-center ${styles.container}`}>
      {selectedGradients?.gradients.map((gradient, index) => (
        <MoreGradientsSection key={index} gradient={gradient} />
      ))}
      <div className="py-5">
        <Link
          to="/"
          className="fs-4 link-dark text-decoration-underline link-opacity-75-hover"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default MoreGradients;
