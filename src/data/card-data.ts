import type { CardData } from "./card-data.interface";


import imagen01 from '@assets/card-image01.svg'
import imagen02 from '@assets/card-image02.svg'
import imagen03 from '@assets/card-image03.svg'
import imagen04 from '@assets/card-image04.svg'
import imagen05 from '@assets/card-image05.svg'
import imagen06 from '@assets/card-image06.svg'


export const cardData:CardData[] = [
	{
	  id: 1,
	  title: "Tecnología para Contact Center",	  
	  img:{
		  src: imagen01.src,
		  alt:"Tecnología para Contact Center",
		},
		description: "Brindamos herramientas que permiten a las empresas gestionar de formaeficiente las interacciones con sus clientes a través de diversos canales de comunicación.",
	},
	
	{
	  id: 2,
	  title: "Servicio de Contact Center (Posiciones)",	  
	  img:{
		src: imagen02.src,
		alt:"Servicio para Contact Center",
		},
	description: "Nuestro servicio de contact center es la clave para una atención al cliente excepcional. Mejora la satisfacción de tus clientes, fideliza tu base y potencia tu marca.",
	},
	{
	  id: 3,
	  title: "Mensajería instantánea y redes sociales (Humano/ChatBots)",	  
	  img:{
		src: imagen03.src,
		alt:"Imagen Mensajeria"
	  },
		  description: "Mejora la experiencia de tus clientes con atención personalizada en tiempo real. Chatbots y agentes humanos trabajan juntos para brindar respuestas rápidas y eficientes.",
	},
	{
		id: 4,
		title: "IVR + IA",	  
		img:{
			src: imagen04.src,
			alt:"Tecnología para Contact Center",
		  },
		  description: "Reduce costos y mejora la experiencia del cliente con un sistema IVR potenciado por IA. Respuestas rápidas y precisas a las consultas frecuentes, 24/7.",
		},
	  {
		id: 5,
		title: "Proyectos de Cableado y fibra",	  
		img:{
			src: imagen05.src,
			alt:"Proyecto Cableado",
		  },
			description: "Garantiza una conexión rápida, segura y confiable con soluciones personalizadas. Desde cableado estructurado hasta redes de fibra óptica, cubrimos todas tus necesidades.",
	  },
	  {
		id: 6,
		title: "Desarrollo de Software",	  
		img:{
			src: imagen06.src,
			alt:"Desarrollo de Software",
		},
		description: "¿Necesitas un software que impulse tu productividad y te ayude a alcanzar tus objetivos? Creamos soluciones personalizadas que se ajustan a tus necesidades específicas.",
	  },
  ]