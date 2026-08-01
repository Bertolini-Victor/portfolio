import { projectsEn } from "../projects/en";

export const en = {
	nav: {
		about: "About me",
		projects: "Projects",
		contact: "Contact",
		cv: "View CV",
	},
	about: {
		title: "About me",
		subtitle:
			"Passionate about software development and building efficient digital solutions.",
		bio1: "Hi, I'm a software developer with experience building applications across different formats — web, mobile, and desktop — plus embedded systems. I like understanding a problem end to end, from the interface a user sees to the logic holding it up on the other side.",
		bio2: "Most of my experience today is in web development, but it's not where I want to stay boxed in — I enjoy putting together a clean interface just as much as solving a backend problem or getting a microcontroller to talk properly to an app. I'd rather stay open and pick the right tool for the problem, not the other way around.",
		highlights: [
			{
				title: "Multiple platforms",
				description:
					"From web apps to mobile, desktop tools, and embedded systems.",
			},
			{
				title: "UI / UX",
				description:
					"Intuitive, accessible interfaces that adapt to any device.",
			},
		],
		viewCv: "View CV",
		categories: {
			frontend: "Frontend",
			backend: "Backend & APIs",
			databases: "Databases",
			tools: "Tools & Workflow",
			other: "Other Skills",
		},
	},
	projects: {
		title: "Featured Projects",
		subtitle: "A selection of work and initiatives I have recently developed.",
		viewCode: "Code",
		liveDemo: "Demo",
		viewAll: "View all projects",
		items: projectsEn,
	},
	allProjectsPage: {
		title: "All Projects",
		subtitle:
			"Explore the complete showcase of built applications, tools, and projects.",
		backHome: "Back to home",
		searchPlaceholder: "Search by technology or title...",
		filterAll: "All",
		noResults: "No projects found matching your search.",
	},
	projectDetail: {
		back: "Back",
		storyTitle: "The Story & Challenge",
		featuresTitle: "Key Features",
		galleryTitle: "Screenshots Gallery",
		technologiesTitle: "Technologies Used",
		notFound: "Project not found.",
		closeLightbox: "Close image",
	},
	contact: {
		title: "Contact",
		subtitle: "Have a project in mind or want to chat? Feel free to reach out.",
		infoTitle: "Let's talk",
		infoDesc:
			"I am available for new job opportunities, freelance work, or technical inquiries.",
		socialsTitle: "Professional Networks",
		form: {
			name: "Full name",
			namePlaceholder: "E.g., John Doe",
			email: "Email address",
			emailPlaceholder: "example@email.com",
			subject: "Subject",
			subjectPlaceholder: "Reason for contacting...",
			message: "Message",
			messagePlaceholder: "Write your message here...",
			send: "Send message",
			sending: "Sending...",
			success: "Message sent successfully! I'll get back to you soon.",
			error: "Something went wrong sending the message. Please try again.",
		},
	},
};
