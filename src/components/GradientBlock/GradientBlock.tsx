import React, {useState} from "react";
import { Alert } from "react-bootstrap";
import styles from "./GradientBlock.module.css";

const GradientBlock: React.FC<{
	gradientData:string;
}> = (props) => {
    const [show, setShow] = useState(false);

    const copyHandler = () => {
        navigator.clipboard.writeText(
			`background: ${props.gradientData}`
		);

        setShow(true);

        setTimeout(()=>{
            setShow(false);
        },1000)
    }

	return (
		<div
			className={`${styles.gradientBlock} shadow`}
			style={{
				background: `${props.gradientData}`,
			}}
            onClick={copyHandler}
		>
            <Alert
					show={show}
					variant="success"
					className={`position-absolute w-75 top-50 start-50 text-center translate-middle ${styles.alert}`}
				>
					<p>Copied!</p>
				</Alert>
        </div>
	);
};

export default GradientBlock;
