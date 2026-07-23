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
		bio1: "Hello, I am a software developer focused on creating modern and scalable web applications. I specialize in building dynamic frontend interfaces and structuring robust backend services.",
		bio2: "My constant goal is to transform complex requirements into intuitive applications, prioritizing user experience, technical performance, and code maintainability.",
		viewCv: "View CV",
		highlights: [
			{
				title: "Web Development",
				description:
					"Focused on clean code, reusable components, and modular architecture.",
			},
			{
				title: "UI / UX",
				description:
					"Intuitive, accessible, and responsive interfaces across all devices.",
			},
		],
		categories: {
			frontend: "Frontend",
			backend: "Backend & APIs",
			tools: "Tools & Workflow",
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
