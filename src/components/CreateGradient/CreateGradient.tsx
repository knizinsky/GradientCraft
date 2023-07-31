import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import styles from "./CreateGradient.module.css";

const CreateGradient = () => {
	const [firstColor, setFirstColor] = useState("#e01010");
	const [secondColor, setSecondColor] = useState("#000000");
	const [direction, setDirection] = useState("to right");
	const [show, setShow] = useState(false);

	const changeFistColorHandler = (event: any) => {
		setFirstColor(event.target.value);
	};

	const changeSecondColorHandler = (event: any) => {
		setSecondColor(event.target.value);
	};

	const changeDirectionHandler = (event: any) => {
		setDirection(event.target.value);
	};

	const copyCssHandler = () => {
		navigator.clipboard.writeText(
			`background: linear-gradient(${direction}, ${firstColor}, ${secondColor})`
		);

		setShow(true);

        setTimeout(()=>{
            setShow(false)
        },1200)
	};

	return (
		<div className="container d-flex flex-column align-items-center justify-content-center mt-2">
			<h1 className="pb-3 mt-4">Create your own gradient</h1>
			<div className="align-items-center align-content-between justify-content-center d-flex flex-wrap w-100 position-relative">
				<div
					className={`${styles.currentGradient} shadow-sm`}
					style={{
						background: `linear-gradient(${direction}, ${firstColor}, ${secondColor})`,
					}}
				></div>
				<div className={`d-flex flex-column w-50 ${styles.inputsContainer}`}>
					<Form className=" h-100 d-flex flex-column justify-content-evenly">
						<Form.Group className="mb-3">
							<div className="d-flex align-items-center">
								<Form.Label htmlFor="directionSelect" className="me-3">
									Direction
								</Form.Label>
								<Form.Select
									id="directionSelect"
									onChange={changeDirectionHandler}
                                    className="shadow-sm"
								>
									<option value="to right">To right</option>
									<option value="to bottom">To bottom</option>
									<option value="to left">To left</option>
									<option value="to top">To top</option>
								</Form.Select>
							</div>
						</Form.Group>
						<div className="d-flex flex-wrap">
							<Form.Label
								htmlFor="directionSelect"
								style={{ marginRight: "35px" }}
							>
								Colors
							</Form.Label>
							<div className=" row col">
								<Form.Group
									className="mb-3 w-50"
									style={{ minWidth: "50px !important" }}
								>
									<div className="d-flex align-items-center">
										<Form.Control
											type="color"
											id="firstColor"
											value={firstColor}
											title="Choose first color"
											onChange={changeFistColorHandler}
											className={`w-100 shadow-sm ${styles.firstColorInput}`}
										/>
									</div>
								</Form.Group>
								<Form.Group className="mb-3 w-50">
									<Form.Control
										type="color"
										id="secondColor"
										value={secondColor}
										title="Choose second color"
										onChange={changeSecondColorHandler}
										className={`w-100 shadow-sm ${styles.secondColorInput}`}
									/>
								</Form.Group>
							</div>
						</div>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<div className="d-flex align-items-center">
								<Form.Label style={{ marginRight: "53px" }}>CSS</Form.Label>
								<Form.Control
									as="textarea"
									rows={1}
									value={`background: linear-gradient(${direction}, ${firstColor}, ${secondColor})`}
									readOnly
                                    className="shadow-sm"
								/>
							</div>
						</Form.Group>
						<div className="d-grid gap-2">
							<Button variant="dark" size="lg" className={`shadow ${styles.copyBtn}`} onClick={copyCssHandler}>
								Copy CSS
							</Button>
						</div>
					</Form>
				</div>
				<Alert
					show={show}
					variant="success"
					onClose={() => setShow(false)}
					dismissible
					className={`position-absolute z top-100 w-25 start-50 text-center translate-middle-x ${styles.alert}`}
				>
					<p>Copied!</p>
				</Alert>
			</div>
		</div>
	);
};

export default CreateGradient;
