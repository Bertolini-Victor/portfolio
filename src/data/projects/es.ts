import type { ProjectItem } from "../types";

export const projectsEs: ProjectItem[] = [
	{
		id: "1",
		title: "Sitio Web — Laboratorio LFGBBP (UNQ)",
		description:
			"Sitio institucional para un laboratorio de investigación de la UNQ, con contenido dinámico cargado desde JSON — mi primer trabajo para un cliente real.",
		fullStory:
			"El laboratorio de mi mamá necesitaba una forma de publicitar su trabajo — líneas de investigación, papers, integrantes — pero entre la situación económica de la ciencia y las universidades públicas, no había presupuesto para un desarrollo pago con dominio y hosting. Me pidieron el favor, y lo armé simple pero profesional, para que viviera gratis en GitHub Pages. Antes de tocar código les mostré un diseño de UI hecho con ayuda de IA para que dieran el visto bueno, y ya con eso definido, lo más difícil fue recuperar y depurar los papers — construí un scraper aparte para sacarlos de ORCID y filtrar duplicados, y después ellos revisaron que no faltara ninguno. Hoy lo siguen usando y lo comparten en sus mails oficiales; de tanto en tanto me piden algún cambio chico, sacar a alguien que ya no está o sumar un colaborador nuevo. Si lo rehiciera hoy probablemente usaría React, ahora que sé que se puede hostear igual en GitHub Pages — aunque eso les sumaría fricción para pedir cambios menores, que con HTML y JSON puro es más simple de tocar.",
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
			"Proyecto final del curso de React de TalentoTech — el dominio de e-commerce venía dado por la consigna, no lo elegí yo, y 'Talento Lab' es apenas el nombre de fantasía que usé para la tienda. Lo más laborioso fue migrar el catálogo desde un carrito en JS puro, con un JSON enorme de productos, hacia Firebase — hubo que adaptar toda esa data a la nueva estructura. Firebase Auth también me llevó su tiempo, más por ser la primera vez que lo usaba que por dificultad real del tema. Hoy lo estoy reconstruyendo con un backend propio en Java y Spring Boot, para entender de verdad qué hacía Firebase por debajo en vez de dejarlo resuelto por una herramienta automática.",
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
			"Nació de una necesidad real: un cliente necesitaba presupuestos para dos páginas web distintas, y como nunca había armado uno de forma prolija ni fácil de repetir, preferí construir una herramienta que simplificara la tarea antes que armar un documento suelto a mano. Lo más difícil no fue programarlo — fue decidir qué tenía que tener: catálogo editable, datos personales configurables, una vista previa clara. Y dentro de eso, simular un PDF en la propia página fue una experiencia nueva, la primera vez que hice algo así. Llegué a mandar dos presupuestos reales con la herramienta; el cliente todavía no respondió, así que en la práctica quedó más como ejercicio de lo que esperaba — pero está lista para la próxima vez que la necesite.",
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
			"Fue el trabajo final integrador de Construcción de Interfaces de Usuario, con un requisito particular: a diferencia del resto de los TP incrementales de la materia, que eran grupales, este tenía que ser individual — así el profesor se aseguraba de que cada uno demostrara lo aprendido por su cuenta. Técnicamente no fue muy complicado; la API que nos dio el profesor estaba bien diseñada y hosteada de forma confiable. Lo que sí requirió cuidado fue no gastar de más la cuota de usos mensuales del plan gratuito que la sostenía — había que probar el juego a fondo antes de entregarlo, pero sin excederse, tanto por mí como por mis compañeros que también la usaban. El resultado es una especie de parodia de Preguntados, con cuatro niveles de dificultad y puntajes guardados en el navegador.",
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
			"La idea de un asistente de estacionamiento no es mía — la encontré ya armada, con un solo sensor, una placa Arduino y un display de LEDs simulando el estacionamiento. La tomé como base para el trabajo final de la materia y la llevé bastante más lejos: tres sensores, una ESP32-CAM en vez de un Arduino Uno, video en vivo, y un dashboard propio en React consumiendo la API que expone la misma placa. Lo más difícil fue el cableado — la ESP32-CAM tiene menos pines que un Arduino Uno, así que tuve que puentear los pines TRIG de los tres sensores entre sí, y después soldar y termocontraer cada unión para que no se soltara con la vibración. Tuve un problema puntual bloqueante: no lograba levantar el servidor de video de la cámara mientras usaba el pin 16 para uno de los sensores. Después de investigar, encontré que la hoja de datos del fabricante menciona, casi al pasar, que el cableado interno de la placa comparte conexión entre el servidor de la cámara y ese pin específico — al usarlo para otra cosa, se sobrecargaba y el servidor fallaba. La solución fue mover ese cable al pin 12. Lo hice solo, en un fin de semana entero de trabajo.",
		features: [
			"Arreglo de 3 sensores ultrasónicos con lectura secuencial, sin interferencia cruzada",
			"Video en vivo por streaming MJPEG desde el microcontrolador",
			"API REST propia expuesta por el ESP32-CAM sobre su propia red WiFi",
			"Detección de desconexión en tiempo real vía AbortController",
			"Dashboard responsive en modo oscuro, para PC y mobile",
		],
		image: "/screenshots/radar/image.png",
		gallery: [
			"/screenshots/radar/image1.png",
			"/screenshots/radar/image2.png",
			"/screenshots/radar/radar1.jpeg",
			"/screenshots/radar/radar3.jpeg",
			"/screenshots/radar/radar2.jpeg",
		],
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
			"Lo armé para no tener que sacar la información de los papers a mano, uno por uno. Preferí invertir tiempo filtrando resultados antes que construir el JSON de publicaciones yo mismo desde cero. La parte de scrapear en sí no me costó mucho — nunca había pensado siquiera en la idea de scrapear sitios, ni en los cuidados que hay que tener, como no saturar un servidor a pedidos — pero filtrar duplicados y completar datos faltantes entre perfiles de ORCID sí me llevó tiempo real, sin ser nunca algo bloqueante. Hoy quedó ahí: cumplió su propósito para levantar el sitio del laboratorio, y lo dejé público en GitHub por si a alguien más le sirve para lo mismo, aunque no lo uso más.",
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
