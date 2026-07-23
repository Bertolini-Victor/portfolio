import React, { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { AllProjects } from "./components/allProjects/AllProjects";
import { Contact } from "./components/contact/Contact";
import { ProjectDetail } from "./components/projectDetail/ProjectDetail";

type View =
	| { type: "home" }
	| { type: "all-projects" }
	| { type: "detail"; projectId: string; returnTo: "home" | "all-projects" };

export const App: React.FC = () => {
	const [currentView, setCurrentView] = useState<View>({ type: "home" });

	const handleNavigateToAllProjects = () => {
		setCurrentView({ type: "all-projects" });
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleNavigateToHome = () => {
		setCurrentView({ type: "home" });
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleSelectProject = (id: string) => {
		const returnTo =
			currentView.type === "all-projects" ? "all-projects" : "home";
		setCurrentView({ type: "detail", projectId: id, returnTo });
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleBackFromDetail = () => {
		if (
			currentView.type === "detail" &&
			currentView.returnTo === "all-projects"
		) {
			setCurrentView({ type: "all-projects" });
		} else {
			setCurrentView({ type: "home" });
		}
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// Navegar desde la Navbar si estamos en otra pantalla
	const handleNavigateToSectionFromOtherView = (sectionId: string) => {
		setCurrentView({ type: "home" });
		setTimeout(() => {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}, 50);
	};

	return (
		<LanguageProvider>
			<div className="app-container">
				<Navbar
					currentViewType={currentView.type}
					onNavigateToSection={handleNavigateToSectionFromOtherView}
				/>

				<main className="main-content">
					{currentView.type === "home" && (
						<>
							<About />

							<div style={{ marginTop: "5rem" }}>
								<Projects
									onViewAllProjects={handleNavigateToAllProjects}
									onSelectProject={handleSelectProject}
								/>
							</div>

							<div style={{ marginTop: "5rem" }}>
								<Contact />
							</div>
						</>
					)}

					{currentView.type === "all-projects" && (
						<AllProjects
							onBackToHome={handleNavigateToHome}
							onSelectProject={handleSelectProject}
						/>
					)}

					{currentView.type === "detail" && (
						<ProjectDetail
							projectId={currentView.projectId}
							onBack={handleBackFromDetail}
						/>
					)}
				</main>
			</div>
		</LanguageProvider>
	);
};

export default App;
