import type { ProjectItem } from "../types";

export const projectsEs: ProjectItem[] = [
	{
		id: "1",
		title: "Sitio Web — Laboratorio LFGBBP (UNQ)",
		description:
			"Sitio institucional para un laboratorio de investigación de la UNQ, con contenido dinámico cargado desde JSON — mi primer trabajo para un cliente real.",
		fullStory:
			"Desarrollo del sitio web oficial del Laboratorio de Fisiología y Genética de Bacterias Beneficiosas para Plantas de la UNQ, un proyecto que hice como favor pero con el mismo nivel de compromiso que un trabajo freelance. El contenido — investigadores, publicaciones y servicios — se carga dinámicamente desde archivos JSON en vez de estar hardcodeado en el HTML, para que el laboratorio pueda actualizar la información sin tocar código. Construido con HTML, CSS y JavaScript puro, sin frameworks, para mantenerlo liviano y rápido.",
		features: [
			"Contenido dinámico cargado desde JSON (investigadores, publicaciones, servicios)",
			"Sección de publicaciones que se actualiza automáticamente y enlaza a cada investigador",
			"Acordeón de servicios interactivo, construido en JavaScript puro sin librerías",
			"Totalmente responsive con Media Queries",
			"Sin frameworks — HTML, CSS y JS puro",
		],
		image: "/screenshots/lfgbbp/image1.png",
		tags: ["HTML5", "CSS3", "JavaScript"],
		featured: true,
		githubUrl: "https://github.com/lfgbbp/lfgbbp.github.io",
		demoUrl: "https://lfgbbp.github.io/",
	},
	{
		id: "2",
		title: "TechStore — E-commerce con panel de administración",
		description:
			"E-commerce de hardware premium con autenticación, CRUD de productos en tiempo real contra Firestore y panel de administración protegido.",
		fullStory:
			"Proyecto final del curso de React de TalentoTech. Arrancó como un catálogo estático en JSON y escaló a una arquitectura 100% cloud: el catálogo migró a Firestore, se sumó autenticación con Firebase Auth, y las rutas de administración quedaron protegidas por un componente guardián que expulsa a cualquiera que no esté logueado. El panel de admin permite crear, editar y eliminar productos en tiempo real, con carga de imágenes vía la API de Imgbb.",
		features: [
			"Carrito con contexto global (Context API) y cálculo de totales en tiempo real",
			"Autenticación con Firebase Auth y rutas protegidas para el panel de administración",
			"CRUD completo de productos contra Firestore, con carga de imágenes vía Imgbb",
			"Búsqueda en tiempo real y paginación matemática del catálogo",
			"Sistema de cupones de descuento en el checkout",
			"SEO dinámico por página con React Helmet",
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
		title: "Generador de Presupuestos",
		description:
			"Cotizador de servicios web bilingüe y multi-moneda, con catálogo editable y exportación a PDF sin depender de ningún backend.",
		fullStory:
			"Una SPA pensada para armar presupuestos de servicios web rápido: catálogo de 55 servicios organizados en 11 categorías, completamente editable desde la interfaz. Cada servicio tiene su propia descripción y precio en español e inglés, y en pesos y dólares — el cambio de idioma o moneda es instantáneo. El presupuesto final se exporta a PDF usando la función nativa de impresión del navegador, evitando sumar una librería pesada solo para eso.",
		features: [
			"Catálogo de 55 servicios en 11 categorías, editable en vivo desde un modal de gestión",
			"Persistencia automática en localStorage — nada se pierde al recargar",
			"Bilingüe (ES/EN) y multi-moneda (ARS/USD) por cada servicio individual",
			"Exportación a PDF nativa vía window.print(), sin librerías externas",
			"Modo claro/oscuro según la preferencia del sistema operativo",
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
		title: "Trivia — Trabajo final de UI (UNQ)",
		description:
			"Juego de trivia con 4 niveles de dificultad, preguntas en tiempo real vía API y diseño mobile-first.",
		fullStory:
			"Trabajo final integrador para Construcción de Interfaces de Usuario en la UNQ. El objetivo era una experiencia fluida y responsive consumiendo una API externa en tiempo real, con estados de juego relativamente complejos: 4 niveles de dificultad, un desafío contra el tiempo con barra de progreso visual, y guardado de mejores puntajes en el navegador.",
		features: [
			"4 niveles de dificultad (Easy, Normal, Hard, Extreme)",
			"Desafío contra el tiempo, 10 segundos por pregunta con barra de progreso",
			"Consumo de preguntas en tiempo real vía Axios",
			"High scores persistidos en localStorage",
			"Diseño mobile-first con menú hamburguesa",
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
		title: "Radar IoT — Asistente de estacionamiento (ESP32-CAM)",
		description:
			"Sistema de asistencia de estacionamiento con sensores ultrasónicos y video en vivo por WiFi, con un dashboard en React consumiendo la API del propio microcontrolador.",
		fullStory:
			"Trabajo final de Introducción a la Programación de Microcontroladores con Arduino (UNQ). Combina un ESP32-CAM que lee tres sensores ultrasónicos de forma no bloqueante (evitando interferencia entre ellos), transmite video en vivo por MJPEG, y expone todo vía una API REST propia sobre una red WiFi que el mismo módulo levanta. Del otro lado, un dashboard en React consume esa API en tiempo real, con manejo de reconexión — si la placa se desconecta o pierde paquetes, la interfaz lo detecta al instante en vez de quedarse mostrando datos viejos.",
		features: [
			"Arreglo de 3 sensores ultrasónicos con lectura secuencial, sin interferencia cruzada",
			"Video en vivo por streaming MJPEG desde el microcontrolador",
			"API REST propia expuesta por el ESP32-CAM sobre su propia red WiFi",
			"Detección de desconexión en tiempo real vía AbortController",
			"Dashboard responsive en modo oscuro, para PC y mobile",
		],
		image: "/screenshots/radar/image.png",
		gallery: ["/screenshots/radar/image1.png", "/screenshots/radar/image2.png"],
		tags: ["React", "Vite", "Arduino", "C++"],
		featured: true,
		githubUrl:
			"https://github.com/Bertolini-Victor/TrabajoFinal_IntroduccionALosMicrocontroladoresConArduino_UNQ",
	},
	{
		id: "6",
		title: "Scraper de Publicaciones ORCID",
		description:
			"Script de Node.js con Puppeteer que extrae publicaciones científicas desde perfiles de ORCID — la herramienta que alimenta de datos al sitio del laboratorio LFGBBP.",
		fullStory:
			"Un scraper hecho con Puppeteer para automatizar algo que se estaba haciendo a mano: mantener actualizada la lista de publicaciones del sitio del laboratorio LFGBBP. Controla un Chromium headless para navegar los perfiles públicos de ORCID, esperar el contenido dinámico, pasar de página en página, y extraer título, año, revista, DOI y autores de cada paper. Incluye un segundo script para filtrar duplicados por DOI cuando el formato varía entre perfiles.",
		features: [
			"Extrae datos de múltiples perfiles de ORCID de forma automática",
			"Maneja contenido dinámico y paginación con Puppeteer",
			"Filtra publicaciones duplicadas por título y DOI",
			"Guarda los resultados en JSON con marca de tiempo",
			"Alimenta directamente el sitio del laboratorio LFGBBP",
		],
		image: "/screenshots/webscrapper/script.png",
		tags: ["Node.js", "Puppeteer", "JavaScript"],
		featured: false,
		githubUrl: "https://github.com/Bertolini-Victor/webScrapper",
	},
];
