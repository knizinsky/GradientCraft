import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import GradientSection from "./components/GradientSection/GradientSection";

import { redGradients, yellowGradients, greenGradients, blueGradients } from "./data/data";

function App() {
	return (
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
			</main>
		</>
	);
}

export default App;
