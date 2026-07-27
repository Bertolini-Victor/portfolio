import type { ProjectItem } from "../types";

export const projectsEs: ProjectItem[] = [
	{
		id: "1",
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
		gallery: [
			"public/screenshots/techstore/techstore-1.png",
			"public/screenshots/techstore/techstore-2.png",
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
			"https://github.com/Bertolini-Victor/ProyectoFinal-Curso-ReactJs-TalentoTechr",
		demoUrl: "https://demo.com",
	},
	{
		id: "2",
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
			"public/screenshots/generador_presupuestos/image2.png",
			"public/screenshots/generador_presupuestos/image3.png",
			"public/screenshots/generador_presupuestos/image4.png",
		],
		image: "public/screenshots/generador_presupuestos/image.png",
		tags: ["React", "Vite", "CSS3"],
		featured: true,
		githubUrl: "https://github.com/Bertolini-Victor/generador-presupuestos",
	},
	{
		id: "3",
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
		image: "/public/screenshots/trivia_game/home_desktop.png",
		tags: ["React", "Vite", "React Router", "Axios"],
		featured: true,
		githubUrl:
			"https://github.com/Bertolini-Victor/unq-ui-victor-hugo-bertolini-agaras-trabajo-final",
		demoUrl: "https://unq-ui-victor-hugo-bertolini-agaras.vercel.app/",
	},
];
