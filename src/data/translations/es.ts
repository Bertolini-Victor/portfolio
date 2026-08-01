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
		bio1: "Hola, soy desarrollador de software con experiencia construyendo aplicaciones en distintos formatos — web, mobile y de escritorio — además de sistemas embebidos. Me gusta entender el problema de punta a punta, desde la interfaz que ve el usuario hasta la lógica que la sostiene del otro lado.",
		bio2: "La mayor parte de mi experiencia hoy está en desarrollo web, pero no es donde quiero quedarme encasillado — disfruto tanto armar una interfaz prolija como resolver un problema de backend o hacer que un microcontrolador se comunique bien con una app. Prefiero mantenerme abierto y elegir la herramienta según el problema, no al revés.",
		highlights: [
			{
				title: "Múltiples plataformas",
				description:
					"De aplicaciones web a apps mobile, herramientas de escritorio y sistemas embebidos.",
			},
			{
				title: "UI / UX",
				description:
					"Interfaces intuitivas, accesibles y adaptables a cualquier dispositivo.",
			},
		],
		viewCv: "Ver CV",
		categories: {
			frontend: "Frontend",
			backend: "Backend & APIs",
			databases: "Bases de Datos",
			tools: "Herramientas & Flujo de trabajo",
			other: "Otras Habilidades",
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
		closeLightbox: "Cerrar imagen",
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
			error: "Hubo un error al enviar el mensaje. Inténtalo nuevamente.",
		},
	},
};
