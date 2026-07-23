import type { ProjectItem } from "../types";

export const projectsEs: ProjectItem[] = [
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
		githubUrl: "https://github.com/Bertolini-Victor",
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
		githubUrl: "https://github.com/Bertolini-Victor",
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
		githubUrl: "https://github.com/Bertolini-Victor",
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
		githubUrl: "https://github.com/Bertolini-Victor",
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
		githubUrl: "https://github.com/Bertolini-Victor",
	},
];
