export type Language = "es" | "en";

export interface ProjectItem {
	id: string;
	title: string;
	description: string;
	fullStory?: string;
	features?: string[];
	gallery?: string[];
	image: string;
	tags: (string | { name: string; slug?: string })[];
	featured: boolean;
	githubUrl?: string;
	demoUrl?: string;
}

export const translations = {
	es: {
		nav: {
			about: "Sobre mí",
			projects: "Proyectos",
			contact: "Contacto",
			cv: "Ver CV",
		},
		about: {
			title: "Sobre mí",
			subtitle:
				"Apasionado por el desarrollo de software y la creación de soluciones digitales eficientes.",
			bio1: "Hola, soy desarrollador de software con experiencia enfocada en la creación de aplicaciones web modernas y escalables. Me especializo en construir interfaces dinámicas en el frontend y estructurar servicios robustos en el backend.",
			bio2: "Mi objetivo constante es transformar requerimientos complejos en aplicaciones intuitivas, cuidando tanto la experiencia de usuario como el rendimiento técnico y la mantenibilidad del código.",
			viewCv: "Ver CV",
			highlights: [
				{
					title: "Desarrollo Web",
					description:
						"Enfoque en código limpio, componentes reutilizables y arquitectura modular.",
				},
				{
					title: "UI / UX",
					description:
						"Interfaces intuitivas, accesibles y adaptables a cualquier dispositivo.",
				},
			],
			categories: {
				frontend: "Frontend",
				backend: "Backend & APIs",
				tools: "Herramientas & Flujo de trabajo",
			},
		},
		projects: {
			title: "Proyectos Destacados",
			subtitle:
				"Una selección de trabajos e iniciativas en los que he trabajado recientemente.",
			viewCode: "Código",
			liveDemo: "Demo",
			viewAll: "Ver todos los proyectos",
			items: [
				{
					id: "1",
					title: "Sistema de Gestión y Facturación",
					description:
						"Aplicación web para administración de estados de pedidos e integración con servicios web para generación de facturas electrónicas.",
					fullStory:
						"Este proyecto nació de la necesidad de automatizar la gestión de pedidos e integración directa con servicios web de facturación electrónica. Desarrollé una interfaz dinámica en React que permite gestionar los estados de cada orden en tiempo real, generar comprobantes virtuales y descargar reportes estructurados.",
					features: [
						"Integración con Web Services de facturación legal (ARCA/AFIP).",
						"Gestión dinámica de estados de pedido con actualización instantánea.",
						"Exportación de facturas y reportes en formato JSON y PDF.",
						"Diseño responsivo optimizado para uso en escritorio y tabletas.",
					],
					gallery: [
						"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
						"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
					],
					image:
						"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
					tags: ["React", "TypeScript", "Bootstrap", "Node.js", "JSON"],
					featured: true,
					githubUrl: "https://github.com",
					demoUrl: "https://demo.com",
				},
				{
					id: "2",
					title: "Feed Personalizado & Integración API",
					description:
						"Módulo web dinámico consumiendo API REST para renderizado de publicaciones y optimización de componentes visuales.",
					fullStory:
						"Diseño e implementación de un feed interactivo integrado mediante API REST directa para consumir y formatear publicaciones de redes sociales en tiempo real. Se optimizó el ciclo de vida de los componentes para lograr tiempos de carga imperceptibles y un renderizado impecable.",
					features: [
						"Consumo de API REST con manejo de errores y estados de carga.",
						"Carga diferida (lazy loading) para imágenes y assets visuales.",
						"Soporte completo para temas claro y oscuro.",
					],
					gallery: [
						"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
					],
					image:
						"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
					tags: ["React", "JavaScript", "CSS3", "RESTful APIs"],
					featured: true,
					githubUrl: "https://github.com",
				},
				{
					id: "3",
					title: "Sitio Web Multilingüe & Analytics",
					description:
						"Plataforma web con internacionalización, optimización SEO mediante sitemap/robots.txt e integración con Google Analytics.",
					fullStory:
						"Desarrollo integral de un sitio web corporativo con soporte multilenguaje (ES/EN) dinámico, preparado para SEO de alto rendimiento con mapa de sitio (sitemap.xml), directivas robots.txt y telemetría avanzada vía Google Analytics.",
					features: [
						"Internacionalización (i18n) sin parpadeo de interfaz.",
						"Configuración SEO avanzada y métricas integradas con Google Analytics.",
						"Despliegue automatizado mediante GitHub Pages.",
					],
					gallery: [
						"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
					],
					image:
						"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
					tags: ["React", "Vite", "Git", "GitHub"],
					featured: true,
					githubUrl: "https://github.com",
					demoUrl: "https://demo.com",
				},
				{
					id: "4",
					title: "Panel de Control de Métricas",
					description:
						"Dashboard interactivo para monitoreo en tiempo real de tráfico, ventas y métricas clave de rendimiento.",
					fullStory:
						"Panel de control analítico construido para procesar grandes volúmenes de métricas operativas. Permite filtrar datos por rangos de tiempo y visualizar resúmenes ejecutivos.",
					features: [
						"Visualizaciones dinámicas y gráficos interactivos.",
						"Filtros por fecha y exportación de datos.",
					],
					image:
						"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
					tags: ["React", "TypeScript", "CSS3", "JSON"],
					featured: false,
					githubUrl: "https://github.com",
				},
				{
					id: "5",
					title: "Herramienta de Automatización CLI",
					description:
						"Módulo en Node.js para procesamiento de archivos de datos y conversión estructurada rápida.",
					fullStory:
						"Herramienta en línea de comandos para automatizar la transformación de archivos JSON y CSV a formatos estructurados listos para ser consumidos por APIs backend.",
					features: [
						"Ejecución ultra rápida en entorno Node.js.",
						"Validación automática de esquemas de datos.",
					],
					image:
						"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
					tags: ["Node.js", "JavaScript", "Git"],
					featured: false,
					githubUrl: "https://github.com",
				},
			] as ProjectItem[],
		},
		allProjectsPage: {
			title: "Todos los Proyectos",
			subtitle:
				"Explora el catálogo completo de aplicaciones, herramientas y proyectos construidos.",
			backHome: "Volver al inicio",
			searchPlaceholder: "Buscar por tecnología o título...",
			filterAll: "Todos",
			noResults: "No se encontraron proyectos que coincidan con la búsqueda.",
		},
		projectDetail: {
			back: "Volver",
			storyTitle: "La Historia & El Desafío",
			featuresTitle: "Características Principales",
			galleryTitle: "Galería de Capturas",
			technologiesTitle: "Tecnologías Utilizadas",
			notFound: "Proyecto no encontrado.",
		},
		contact: {
			title: "Contacto",
			subtitle:
				"¿Tenés algún proyecto en mente o querés charlar? No dudes en escribirme.",
			infoTitle: "Hablemos",
			infoDesc:
				"Estoy disponible para nuevas oportunidades laborales, proyectos freelance o consultas técnicas.",
			socialsTitle: "Redes Profesionales",
			form: {
				name: "Nombre completo",
				namePlaceholder: "Ej: Juan Pérez",
				email: "Correo electrónico",
				emailPlaceholder: "ejemplo@correo.com",
				subject: "Asunto",
				subjectPlaceholder: "Motivo de tu contacto...",
				message: "Mensaje",
				messagePlaceholder: "Escribí tu mensaje acá...",
				send: "Enviar mensaje",
				sending: "Enviando...",
				success: "¡Mensaje enviado con éxito! Me pondré en contacto pronto.",
			},
		},
	},
	en: {
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
			subtitle:
				"A selection of work and initiatives I have recently developed.",
			viewCode: "Code",
			liveDemo: "Demo",
			viewAll: "View all projects",
			items: [
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
					githubUrl: "https://github.com",
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
					githubUrl: "https://github.com",
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
					githubUrl: "https://github.com",
					demoUrl: "https://demo.com",
				},
				{
					id: "4",
					title: "Metrics Control Dashboard",
					description:
						"Interactive dashboard for real-time monitoring of traffic, sales, and key performance metrics.",
					fullStory:
						"Analytical dashboard built to process large volumes of operational metrics. Allows filtering by time ranges and viewing executive summaries.",
					features: [
						"Dynamic visualizations and interactive charts.",
						"Date filters and data export.",
					],
					image:
						"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
					tags: ["React", "TypeScript", "CSS3", "JSON"],
					featured: false,
					githubUrl: "https://github.com",
				},
				{
					id: "5",
					title: "CLI Automation Tool",
					description:
						"Node.js module for processing data files and performing fast structured conversions.",
					fullStory:
						"Command line tool to automate the transformation of JSON and CSV files into structured formats ready for backend API consumption.",
					features: [
						"Ultra-fast execution in Node.js environment.",
						"Automatic data schema validation.",
					],
					image:
						"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
					tags: ["Node.js", "JavaScript", "Git"],
					featured: false,
					githubUrl: "https://github.com",
				},
			] as ProjectItem[],
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
			subtitle:
				"Have a project in mind or want to chat? Feel free to reach out.",
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
				success: "Message sent successfully! I will get back to you soon.",
			},
		},
	},
};
