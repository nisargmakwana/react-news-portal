import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
	return (
		<>
			<Router>
				<div>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/article/:id" element={<DetailPage />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
