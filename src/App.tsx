import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import GradientSection from "./components/GradientSection/GradientSection";

import redGradients from "./data/data";
import CreateGradient from "./components/CreateGradient/CreateGradient";

function App() {
	return (
		<>
			<Navbar />
			<CreateGradient></CreateGradient>
			<Header />
			<main>
				{redGradients.map((item) => {
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
