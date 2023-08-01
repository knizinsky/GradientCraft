import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GradientSection from "./components/GradientSection/GradientSection";

import {
	redGradients,
	yellowGradients,
	greenGradients,
	blueGradients,
	purpleGradients,
	darkGradients,
} from "./data/data";
import MoreGradients from "./pages/MoreGradients/MoreGradients";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navbar />
							<Header />
							<main>
								{redGradients.map((item: any) => {
									return (
										<GradientSection
											key={item.id}
											mainColor={item.mainColor}
											gradientsData={item.gradientsData}
										></GradientSection>
									);
								})}
								{yellowGradients.map((item: any) => {
									return (
										<GradientSection
											key={item.id}
											mainColor={item.mainColor}
											gradientsData={item.gradientsData}
										></GradientSection>
									);
								})}
								{greenGradients.map((item: any) => {
									return (
										<GradientSection
											key={item.id}
											mainColor={item.mainColor}
											gradientsData={item.gradientsData}
										></GradientSection>
									);
								})}
								{blueGradients.map((item: any) => {
									return (
										<GradientSection
											key={item.id}
											mainColor={item.mainColor}
											gradientsData={item.gradientsData}
										></GradientSection>
									);
								})}
								{purpleGradients.map((item: any) => {
									return (
										<GradientSection
											key={item.id}
											mainColor={item.mainColor}
											gradientsData={item.gradientsData}
										></GradientSection>
									);
								})}
								{darkGradients.map((item: any) => {
									return (
										<GradientSection
											key={item.id}
											mainColor={item.mainColor}
											gradientsData={item.gradientsData}
										></GradientSection>
									);
								})}
							</main>
							<Footer></Footer>
						</>
					}
				></Route>
				<Route
					path="/red"
					element={
						<>
							<Navbar />
							<MoreGradients></MoreGradients>
							<Footer />
						</>
					}
				></Route>
				<Route
					path="/yellow"
					element={
						<>
							<Navbar />
							<MoreGradients></MoreGradients>
							<Footer />
						</>
					}
				></Route>
				<Route
					path="/green"
					element={
						<>
							<Navbar />
							<MoreGradients></MoreGradients>
							<Footer />
						</>
					}
				></Route>
				<Route
					path="/blue"
					element={
						<>
							<Navbar />
							<MoreGradients></MoreGradients>
							<Footer />
						</>
					}
				></Route>
				<Route
					path="/purple"
					element={
						<>
							<Navbar />
							<MoreGradients></MoreGradients>
							<Footer />
						</>
					}
				></Route>
				<Route
					path="/dark"
					element={
						<>
							<Navbar />
							<MoreGradients></MoreGradients>
							<Footer />
						</>
					}
				></Route>
			</Routes>
		</>
	);
}

export default App;
