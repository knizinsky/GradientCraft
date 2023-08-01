import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MoreGradients from "./pages/MoreGradients/MoreGradients";
import GradientSection from "./components/GradientSection/GradientSection";

import {
	redGradients,
	yellowGradients,
	greenGradients,
	blueGradients,
	purpleGradients,
	darkGradients,
} from "./data/data";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Navbar />
						<Header />
						<main>
							{[
								redGradients,
								yellowGradients,
								greenGradients,
								blueGradients,
								purpleGradients,
								darkGradients,
							].map((gradients, index) => (
								<React.Fragment key={index}>
									{gradients.map((item: any) => (
										<GradientSection
											key={item.id}
											mainColor={item.mainColor}
											gradientsData={item.gradientsData}
										/>
									))}
								</React.Fragment>
							))}
						</main>
						<Footer />
					</>
				}
			/>
			<Route
				path="/red"
				element={
					<>
						<Navbar />
						<MoreGradients />
						<Footer />
					</>
				}
			/>
			<Route
				path="/yellow"
				element={
					<>
						<Navbar />
						<MoreGradients />
						<Footer />
					</>
				}
			/>
			<Route
				path="/green"
				element={
					<>
						<Navbar />
						<MoreGradients />
						<Footer />
					</>
				}
			/>
			<Route
				path="/blue"
				element={
					<>
						<Navbar />
						<MoreGradients />
						<Footer />
					</>
				}
			/>
			<Route
				path="/purple"
				element={
					<>
						<Navbar />
						<MoreGradients />
						<Footer />
					</>
				}
			/>
			<Route
				path="/dark"
				element={
					<>
						<Navbar />
						<MoreGradients />
						<Footer />
					</>
				}
			/>
		</Routes>
	);
}

export default App;