import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { AllProjects } from "./components/allProjects/AllProjects";
import { Contact } from "./components/contact/Contact";
import { ProjectDetail } from "./components/projectDetail/ProjectDetail";

const ScrollToTop: React.FC = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);

	return null;
};

const HomeView: React.FC = () => (
	<>
		<About />
		<div style={{ marginTop: "5rem" }}>
			<Projects />
		</div>
		<div style={{ marginTop: "5rem" }}>
			<Contact />
		</div>
	</>
);

export const App: React.FC = () => {
	return (
		<LanguageProvider>
			<HashRouter>
				<ScrollToTop />
				<div className="app-container">
					<Navbar />
					<main className="main-content">
						<Routes>
							<Route path="/" element={<HomeView />} />
							<Route path="/proyectos" element={<AllProjects />} />
							<Route path="/proyectos/:id" element={<ProjectDetail />} />
						</Routes>
					</main>
				</div>
			</HashRouter>
		</LanguageProvider>
	);
};

export default App;
