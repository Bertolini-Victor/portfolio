import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Navbar.css";

type Theme = "light" | "dark";

interface NavbarProps {
	onNavigateToSection?: (sectionId: string) => void;
	currentViewType?: "home" | "all-projects" | "detail";
}

export const Navbar: React.FC<NavbarProps> = ({
	onNavigateToSection,
	currentViewType = "home",
}) => {
	const { language, toggleLanguage, t } = useLanguage();

	const cvPath = `${import.meta.env.BASE_URL}cv-${language}.pdf`;

	const getSystemTheme = (): Theme => {
		if (
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			return "dark";
		}
		return "light";
	};

	const [theme, setTheme] = useState<Theme>(getSystemTheme);
	const [activeSection, setActiveSection] = useState<string>("sobre-mi");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleSystemThemeChange = (e: MediaQueryListEvent) => {
			setTheme(e.matches ? "dark" : "light");
		};

		mediaQuery.addEventListener("change", handleSystemThemeChange);
		return () =>
			mediaQuery.removeEventListener("change", handleSystemThemeChange);
	}, []);

	useEffect(() => {
		if (currentViewType !== "home") return;

		const handleScroll = () => {
			if (window.scrollY < 100) {
				setActiveSection("sobre-mi");
			}
		};

		window.addEventListener("scroll", handleScroll);

		const sections = document.querySelectorAll<HTMLElement>("section[id]");

		const observerOptions: IntersectionObserverInit = {
			root: null,
			rootMargin: "-10% 0px -40% 0px",
			threshold: 0.2,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && window.scrollY >= 100) {
					setActiveSection(entry.target.id);
				}
			});
		}, observerOptions);

		sections.forEach((section) => observer.observe(section));

		return () => {
			window.removeEventListener("scroll", handleScroll);
			sections.forEach((section) => observer.unobserve(section));
		};
	}, [currentViewType]);

	const toggleTheme = (): void => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		id: string,
	) => {
		e.preventDefault();
		window.history.replaceState(null, "", window.location.pathname);

		if (currentViewType !== "home" && onNavigateToSection) {
			onNavigateToSection(id);
		} else {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
				setActiveSection(id);
			}
		}
	};

	const navItems = [
		{ id: "sobre-mi", label: t.nav.about },
		{ id: "proyectos", label: t.nav.projects },
		{ id: "contacto", label: t.nav.contact },
	];

	return (
		<nav className="navbar">
			<div className="navbar-profile">
				<img
					src="https://via.placeholder.com/150"
					alt="Victor Bertolini Agaras"
					className="navbar-avatar"
				/>
				<p className="navbar-name">Victor Bertolini Agaras</p>
			</div>

			<ul className="navbar-menu">
				{navItems.map((item) => (
					<li key={item.id}>
						<a
							href={`#${item.id}`}
							className={`nav-item ${
								activeSection === item.id && currentViewType === "home"
									? "active"
									: ""
							}`}
							onClick={(e) => handleNavClick(e, item.id)}>
							{item.label}
						</a>
					</li>
				))}
			</ul>

			<div className="navbar-controls">
				{/* Botón de CV integrado en la zona inferior de controles */}
				<a
					href={cvPath}
					target="_blank"
					rel="noopener noreferrer"
					className="navbar-cv-btn"
					aria-label={t.nav.cv}>
					<svg className="navbar-cv-icon" viewBox="0 0 24 24">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
						<polyline points="14 2 14 8 20 8" />
						<line x1="16" y1="13" x2="8" y2="13" />
						<line x1="16" y1="17" x2="8" y2="17" />
					</svg>
					<span className="cv-btn-text">{t.nav.cv}</span>
				</a>

				<div className="navbar-controls-row">
					<button
						className="lang-btn"
						onClick={toggleLanguage}
						aria-label="Cambiar idioma">
						<span className="lang-code">{language === "es" ? "ES" : "EN"}</span>
					</button>

					<button
						className="theme-btn"
						onClick={toggleTheme}
						aria-label="Cambiar tema">
						{theme === "light" ? (
							<svg className="theme-icon" viewBox="0 0 24 24">
								<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
							</svg>
						) : (
							<svg className="theme-icon" viewBox="0 0 24 24">
								<circle cx="12" cy="12" r="5" />
								<line x1="12" y1="1" x2="12" y2="3" />
								<line x1="12" y1="21" x2="12" y2="23" />
								<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
								<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
								<line x1="1" y1="12" x2="3" y2="12" />
								<line x1="21" y1="12" x2="23" y2="12" />
								<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
								<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
							</svg>
						)}
					</button>
				</div>
			</div>
		</nav>
	);
};
