import type { ProjectItem } from "../types";

export const projectsEn: ProjectItem[] = [
	{
		id: "1",
		title: "Order & Invoicing Management System",
		description:
			"Web application for order state management and integration with web services for electronic invoicing generation.",
		fullStory:
			"This project arose from the need to automate order management and direct integration with electronic invoicing web services. I developed a dynamic React interface that manages order statuses in real time, generates virtual receipts, and exports structured reports.",
		features: [
			"Integration with legal invoicing Web Services (ARCA/AFIP).",
			"Dynamic order status management with instant updates.",
			"Invoice and report export in JSON and PDF formats.",
			"Responsive design optimized for desktop and tablet usage.",
		],
		gallery: [
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
		],
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
		tags: ["React", "TypeScript", "Bootstrap", "Node.js", "JSON"],
		featured: true,
		githubUrl: "https://github.com/Bertolini-Victor",
		demoUrl: "https://demo.com",
	},
	{
		id: "2",
		title: "Custom Feed & API Integration",
		description:
			"Dynamic web module consuming REST API for post rendering and visual component optimization.",
		fullStory:
			"Design and implementation of an interactive feed integrated via direct REST API to consume and format social media posts in real time. Component lifecycle was optimized for imperceptible load times and flawless rendering.",
		features: [
			"REST API integration with error handling and loading states.",
			"Lazy loading for images and visual assets.",
			"Full support for light and dark themes.",
		],
		gallery: [
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
		],
		image:
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
		tags: ["React", "JavaScript", "CSS3", "RESTful APIs"],
		featured: true,
		githubUrl: "https://github.com/Bertolini-Victor",
	},
	{
		id: "3",
		title: "Multilingual Website & Analytics",
		description:
			"Web platform with internationalization, SEO optimization via sitemap/robots.txt, and Google Analytics integration.",
		fullStory:
			"Full development of a corporate website with dynamic multi-language support (ES/EN), prepared for high-performance SEO with sitemap.xml, robots.txt directives, and advanced telemetry via Google Analytics.",
		features: [
			"Flicker-free UI internationalization (i18n).",
			"Advanced SEO setup and Google Analytics tracking.",
			"Automated deployment via GitHub Pages.",
		],
		gallery: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
		],
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
		tags: ["React", "Vite", "Git", "GitHub"],
		featured: true,
		githubUrl: "https://github.com/Bertolini-Victor",
		demoUrl: "https://demo.com",
	},
];
