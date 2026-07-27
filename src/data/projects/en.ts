import type { ProjectItem } from "../types";

export const projectsEn: ProjectItem[] = [
	{
		id: "1",
		title: "Website — LFGBBP Laboratory (UNQ)",
		description:
			"Institutional site for a UNQ research laboratory, with dynamic content loaded from JSON — my first project for a real client.",
		fullStory:
			"Development of the official website for the Laboratory of Physiology and Genetics of Beneficial Bacteria for Plants at UNQ, a project I did as a favor but with the same level of commitment as freelance work. Content — researchers, publications, and services — loads dynamically from JSON files instead of being hardcoded into the HTML, so the lab can update information without touching code. Built with plain HTML, CSS, and JavaScript, no frameworks, to keep it light and fast.",
		features: [
			"Dynamic content loaded from JSON (researchers, publications, services)",
			"Publications section that updates automatically and links to each researcher",
			"Interactive services accordion, built in plain JavaScript with no libraries",
			"Fully responsive with media queries",
			"No frameworks — plain HTML, CSS, and JS",
		],
		image: "/screenshots/lfgbbp/image1.png",
		tags: ["HTML5", "CSS3", "JavaScript"],
		featured: true,
		githubUrl: "https://github.com/lfgbbp/lfgbbp.github.io",
		demoUrl: "https://lfgbbp.github.io/",
	},
	{
		id: "2",
		title: "TechStore — E-commerce with admin panel",
		description:
			"Premium hardware e-commerce with authentication, real-time product CRUD against Firestore, and a protected admin panel.",
		fullStory:
			"Final project for the Talento Lab program, focused on practicing a full client-side fullstack architecture. I implemented a catalog migration (originally static JSON) to Firestore, authentication with Firebase Auth, and an admin panel with full CRUD operations over the catalog, including image uploads via the Imgbb API.",
		features: [
			"Global cart context (Context API) with real-time total calculation",
			"Firebase Auth authentication with protected routes for the admin panel",
			"Full product CRUD against Firestore, with image uploads via Imgbb",
			"Real-time search and mathematical pagination across the catalog",
			"Discount coupon system at checkout",
			"Dynamic per-page SEO with React Helmet",
		],
		gallery: [
			"/screenshots/techstore/techstore-1.png",
			"/screenshots/techstore/techstore-2.png",
		],
		image: "/screenshots/techstore.png",
		tags: [
			"React",
			"Firebase",
			"React Router",
			"Styled Components",
			"React Bootstrap",
		],
		featured: true,
		githubUrl:
			"https://github.com/Bertolini-Victor/ProyectoFinal-Curso-ReactJs-TalentoTech",
	},
	{
		id: "3",
		title: "Budget Generator",
		description:
			"Bilingual, multi-currency web service quote generator, with an editable catalog and backend-free PDF export.",
		fullStory:
			"An SPA built to put together web service quotes quickly: a catalog of 55 services across 11 categories, fully editable from the UI. Each service has its own description and price in both Spanish and English, and in both pesos and dollars — switching language or currency is instant. The final quote gets exported to PDF using the browser's native print function, avoiding a heavy library for something that simple.",
		features: [
			"Catalog of 55 services across 11 categories, editable live from a management modal",
			"Automatic localStorage persistence — nothing is lost on reload",
			"Bilingual (ES/EN) and multi-currency (ARS/USD) per individual service",
			"Native PDF export via window.print(), no external libraries",
			"Light/dark mode following the OS preference",
		],
		gallery: [
			"/screenshots/generador_presupuestos/image2.png",
			"/screenshots/generador_presupuestos/image3.png",
			"/screenshots/generador_presupuestos/image4.png",
		],
		image: "/screenshots/generador_presupuestos/image.png",
		tags: ["React", "Vite", "CSS3"],
		featured: true,
		githubUrl: "https://github.com/Bertolini-Victor/generador-presupuestos",
	},
	{
		id: "4",
		title: "Trivia — UNQ UI final project",
		description:
			"Trivia game with 4 difficulty levels, real-time questions via API, and mobile-first design.",
		fullStory:
			"Final integrative project for User Interface Construction at UNQ. The goal was a smooth, responsive experience consuming an external API in real time, with fairly complex game states: 4 difficulty levels, a timed challenge with a visual progress bar, and high scores saved in the browser.",
		features: [
			"4 difficulty levels (Easy, Normal, Hard, Extreme)",
			"Timed challenge, 10 seconds per question with a progress bar",
			"Real-time questions via Axios",
			"High scores persisted in localStorage",
			"Mobile-first design with a hamburger menu",
		],
		image: "/screenshots/trivia_game/home_desktop.png",
		tags: ["React", "Vite", "React Router", "Axios"],
		featured: true,
		githubUrl:
			"https://github.com/Bertolini-Victor/unq-ui-victor-hugo-bertolini-agaras-trabajo-final",
		demoUrl: "https://unq-ui-victor-hugo-bertolini-agaras.vercel.app/",
	},
	{
		id: "5",
		title: "Radar IoT — Parking assistant (ESP32-CAM)",
		description:
			"Parking assistance system with ultrasonic sensors and live video over WiFi, with a React dashboard consuming the microcontroller's own API.",
		fullStory:
			"Final project for Introduction to Microcontroller Programming with Arduino (UNQ). It combines an ESP32-CAM that reads three ultrasonic sensors non-blockingly (avoiding cross-interference between them), streams live MJPEG video, and exposes everything through its own REST API over a WiFi network the module itself creates. On the other end, a React dashboard consumes that API in real time, with reconnection handling — if the board disconnects or drops packets, the interface detects it instantly instead of silently showing stale data.",
		features: [
			"Array of 3 ultrasonic sensors with sequential reading, no cross-interference",
			"Live MJPEG video streaming straight from the microcontroller",
			"Custom REST API exposed by the ESP32-CAM over its own WiFi network",
			"Real-time disconnection detection via AbortController",
			"Responsive dark-mode dashboard, for desktop and mobile",
		],
		image: "/screenshots/radar-iot.png",
		tags: ["React", "Vite", "Arduino", "C++"],
		featured: true,
		githubUrl:
			"https://github.com/Bertolini-Victor/TrabajoFinal_IntroduccionALosMicrocontroladoresConArduino_UNQ",
	},
	{
		id: "6",
		title: "ORCID Publications Scraper",
		description:
			"Node.js script using Puppeteer to extract scientific publications from ORCID profiles — the tool that feeds data into the LFGBBP lab's website.",
		fullStory:
			"A Puppeteer-based scraper built to automate something that used to be done by hand: keeping the LFGBBP lab website's publications list up to date. It drives a headless Chromium instance to navigate public ORCID profiles, wait for dynamic content, page through results, and extract title, year, journal, DOI, and authors for each paper. A second script filters out duplicates by DOI when formatting varies across profiles.",
		features: [
			"Extracts data from multiple ORCID profiles automatically",
			"Handles dynamic content and pagination with Puppeteer",
			"Filters duplicate publications by title and DOI",
			"Saves results to timestamped JSON files",
			"Directly feeds the LFGBBP laboratory website",
		],
		image: "/screenshots/webscrapper/script.png",
		tags: ["Node.js", "Puppeteer", "JavaScript"],
		featured: false,
		githubUrl: "https://github.com/Bertolini-Victor/webScrapper",
	},
];
