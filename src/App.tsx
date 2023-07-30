import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<div className="container" style={{ height: "150vh" }}>
				<h1>Hello world!</h1>
				<Button>Click me!</Button>
			</div>
		</>
	);
}

export default App;
