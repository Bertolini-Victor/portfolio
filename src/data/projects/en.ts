import type { ProjectItem } from "../types";

export const projectsEn: ProjectItem[] = [
	{
		id: "1",
		title: "Website — LFGBBP Laboratory (UNQ)",
		description:
			"Institutional site for a UNQ research laboratory, with dynamic content loaded from JSON — my first project for a real client.",
		fullStory:
			"My mom's lab needed a way to publicize their work — research lines, papers, members — but between the economic situation of science and public universities, there was no budget for a paid build with domain and hosting. They asked me for the favor, and I built it simple but professional, meant to live for free on GitHub Pages. Before writing any code, I showed them a UI design put together with AI's help so they could sign off on it, and once that was settled, the hardest part was recovering and cleaning up the papers — I built a separate scraper to pull them from ORCID and filter duplicates, then they checked that none were missing. They still use it today and share it in their official emails; every so often they ask me for a small change, removing someone who's no longer there or adding a new collaborator. If I rebuilt it today I'd probably use React, now that I know it hosts fine on GitHub Pages — though that would add friction for them requesting minor changes, which is simpler to touch with plain HTML and JSON.",
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
			"Final project for a TalentoTech React course — the e-commerce domain was given by the assignment, not something I chose, and 'Talento Lab' is just the fictional store name I used for it. The most laborious part was migrating the catalog from a plain-JS cart, with a huge product JSON, over to Firebase — all that data had to be adapted to the new structure. Firebase Auth also took some time, more because it was my first time using it than because of any real difficulty with the concept. I'm currently rebuilding it with a Java and Spring Boot backend of my own, to actually understand what Firebase was handling under the hood instead of leaving it to an automated tool.",
		features: [
			"Global cart context (Context API) with real-time total calculation",
			"Firebase Auth authentication with protected routes for the admin panel",
			"Full product CRUD against Firestore, with image uploads via Imgbb",
			"Real-time search and mathematical pagination across the catalog",
			"Discount coupon system at checkout",
			"Dynamic per-page SEO with React Helmet",
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
			"It came from a real need: a client needed quotes for two different websites, and since I'd never put together a proper, easily repeatable quote before, I built a tool to simplify the task instead of drafting a one-off document by hand. The hard part wasn't the coding — it was figuring out what it actually needed: an editable catalog, configurable personal info, a clear preview. Within that, simulating a PDF right on the page was a new experience, the first time I'd built something like that. I ended up sending two real quotes with it; the client hasn't responded yet, so in practice it turned out more like a finished exercise than I expected — but it's ready for the next time I need it.",
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
			"This was the final integrative project for User Interface Construction, with a specific requirement: unlike the rest of the course's incremental assignments, which were group work, this one had to be done individually — that way the professor made sure everyone could show what they'd learned on their own. Technically it wasn't too complicated; the API the professor gave us was well designed and reliably hosted. What did require care was not burning through the monthly usage quota of the free plan behind it — the game needed real testing before submission, but without overdoing it, both for my own sake and for classmates also relying on it. The result is something of a parody of Preguntados (the Argentine trivia game), with four difficulty levels and scores saved in the browser.",
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
			"The parking-assistant idea itself isn't mine — I found it already put together somewhere, using a single sensor, an Arduino board, and an LED display simulating a parking spot. I used that as a starting point for the course's final project and took it much further: three sensors, an ESP32-CAM instead of an Arduino Uno, live video, and my own React dashboard consuming the API the board itself exposes. The hardest part was the wiring — the ESP32-CAM has fewer pins than an Arduino Uno, so I had to bridge the TRIG pins of the three sensors together, then solder and heat-shrink each joint so vibration wouldn't work them loose. I hit one real blocker: I couldn't get the camera's video server to start while also using pin 16 for one of the sensors. After digging into it, I found that the manufacturer's datasheet mentions, almost in passing, that the board's internal wiring shares a connection between the camera server and that specific pin — using it for anything else caused an overload and the server would fail. The fix was moving that wire to pin 12. I built it solo, over a full weekend of work.",
		features: [
			"Array of 3 ultrasonic sensors with sequential reading, no cross-interference",
			"Live MJPEG video streaming straight from the microcontroller",
			"Custom REST API exposed by the ESP32-CAM over its own WiFi network",
			"Real-time disconnection detection via AbortController",
			"Responsive dark-mode dashboard, for desktop and mobile",
		],
		image: "/screenshots/radar/image.png",
		gallery: [
			"/screenshots/radar/image1.png",
			"/screenshots/radar/image2.png",
			"/screenshots/radar/radar2.jpeg",
			"/screenshots/radar/radar3.jpeg",
			"/screenshots/radar/radar1.jpeg",
		],
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
			"I built it so I wouldn't have to pull paper information by hand, one by one. I'd rather spend time filtering results than building the publications JSON myself from scratch. The scraping part itself wasn't too hard — I'd never even considered the idea of scraping sites before, or the things to watch out for, like not hammering a server with requests — but filtering duplicates and filling in missing data across ORCID profiles took real time, without ever being a blocker. Today it's just sitting there: it served its purpose for getting the lab's site off the ground, and I left it public on GitHub in case it's useful to someone else for the same thing, though I don't use it anymore.",
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
