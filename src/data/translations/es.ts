import { projectsEs } from "../projects/es";

export const es = {
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
		items: projectsEs,
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
};
