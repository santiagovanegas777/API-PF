
mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const Activity = require("../api/models/activity.model.js");



const arrayActivities = [
  {
    "activityName": "Crucero turístico con paradas libres por el río Sena de París",
    "activityPlace": "París, Francia",
    "activityDate": " 9 de Octubre 2023",
    "activityTime": "10:00",
    "activityPrice": 30,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F4%2F8326%2F1127781%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Surque las aguas del río Sena en un crucero turístico con paradas libres. Utilice un billete de 1 día (24 h) para desplazarse hasta las principales atracciones de París, como la Torre Eiffel y el Museo del Louvre, o puede optar por un billete de 2 días (48 h) para disfrutar de otra jornada consecutiva de visitas. No tiene más que subir y bajar todas las veces que quiera en cualquiera de las ocho paradas a lo largo del río Sena, cuyas riberas son patrimonio de la UNESCO."
  },
  {
    "activityName": "10 degustaciones diseñadas por los amantes de la comida",
    "activityPlace": "París, Francia",
    "activityDate": "10 de Octubre 2023",
    "activityTime": "14:00",
    "activityPrice": 80,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F4%2F9982%2F1141181%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "¿Quieres saber dónde vivían Picasso, Renoir y otros grandes artistas? ¿Y qué tal algo de comida en la mezcla? ¡Entonces Montmartre es el activityPlace para estar! Pasee por este barrio bohemio y disfrute de 10 degustaciones de golosinas dulces y saladas que Francia tiene para ofrecer."
  },
  {
    "activityName": "Acceso sin colas y visita guiada al Louvre",
    "activityPlace": "París, Francia",
    "activityDate": "13 de Octubre 2023",
    "activityTime": "10:00",
    "activityPrice": 70,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F5%2F0115%2F1142407%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Entendemos lo intimidante que puede ser planear un viaje a París, y mucho menos una visita al Louvre, por eso ofrecemos uno de los mejores recorridos por el Louvre en París. Con entradas exclusivas sin colas y una guía apasionada por el arte para guiar a su pequeño grupo a través de uno de los museos más impresionantes de París, seguramente aprovechará al máximo su visita al Louvre. Nuestros guías profesionales son verdaderos expertos que darán vida al museo con historias detalladas sobre la obra de arte en su interior.El Louvre es conocido como el museo de arte más grande de la tierra y un hito histórico muy importante de París. Las obras de arte más notables, por supuesto, son la icónica Mona Lisa de Leonardo da Vinci y esculturas increíbles como la Venus de Milo y la Nike."
  },
  {
    "activityName": "Excursión a Washington",
    "activityPlace": "Nueva York, Estados Unidos",
    "activityDate": "15 de Agosto 2023",
    "activityTime": "05:55",
    "activityPrice": 90,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F3%2F0%2F1%2F924%2F997474%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Dedica un día de tu viaje a Nueva York para visitar Washington. Escápate a descubrir la ciudad más importante del país, seguro que te sorprenderá. Todo ello con un guía para que no te pierdas ningún imprescindible y viajando en autobús para que, además, disfrutes de la belleza y el carácter de los paisajes que separan ambas ciudades.Tu aventura empieza cruzando el río Hudson para salir de Nueva York y recorrer 350 kilómetros al sur, cruzando el estado de New Jersey y parando a mitad del camino en el estado de Delaware para desayunar. Por el camino pasaréis por el estado de  Maryland y por su ciudad más importante, Baltimore, hasta llegar a vuestro destino, Washington D.C. La primera parada en la ciudad será una visita al monumento a Martin Luther King Jr y otra al de Thomas Jefferson. Seguidamente, en una nueva parada, haréis un recorrido con el guía durante el que visitaréis los monumentos a la guerra de Corea, al presidente Lincoln, a la guerra de Vietnam, al presidente Washington, y la piscina reflectante de la película de Forrest Gump. Para continuar con los imprescindibles, saldréis hacia Virginia para visitar la tumba de los Kennedy en el Cementerio Nacional de Arlington, teniendo la posibilidad de pasar por el Pentágono y el monumento Iwo Jima o monumento a los marines. Luego volveréis nuevamente a Washington entrando por el barrio inglés donde se encuentra la prestigiosa Universidad de George Town y donde se filmaron algunas escenas de la película 'El exorcista'. Vuestra siguiente parada será en la Casa Blanca, donde podréis conocer la historia de Conchita una española que durante más de tres décadas ha permanecido frente a la Casa Blanca. Siguiendo el recorrido, tomaréis la avenida principal de Washington, la Pensilvannia donde el presidente entrante hace su recorrido en la toma de posesión pasando igualmente por los edificios del FBI, Ministerio de Justicia, Hacienda y Archivos Nacionales hasta llegar al Capitolio donde haréis otra parada para fotografiar el National Mall y por supuesto el Capitolio. A continuación disfrutaréis de tiempo libre para almorzar y visitar el Museo del Aire y el Espacio. De regreso, si las condiciones climáticas lo permiten, haréis una parada antes de entrar a Nueva York para captar la esencia y tomar fotografías de la panorámica de Manhattan iluminada, como aparece en las postales, un final perfecto.Una escapada inolvidable e imprescindible."
  },
  {
    "activityName": "9/11 Ground Zero Tour con acceso al museo sin colas",
    "activityPlace": "Nueva York, Estados Unidos",
    "activityDate": "16  de Agosto 2023",
    "activityTime": "06:00",
    "activityPrice": 65,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F5%2F0306%2F1143960%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Únase a nosotros en un recorrido de dos activityTimes por el Complejo del World Trade Center, cubriendo los eventos del 11 de septiembre de 2001. Esta experiencia es una celebración en honor a los héroes y los sobrevivientes de 'Stairwell B'.Traza el camino tomado por los bomberos y descubre cómo algunos resistieron el colapso de una torre de 110 pisos. Usando fotos históricas del 11 de septiembre, esta experiencia narrará los eventos de ese día. Te sorprenderá la valentía de estos primeros respondedores. Descubra cómo el 'Ángel de la escalera B' ayudó a salvar a un equipo de bomberos y el milagro del '911 Surfer', que cabalgó con 88 historias de escombros implosivos.Esta experiencia termina en el Memorial Plaza, donde aprenderá cómo se diseñó y construyó el nuevo Complejo del World Trade Center. Esta es la experiencia definitiva de la Zona Cero. Se incluye el acceso sin colas al Boleto Oficial del 11 de septiembre. Todos los huéspedes deben verificar a través de la seguridad. Este museo es autoguiado. -->Visita: World Trade Center, Nueva York, 10006, EE. UU.--> Este tour cubre los eventos históricos del 11 de septiembre de 2001. Descubrirá cómo los socorristas arriesgan sus vidas para rescatar a más de 10,000 civiles dentro de las Torres Gemelas.Sigue el heroísmo del capitán Jonas y su equipo 'los luchadores del dragón'. Están entre los más valientes. El apodo dado a los bomberos de Nueva York. Contempla la espectacular vista del World Trade Center Memorial Plaza. Desde este punto de vista, vea todo el complejo que comprende One World Trade Center, Reflecting Pools y el 911 Memorial Museum.Procediendo al World Financial Center, te sorprenderás por la Operación Aegis. Cuál es el mayor rescate por mar en la historia. Durante los ataques, más de 500,000 civiles fueron evacuados del bajo Manhattan en botes. Siga la reconstrucción de Winter Gardens, un pabellón de vidrio de 10 pisos y $ 60 millones que fue destruido durante el 11 de septiembre. El recorrido procede a la Fuente de las once lágrimas, dedicada a los once empleados de American Express que se perdieron ese día. Al concluir en el nuevo World Trade Center, su guía detallará el diseño y la construcción del complejo. Aquí descubrirás el misterio de las reservas de oro perdido. El recorrido finaliza en Survivor Tree, donde quedará impresionado por su resistencia, supervivencia y renacimiento.Duración: 2 activityTimes"
  },
  {
    "activityName": "Alquila un scooter eléctrico y descubre la ciudad",
    "activityPlace": "Nueva York, Estados Unidos",
    "activityDate": "17 de Agosto 2023",
    "activityTime": "08:00",
    "activityPrice": 20,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F8%2F0522%2F1368763%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Calidad: nuestros scooters son nuevos, están perfectamente mantenidos y están listos para conducir. Variedad: ya sea que esté buscando cambiar su viaje diario, hacer turismo o obtener una descarga rápida de adrenalina, ¡le recomendamos que pruebe estos! Seguridad: los scooters eléctricos son una nueva forma para que los neoyorquinos y los visitantes se muevan por la ciudad de manera eficiente y, al mismo tiempo, eviten el tránsito público abarrotado. Diversión familiar - ¡Montar en patinetes eléctricos es una excelente activityName para que las familias se diviertan juntas durante las vacaciones!¡Alquile un scooter eléctrico de alta gama en la empresa de alquiler de transporte más respetada de Nueva York! Cada alquiler viene con un mapa gratuito de Central Park y un casco. También se encuentran disponibles mapas de bicicletas de Nueva York. Si no está familiarizado con los patinetes eléctricos, estaremos encantados de empezar con una lección de seguridad antes de que salga de viaje. Los scooters eléctricos pueden viajar hasta 15 millas por activityTime en terreno plano, cuesta arriba o cuesta abajo. Cada scooter está equipado con acelerador, frenos, timbre y faros / luces traseras. ¡Usar un scooter eléctrico para moverse es una manera fácil y eficiente de cubrir más terreno y explorar más el parque!"
  },
  {
    "activityName": "Tour privado de día completo con guía con licencia nacional",
    "activityPlace": "Tokio, Japón",
    "activityDate": "13 de Febrero 2023",
    "activityTime": "08:00",
    "activityPrice": 135,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5f94a66165488.jpeg/98.jpg",
    "activityDescription": "CDisfrute de un recorrido eficiente de un día por Tokio acompañado por un guía multilingüe experimentado y con licencia nacional. Descubra los aspectos modernos y tradicionales de esta dinámica capital japonesa."
  },
  {
    "activityName": "Bahía de Tokio: La Cena Crucero Sinfonía",
    "activityPlace": "Tokio, Japón",
    "activityDate": "14 de Febrero 2023",
    "activityTime": "06:00",
    "activityPrice": 115,
    "activityImg": "https://cdn.getyourguide.com/img/tour/647841239ba50.png/98.jpg",
    "activityDescription": "Disfruta de un crucero restaurante a bordo del barco Symphony en la Bahía de Tokio. Deléitate con una comida completa seleccionando entre una variedad de conjuntos temáticos de platos."
  },
  {
    "activityName": "Tokio: ticket de entrada a la torre de Tokio",
    "activityPlace": "Tokio, Japón",
    "activityDate": "15  de Febrero 2023",
    "activityTime": "10:00",
    "activityPrice": 7,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5d5a21e95ef2f.jpeg/98.jpg",
    "activityDescription": "Visita la emblemática Torre Roja en el corazón de Tokio. Sube hasta la cima de la segunda torre más alta de Japón. Disfruta de un elegante concepto lumínico y vistas sorprendentes tanto de día como de noche."
  },
  {
    "activityName": "Tour por Oxford, Windsor y Stonehenge",
    "activityPlace": "Londres, Reino Unido",
    "activityDate": "3 de Octubre 2023",
    "activityTime": "11:00",
    "activityPrice": 117,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F5%2F1079%2F1150812%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Conozca los mejores activityPlacees de Gran Bretaña en este tour en autobús de lujo que visitará los tres activityPlacees más emblemáticos de Reino Unido. Comience visitando el majestuoso Castillo de Windsor y admire los lujosos apartamentos reales de la residencia favorita de fin de semana de la reina. A continuación, viaje al impresionante Stonehenge, la mística estructura de piedra que ha permanecido intacta desde el año 2000 antes de Cristo, algo que no ha dejado de sorprender a los expertos durante cientos de años. La última parada se realiza en la maravillosa ciudad universitaria de Oxford, sede de la universidad más antigua del mundo anglófono. Realice un tour guiado por las hermosas calles adoquinadas, sumergiéndose en su historia y prestigio.Itinerario: Este es un itinerario habitual de este producto.Para en: Bulleid Way, Victoria, London SW1W, Reino Unido"
  },
  {
    "activityName": "10 activityPlacees culturales en el West End: recorrido de audio autoguiado",
    "activityPlace": "Londres, Reino Unido",
    "activityDate": "4 de Octubre 2023",
    "activityTime": "08:00",
    "activityPrice": 40,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F8%2F5230%2F1398899%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Usa pistas en cada atracción para encontrar tu próximo destino y desafíate a ti mismo usando la lógica, la imaginación, la observación y el espíritu de equipo para completar el juego. Descubre información local y datos sobre la ciudad mientras exploras.Descubre gemas escondidas y calles estrechas. Sin activityTimerio ya tu ritmo, pausa en cualquier momento y continúa más tarde o incluso otro día.Trabaja en equipo o compite entre ellos. Una activityName única de team building perfecta para parejas, familias, empresas, estudiantes y grupos de amigos. Itinerario: Explore Londres con una búsqueda del tesoro interactiva para teléfonos inteligentes y un recorrido a pie autoguiado. Conoce la ciudad mientras resuelves acertijos basados en la ubicación.Después de descargar la aplicación World City Trail en su dispositivo móvil, lo guiarán en una aventura interactiva para descubrir más de 10 atracciones de la ciudad.En el camino, disfrute de la libertad de pausar o reanudar el recorrido cuando lo desee. Comienza a jugar en cualquier momento y admira la ciudad a tu ritmo personal. Deténgase para tomar tantas fotos como desee, o elija tomar un descanso para almorzar en el medio.Visite las atracciones de su elección y continúe más tarde. Disfruta del juego de la gira en tu idioma. Tiempo de caminata: 58 minutos Distancia a pie: 4,4 km Idiomas disponibles: inglés, alemán, francés, holandés, italiano, español."
  },
  {
    "activityName": "Abadía de Westminster, cambio de guardia",
    "activityPlace": "Londres, Reino Unido",
    "activityDate": "5 de Octubre 2023",
    "activityTime": "02:00",
    "activityPrice": 75,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F6%2F8045%2F1275759%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Visite la Abadía de Westminster y obtenga una vista de primera fila de la ceremonia del cambio de la guardia en este recorrido a pie de 2,5 activityTimes por Londres. Con un guía experto, obtenga una entrada de acceso rápido a la Abadía de Westminster, vea College Garden, que se cree que es el jardín más antiguo de Inglaterra, y vea las tumbas de Dickens, Tennyson y otros escritores venerados. Después, viva de primera mano la pompa y el esplendor de la ceremonia del cambio de guardia, mientras contempla el pase de la Caballería Real del Horse Guards Parade o la marcha de los Guardias a pie de la Reina hasta el Palacio de Buckingham. Itinerario:Este es un itinerario habitual de este producto"
  },
  {
    "activityName": "Tour sin guía por Coliseo, entrada sin colas",
    "activityPlace": "Roma, Italia",
    "activityDate": "25 de Agosto 2023",
    "activityTime": "08:00",
    "activityPrice": 45,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F5%2F1286%2F1152837%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Sigue los pasos de los valientes gladiadores y accede al Coliseo, el magnífico símbolo del anfiteatro de la antigua Roma, sin necesidad de esperar en la cola. Se lo agregará a un grupo pequeño con una entrada privilegiada sin colas y, después de los procedimientos de entrada y los controles de seguridad obligatorios, podrá explorar el Coliseo por su cuenta. Después de la visita al Coliseo, lo escoltarán a la entrada del Monte Palatino / Foro Romano, donde podrá explorar ambos sitios por su cuenta.ATENCIÓN 'Coliseo bajo la luz de la luna' incluye la visita guiada en inglés durante 1.15 activityTimes y NO incluye la entrada al Foro Romano y al monte Palatino.¡POR FAVOR, LEA CUIDADOSAMENTE TODA LA INFORMACIÓN SOBRE EL TOUR ANTES DE RESERVAR!"
  },
  {
    "activityName": "Acceso rápido a la Capilla Sixtina de Roma -Tour privado y semiprivado",
    "activityPlace": "Roma, Italia",
    "activityDate": "26 de Agosto 2023",
    "activityTime": "06:00",
    "activityPrice": 103,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F5%2F1451%2F1154490%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "El acceso exprés a la Capilla Sixtina en Roma, con grupos pequeños y opciones privadas disponibles, es un recorrido perfecto de 1 activityTime y 45 minutos que le permitirá visitar la Capilla Sixtina y la Basílica de San Pedro temprano en la mañana antes de abrir al público en general . ¡Con su guía local experto, tendrá acceso directo a la Capilla Sixtina sin esperar en las filas para absorber completamente la belleza de la obra maestra de Miguel Ángel antes de que lleguen grandes grupos de turistas! Dirígete a la Basílica de San Pedro y disfruta de algunas de las piezas más bellas del arte barroco y renacentista. El tamaño de nuestro grupo pequeño de máximo 6 personas crea un ambiente amigable donde puede interactuar con su guía experto. ¿Quieres una experiencia aún más íntima? Reserve un tour privado!"
  },
  {
    "activityName": "Amanecer en Roma- Tour Ebike con degustación de café",
    "activityPlace": "Roma, Italia",
    "activityDate": "27 de Agosto 2023",
    "activityTime": "02:00",
    "activityPrice": 75,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F7%2F8632%2F1349496%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Maximiza tu tiempo en Roma con una bicicleta eléctrica ...¡Levántate temprano por la mañana para experimentar lo mejor de Roma al amanecer!-Acércate a tus bicicletas eléctricas para descubrir la ciudad de una manera fácil, eficiente y original.-Admire Roma en toda su belleza cuando el limbo superior del sol aparece en el cielo desde El Campidoglio.- Visite activityPlacees históricos como la Piazza di Spagna y la Fontana di Trevi sin tráfico de personas o automóviles. Te sentirás como dueño de la ciudad!-Aprender sobre Roma con una guía de historiadores del arte.¡Prueba el famoso café de San Eustaquio admirando el Panteón!"
  },
  {
    "activityName": "¿Paddle Surf o Kayak?: tú escoges",
    "activityPlace": "Barcelona, España",
    "activityDate": "12 de Marzo 2024, Australia",
    "activityTime": "07:00",
    "activityPrice": 7,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F0%2F3352%2F424252%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Es tu momento para huir del bullicio y divertirte al aire libre. Pero no es necesario salir de la ciudad, en el puerto de Barcelona el Centro Municipal de Vela te facilita la conexión con el gran azul. ¡Prepárate para disfrutar del mar y los deportes al aire libre! En el Centro Municipal de Vela, durante una activityTime, podrás practicar Paddle Surf o Kayak. Desde las 9 de la mañana hasta las 19 de la tarde puedes escaparte un rato y cambiar el teclado del ordenador por un remo, o levantarte por la mañana un sábado o un domingo e ir con la familia a pasear en kayak o sobre una tabla por el puerto en esta activityName que será toda una experiencia para todos. Aprovecha que tienes el mar a un paso para relajarte en un entorno natural y sentir cómo te deslizas por encima del agua. Antes de disfrutar de la activityName recibirás una breve explicación por parte de un monitor del Centro Municipal de Vela sobre seguridad y ya te podrás lanzarte a vivir esta pequeña aventura marítima. El Centre Municipal de Vela abre la ciudad al mar con sus activityNamees deportivas marítimas, ¡no dejes de conocerlo, te encantarán sus propuestas!No dejes de ver el video para inspirarte."
  },
  {
    "activityName": "Spa y masajes de lujo en Spazio the Royal fitness & Spa",
    "activityPlace": "Barcelona, España",
    "activityDate": "13 de Marzo 2024, Australia",
    "activityTime": "08:00",
    "activityPrice": 56,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F0%2F7317%2F475583%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "¡Cumple tus mayores sueños de lujo! Vive un día muy especial en el Spazio the Royal fitness & Spa, un momento sublime en un activityPlace único, junto al real club de polo de Barcelona y el hotel fairmont Rey Juan carlos I, un lujo que podrás compartir con los amigos, las amigas o tu pareja. Relajaos durante 2 activityTimes en su fabuloso Spa diseñado por el renombrado arquitecto Carles Ferrater y decorado por José Cortés, con frescos del pintor Xano Armente. O bien, disfrutad de su piscina exterior si el tiempo acompaña. ¡Y todo en un ambiente de puro lujo!Spazio the Royal fitness & Spa es un spa que ofrece una amplia gama de tratamientos relacionados con la salud y la belleza, así como activityNamees dentro de sus 5.400 metros cuadrados de superficie"
  },
  {
    "activityName": "Cena medieval en el Palau Requesens",
    "activityPlace": "Barcelona, España",
    "activityDate": "14 de Marzo 2024, Australia",

    "activityTime": "07:00 ",
    "activityPrice": 79,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F0%2F9432%2F461805%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Un viaje en el tiempo y toda una experiencia que incluye espectáculos medievales, visita guiada y una cena inspirada en la Edad Media. Prepárate para vivir una velada llena de sorpresas. A las 19:00 te recibirán con una copa de cava en el patio del palacio y ya te irás ambientando. Le seguirá una visita guiada por el palacio que te llevará a descubrir, entre otras cosas, que el Palacio Requesens (siglo XIV) perteneció a la Virreina de Nápoles, Isabel de Requesens, y que esconde algunos secretos que te serán desvelados durante la ruta. Para finalizar por todo lo alto, subiréis hasta la torre de vigilancia y a la terraza que tiene unas vistas nocturnas increíbles del Barrio Gótico.Tras el apasionante paseo, empieza la acción, una exhibición de lucha de espadas os abrirá el apetito y dará paso a la Cena de la Virreina, un menú de inspiración medieval servido en el Tinellet y que irá acompañada de una suave música palaciega que os hará sentir como unos auténticos huéspedes de la Virreina. Y como tales, al finalizar la cena, disfrutaréis de un espectáculo digno de un evento organizado por la misma Isabel de Requesens, con fuegos y malabaristas."
  },
  {
    "activityName": "Desde Sídney: Scenic World en Montañas Azules todo incluido",
    "activityPlace": "Sídney, Australia",
    "activityDate": "12 de Junio 2024",
    "activityTime": "07:00",
    "activityPrice": 170,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6413b15be7982.jpeg/98.jpg",
    "activityDescription": "Únete a un pequeño tour con todo incluido por las Montañas Azules en una excursión guiada de un día desde Sídney. Visita Scenic World, las Tres Hermanas, el Wildlife Park o el zoo, disfruta de un almuerzo y de un crucero en ferri en un solo día."
  },
  {
    "activityName": "Sydney: Excursión de 3 activityTimes en catamarán para avistar ballenas",
    "activityPlace": "Sídney, Australia",
    "activityDate": "13 de Junio 2024",
    "activityTime": "05:00",
    "activityPrice": 56,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6438e9362850e.jpeg/98.jpg",
    "activityDescription": "Haz una excursión de avistamiento de ballenas en Sídney a bordo de un gran catamarán construido a medida, que combina la navegación a alta velocidad con 2 niveles de cubiertas de observación."
  },
  {
    "activityName": "Sídney: tour en autobús turístico descapotable",
    "activityPlace": "Sídney, Australia",
    "activityDate": "14 de Junio 2024",
    "activityTime": "06:00",
    "activityPrice": 30,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5b54978d924ae.jpeg/98.jpg",
    "activityDescription": "Contempla lo mejor de Sídney a tu propio ritmo con un recorrido turístico de subida y bajada libre. Disfruta de vistas panorámicas y comentarios digitales de expertos a bordo del autobús de dos pisos, tanto en la ruta de Sídney como en la de Bondi."
  },
  {
    "activityName": "Río de Janeiro: tour a pie de medio día por favela Rocinha",
    "activityPlace": "Río de Janeiro, Brasil",
    "activityDate": "23 de Enero 2024",
    "activityTime": "08:00",
    "activityPrice": 31,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5b3c75870bdac.jpeg/98.jpg",
    "activityDescription": "Disfruta de un tour a pie en la favela Rocinha de Río, la más grande de Brasil, y descubre la vida en los barrios marginales. Haz un tour respetuoso con un residente de favela, conoce a los activityPlaceeños y conoce su vida alejada de los estereotipos."
  },
  {
    "activityName": "Desde Río: 1 día a Arraial do Cabo, tour en barco y almuerzo",
    "activityPlace": "Río de Janeiro, Brasil",
    "activityDate": "24 de Enero 2024",
    "activityTime": "08:00",
    "activityPrice": 50,
    "activityImg": "https://cdn.getyourguide.com/img/tour/600b1ff28e536.jpeg/98.jpg",
    "activityDescription": "Disfruta de un paseo en barco por las aguas cristalinas de Arraial do Cabo, el Caribe brasileño. Saborea un almuerzo de bufé. Acércate a la fauna marina."
  },
  {
    "activityName": "Río de Janeiro: Entradas para los partidos de fútbol en el Estadio Maracaná",
    "activityPlace": "Río de Janeiro, Brasil",
    "activityDate": "25 de Enero 2024",
    "activityTime": "09:00",
    "activityPrice": 116,
    "activityImg": "https://cdn.getyourguide.com/img/tour/631a48255019c.jpeg/98.jpg",
    "activityDescription": "Asiste en directo a un partido de fútbol con el Flamengo o el Fluminense en el mundialmente famoso estadio Maracaná de Río de Janeiro. Siente el ambiente del día del partido y sumérgete en las celebraciones del público."
  },
  {
    "activityName": "Desde Ciudad del Cabo: ida y vuelta a Aquila con safari",
    "activityPlace": "Ciudad del Cabo, Sudáfrica",
    "activityDate": "17 de Octubre 2023",
    "activityTime": "09:00",
    "activityPrice": 160,
    "activityImg": "https://cdn.getyourguide.com/img/tour/57f2365e8e088.jpeg/98.jpg",
    "activityDescription": "Viaja a la reserva privada safari de Aquila. Disfruta de un safari en vehículo abierto con la oportunidad de ver jirafas, leones, leopardos, cebras, rinocerontes, ñus y muchos otros tipos de especies salvajes. Deléitate con un almuerzo en la cabaña."
  },
  {
    "activityName": "Desde Ciudad del Cabo: safari 2 días Garden Route Game Lodge",
    "activityPlace": "Ciudad del Cabo, Sudáfrica",
    "activityDate": "18 de Octubre 2023",
    "activityTime": "06:00",
    "activityPrice": 350,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5afd5095cfc1d.jpeg/98.jpg",
    "activityDescription": "Viaja desde Ciudad del Cabo en este safari de 2 días, que incluye una noche en la reserva Garden Route Game Lodge. Realiza 2 safaris para ver elefantes, leones, rinocerontes, jirafas, hipopótamos y más."
  },
  {
    "activityName": "Desde Hermanus/Ciudad del Cabo: buceo en jaula con tiburones",
    "activityPlace": "Ciudad del Cabo, Sudáfrica",
    "activityDate": "19 de Octubre 2023",
    "activityTime": "07:00",
    "activityPrice": 126,
    "activityImg": "https://cdn.getyourguide.com/img/tour/56555d7da37e2.jpeg/98.jpg",
    "activityDescription": "Vive una experiencia única de buceo en jaula con las distintas especies de tiburones de Sudáfrica. Sé testigo de la maravilla de estos tiburones en un entorno seguro y profesional."
  },
  {
    "activityName": "Vancouver: tour para avistar ballenas",
    "activityPlace": "Vancouver,Canadá",
    "activityDate": "10 de Abril 2024",
    "activityTime": "06:00",
    "activityPrice": 166,
    "activityImg": "https://cdn.getyourguide.com/img/tour/a04363744a2ecc1e.jpeg/98.jpg",
    "activityDescription": "Admira de cerca ballenas y otros animales marinos en un catamarán cubierto Salish Sea de última generación. Disfruta de tres niveles de áreas de observación, un paquete fotográfico incluido y avistamientos de ballenas garantizados."
  },
  {
    "activityName": "Tour panorámico en hidroavión sobre Vancouver",
    "activityPlace": "Vancouver,Canadá",
    "activityDate": "11 de Abril 2024",
    "activityTime": "09:00",
    "activityPrice": 110,
    "activityImg": "https://cdn.getyourguide.com/img/tour/59a3efc0268ae.jpeg/98.jpg",
    "activityDescription": "Una excelente introducción al vuelo con hidroavión: despega en el bullicioso Coal Harbour, en el centro de Vancouver, y sobrevuela la ciudad y sus parques antes de aterrizar de nuevo frente al Vancouver Convention Center, un activityPlace emblemático."
  },
  {
    "activityName": "Vancouver: Paseo Gastown",
    "activityPlace": "Vancouver,Canadá",
    "activityDate": "12 de Abril 2024",
    "activityTime": "4:00",
    "activityPrice": 94,
    "activityImg": "https://cdn.getyourguide.com/img/tour/62857ce42a4be.jpeg/98.jpg",
    "activityDescription": "Tienta tus papilas gustativas mientras disfrutas de un recorrido gastronómico a pie por el histórico Gastown de Vancouver. Explora este barrio de gran riqueza cultural y visita 7 restaurantes para disfrutar de la comida y la bebida locales."
  },
  {
    "activityName": "Estambul: crucero con cena y espectáculo en mesa privada",
    "activityPlace": "Estambul, Turquía",
    "activityDate": "15 de Agosto 2023",
    "activityTime": "11:00",
    "activityPrice": 40,
    "activityImg": "https://cdn.getyourguide.com/img/tour/28c97fcd1d6294d1.jpeg/98.jpg",
    "activityDescription": "Admira las vistas del Bósforo a bordo de un megayate. Contempla las vistas de la ciudad desde tu mesa privada mientras disfrutas de una cena de 3 platos con música en directo y actuaciones en el escenario."
  },
  {
    "activityName": "Estambul: Baño turco privado, sauna y masaje",
    "activityPlace": "Estambul, Turquía",
    "activityDate": "16 de Agosto 2023",
    "activityTime": "10:00",
    "activityPrice": 50,
    "activityImg": "https://cdn.getyourguide.com/img/tour/646f5acb3fad6.jpeg/98.jpg",
    "activityDescription": "Regálate unos mimos durante tu estancia en Estambul con una auténtica experiencia de baño turco. Rejuvenécete aprovechando una tradición histórica, combinándola con una mascarilla facial, un masaje de espuma o una exfoliación corporal."
  },
  {
    "activityName": "Estambul: Visita a la Mezquita Azul, la Cisterna Basílica y Santa Sofía",
    "activityPlace": "Estambul, Turquía",
    "activityDate": "20 de Agosto 2023",
    "activityTime": "9:00",
    "activityPrice": 60,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6477b225d9b33.jpeg/98.jpg",
    "activityDescription": "Contempla 3 de los monumentos más famosos de Estambul con esta visita combinada guiada. Maravíllate ante la emblemática Mezquita Azul, explora la misteriosa Cisterna Basílica y contempla la gran mezquita de Santa Sofía."
  },
  {
    "activityName": "Desde Buenos Aires: ferri a Colonia y tour opcional",
    "activityPlace": "Buenos Aires, Argentina",
    "activityDate": "6 de Diciembre 2023",
    "activityTime": "10:00",
    "activityPrice": 77,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5da732b466c66.jpeg/98.jpg",
    "activityDescription": "Sube a bordo de este excepcional crucero de 1 activityTime en ferri y pasa el día en la hermosa ciudad de Colonia del Sacramento. Cruza el Río de la Plata desde Buenos Aires y descubre este activityPlace que forma parte del Patrimonio de la Humanidad de la UNESCO."
  },
  {
    "activityName": "Tour prémium por el delta de Tigre desde Buenos Aires",
    "activityPlace": "Buenos Aires, Argentina",
    "activityDate": "8 de Diciembre 2023",
    "activityTime": "02:00",
    "activityPrice": 85,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5dcaa0b604702.jpeg/98.jpg",
    "activityDescription": "Explora el delta de Tigre, denominado así por los jaguares que una vez habitaron la zona. Aprende acerca de la historia de esta zona única del norte de Buenos Aires."
  },
  {
    "activityName": "Tour en bicicleta por el norte o el sur de Buenos Aires",
    "activityPlace": "Buenos Aires, Argentina",
    "activityDate": "12 de Diciembre 2023",
    "activityTime": "7:00",
    "activityPrice": 40,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5ced4acceff62.jpeg/98.jpg",
    "activityDescription": "Explora lo mejor de Buenos Aires en un tour en bicicleta por los activityPlacees más increíbles de la ciudad. Elige entre el tour norte y el tour sur para explorar la ciudad."
  },
  {
    "activityName": "Bangkok: mercado de Damnoen Saduak y mercado de Mae Klong",
    "activityPlace": "Bangkok, Tailandia",
    "activityDate": "17 de Noviembre 2023",
    "activityTime": "11:00",
    "activityPrice": 33,
    "activityImg": "https://cdn.getyourguide.com/img/tour/55dcee9fa28d0d0e.jpeg/98.jpg",
    "activityDescription": "Visita el mercado del tren de Mae Klong y el mercado flotante de Damnoen Saduak en un tour guiado privado o en grupo desde Bangkok. Interactúa con los amables vendedores locales."
  },
  {
    "activityName": "Experiencias en Bangkok Excursiones en bicicleta-Calles traseras y joyas ocultas",
    "activityPlace": "Bangkok, Tailandia",
    "activityDate": "18 de Noviembre 2023",
    "activityTime": "07:00",
    "activityPrice": 35,
    "activityImg": "https://cdn.getyourguide.com/img/tour/644b2ddfa57a9.jpeg/98.jpg",
    "activityDescription": "Descubre las joyas ocultas de Bangkok en un recorrido en bicicleta por tranquilas callejuelas a través de estrechas calles y callejones. Tus sentidos cobrarán vida ante las vistas y el olor de una vibrante comunidad en movimiento."
  },
  {
    "activityName": "Tour de santuario de elefantes y Kanchanaburi",
    "activityPlace": "Bangkok, Tailandia",
    "activityDate": "20 de Noviembre 2023",
    "activityTime": "06:00",
    "activityPrice": 65,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5a96bca362c35.jpeg/98.jpg",
    "activityDescription": "Visita ElephantsWorld y alimenta y baña a los animales rescatados. Haz un tour por Kanchanaburi y ve el puente sobre el río Kwai y más."
  },
  {
    "activityName": "Ámsterdam: autobús por Zaanse Schans, Edam, Volendam, Marken",
    "activityPlace": "Ámsterdam, Paises Bajos",
    "activityDate": "15 de Marzo 2024",
    "activityTime": "10:30",
    "activityPrice": 37,
    "activityImg": "https://cdn.getyourguide.com/img/tour/0b5a1a1968c53daf.jpeg/98.jpg",
    "activityDescription": "Explora casas del siglo XVII y molinos de la campiña neerlandesa en un tour por Zaanse Schans, Volendam, Edam y Marken desde Ámsterdam."
  },
  {
    "activityName": "Ámsterdam: crucero por los canales de la ciudad",
    "activityPlace": "Ámsterdam, Paises Bajos",
    "activityDate": "17 de Marzo 2024",
    "activityTime": "07:00",
    "activityPrice": 35,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6491ba487675a.jpeg/98.jpg",
    "activityDescription": "Descubre el ambiente único de Ámsterdam en este crucero por los canales de 75 minutos. Observa los canales, declarados Patrimonio de la Humanidad de la UNESCO, sus emblemáticos puentes y las casas del paseo marítimo."
  },
  {
    "activityName": "Desde Bangkok: Ayutthaya y almuerzo en grupo reducido",
    "activityPlace": "Ámsterdam, Paises Bajos",
    "activityDate": "20 de Marzo 2024",
    "activityTime": "11:50",
    "activityPrice": 45,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5e7113d32cbb0.jpeg/98.jpg",
    "activityDescription": "Realiza una excursión guiada de un día al parque histórico reconocido como Patrimonio de la Humanidad de la UNESCO de Ayutthaya, antigua capital de Siam, y visita 4 de los templos más importantes de la ciudad."
  },
  {
    "activityName": "Berlín: tour por la ciudad de 1 h en barco con asiento",
    "activityPlace": "Berlín, Alemania",
    "activityDate": "19 de Mayo 2024",
    "activityTime": "10:00",
    "activityPrice": 20,
    "activityImg": "https://cdn.getyourguide.com/img/tour/bc741f5d1499ff7e.jpeg/98.jpg",
    "activityDescription": "En este tour conocerás la fascinante historia de Berlín y podrás contemplar las atracciones más importantes desde un cómodo barco. El crucero sale de Friedrichstraße o Nikolaiviertel y atraviesa Berlín en un recorrido de 1 activityTime de duración."
  },
  {
    "activityName": "Berlin WelcomeCard: descuentos y transporte Berlín zonas ABC",
    "activityPlace": "Berlín, Alemania",
    "activityDate": "20 de Mayo 2024",
    "activityTime": "11:30 AM",
    "activityPrice": 40,
    "activityImg": "https://cdn.getyourguide.com/img/tour/63fe1f0984eef.jpeg/98.jpg",
    "activityDescription": "Descubre Berlín con una Berlin WelcomeCard de 2, 3, 4, 5 o 6 días. Sube al transporte público en las zonas ABC, incluido el aeropuerto de Berlín Brandenburgo, y recibe hasta el 50 % de descuento en activityPlacees asociados y una guía de bolsillo."
  },
  {
    "activityName": "Berlín: tour en barco por el río Spree",
    "activityPlace": "Berlín, Alemania",
    "activityDate": "21 de Mayo 2024",
    "activityTime": "10:45",
    "activityPrice": 25,
    "activityImg": "https://cdn.getyourguide.com/img/tour/554b4ae0edcc9.jpeg/98.jpg",
    "activityDescription": "Descubre Berlín en un crucero en barco de 2 activityTimes y 15 minutos por el río Spree. Visita algunos de los activityPlacees más emblemáticos de la ciudad, como el distrito gubernamental, el palacio de Bellevue, la catedral de Berlín y la Isla de los Museos."
  },
  {
    "activityName": "Praga: crucero nocturno de 50 minutos",
    "activityPlace": "Praga, Republica Checa",
    "activityDate": "16 de Enero 2024",
    "activityTime": "11:45",
    "activityPrice": 18,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6401d323b7af6.jpeg/98.jpg",
    "activityDescription": "Admira el puente de Carlos, el Castillo de Praga, la Isla de Kampa y otros monumentos de Praga desde el agua a bordo de un crucero nocturno por la ciudad. Disfruta de los principales atractivos de la ciudad iluminados tras caer la noche."
  },
  {
    "activityName": "Praga: cena medieval con barra libre",
    "activityPlace": "Praga, Republica Checa",
    "activityDate": "17 de Enero 2024",
    "activityTime": "09:30",
    "activityPrice": 67,
    "activityImg": "https://cdn.getyourguide.com/img/tour/449600a13f1d8011.jpeg/98.jpg",
    "activityDescription": "Disfruta de una deliciosa cena medieval de 3 platos por la tarde o de 5 platos por la noche, con bebidas ilimitadas. Te entretendrás con una representación medieval especial, llena de música, danza y mucho más."
  },
  {
    "activityName": "Praga: crucero con techo descubierto de cristal y cena",
    "activityPlace": "Praga, Republica Checa",
    "activityDate": "18 de Enero 2024",
    "activityTime": "09:00",
    "activityPrice": 69,
    "activityImg": "https://cdn.getyourguide.com/img/tour/0e2e99598326f01e.jpeg/98.jpg",
    "activityDescription": "Admira la belleza de los edificios de Praga, como el castillo, iluminados al anochecer durante un crucero de 3 h con bufé a bordo de un moderno barco con techo descubierto de cristal."
  },
  {
    "activityName": "Lo mejor de Copenhague: Excursión en bici de 3 activityTimes",
    "activityPlace": "Copenhague, Dinamarca",
    "activityDate": "7 de Noviembre 2023",
    "activityTime": "09:00",
    "activityPrice": 52,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5b2cd3fbca7de.jpeg/98.jpg",
    "activityDescription": "Disfruta de un tour de 3 activityTimes en bicicleta por Copenhague, una de las mejores ciudades para ir sobre dos ruedas. Visita los monumentos más importantes y aprende sobre la historia de la ciudad."
  },
  {
    "activityName": "Copenhague: Visita guiada a bares con 4 chupitos y 1 cerveza",
    "activityPlace": "Copenhague, Dinamarca",
    "activityDate": "8 de Noviembre 2023",
    "activityTime": "07:00",
    "activityPrice": 34,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5de9c0d006d0a.jpeg/98.jpg",
    "activityDescription": "Experimente la loca vida nocturna de Copenhague en un recorrido por algunos de los mejores pubs y discotecas de la ciudad. Disfruta de una bebida gratis en cada bar y conoce a viajeros de todo el mundo.."
  },
  {
    "activityName": "Copenhague: Visita guiada por los canales en barco eléctrico",
    "activityPlace": "Copenhague, Dinamarca",
    "activityDate": "9 de Noviembre 2023",
    "activityTime": "10:00",
    "activityPrice": 45,
    "activityImg": "https://cdn.getyourguide.com/img/tour/645212dfd899d.jpeg/98.jpg",
    "activityDescription": "Sube a bordo de un barco eléctrico y explora las joyas ocultas de Copenhague. Experimenta el hygge danés en este recorrido turístico en barco con comentarios informativos de un guía bilingüe."
  },
  {
    "activityName": "Victoria Harbour por la noche o crucero Sinfonía de luces",
    "activityPlace": "Hong Kong, China",
    "activityDate": "21 agosto 2023",
    "activityTime": "11:00",
    "activityPrice": 35,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5ce19d505bb0a.jpeg/98.jpg",
    "activityDescription": "Disfruta de una experiencia única contemplando la línea de costa de Hong Kong con un crucero turístico de lujo. Con diferentes activityTimerios, explora los rascacielos de Hong Kong con una sinfonía de luces y las activityPricesas vistas nocturnas."
  },
  {
    "activityName": "Isla Lantau: barco y teleférico NP360 o pase de 1 día Tai O",
    "activityPlace": "Hong Kong, China",
    "activityDate": "22 agosto 2023",
    "activityTime": "08:00",
    "activityPrice": 40,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5a9bcc08da52e.jpeg/98.jpg",
    "activityDescription": "Sáltate las colas para NP360 y comienza tu aventura. Disfruta de las espectaculares vistas de la isla de Lantau, Ngong Ping y el mar. Descubre la zona desde el cielo, tierra y mar montando en teleférico, dando un paseo en barco y caminando hasta el Buda."
  },
  {
    "activityName": "Hong Kong: Excursión a la Cascada de Tai Mo Shan",
    "activityPlace": "Hong Kong, China",
    "activityDate": "23 agosto 2023",
    "activityTime": "09:00",
    "activityPrice": 100,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5e37e8227dce5.jpeg/98.jpg",
    "activityDescription": "Escápate de las ajetreadas calles de Hong Kong para disfrutar de medio día de senderismo en la montaña Tai Mo Shan. Tu ruta culminará en las impresionantes cascadas de Ng Tung Chai, donde, si el tiempo lo permite, podrás darte un refrescante chapuzón."
  },
  {
    "activityName": "Singapur Entrada Universal Studios Singapur",
    "activityPlace": "Singapur, Singapur",
    "activityDate": "19 de Junio 2024",
    "activityTime": "11:00",
    "activityPrice": 65,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5d54df0d4ea4b.jpeg/98.jpg",
    "activityDescription": "Deja a Steven Spielberg aconsejarte sobre efectos especiales, sobrevive a la maldición de la momia, surca los rápidos de Parque Jurásico y conoce a personajes de Shrek en 4D con este ticket."
  },
  {
    "activityName": "Singapur: Excursión histórica de medio día en bicicleta",
    "activityPlace": "Singapur, Singapur",
    "activityDate": "17 de Junio 2024",
    "activityTime": "11:00",
    "activityPrice": 45,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6406ca8ed9981.jpeg/98.jpg",
    "activityDescription": "Explora el auténtico Singapur en este recorrido histórico en bicicleta. Descubre la fascinante historia de la ciudad mientras pedaleas por sus calles y recorres el río Singapur en un divertido recorrido de medio día en bicicleta."
  },
  {
    "activityName": "Singapur: Recorridos en pato con audioguía",
    "activityPlace": "Singapur, Singapur",
    "activityDate": "18 de Junio 2024",
    "activityTime": "09:00",
    "activityPrice": 56,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5c331ee000fa0.png/98.jpg",
    "activityDescription": "Suba a bordo de un vehículo anfibio restaurado de la Segunda Guerra Mundial y experimente un recorrido turístico único de 1 activityTime por los activityPlacees de interés de Singapur en tierra y mar.."
  },
  {
    "activityName": "Cena en un restaurante panorámico y espectáculo en Plaza Mariachisa",
    "activityPlace": "Ciudad de México, México",
    "activityDate": "5 de marzo 2024",
    "activityTime": "09:00",
    "activityPrice": 65,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F8%2F7264%2F1412541%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Únete al único tour que te hace vivir una experiencia nocturna inigualable al cenar en el restaurante giratorio más grande del mundo a 45 pisos de altura y vivir una noche de fiesta mexicana con un espectáculo grandioso. Comienza la noche con una experiencia culinaria gourmet en el restaurante giratorio Bellini situado en el piso 45 del World Trade Center. Tu apetitosa cena se servirá con una vista a 360 grados del maravilloso Valle de México con fantásticas vistas panorámicas de la ciudad. Además, deléitate de lo mejor de la cocina internacional en un menú completo y saborea un delicioso postre para endulzar aún más tu velada mientras disfrutas del horizonte nocturno. El restaurante realiza una rotación completa cada activityTime y 45 minutos, por lo que al final de la comida habrás visto todos los puntos de la ciudad. Al finalizar tu experiencia continuarás con un recorrido para aventurarte en la ciudad y disfrutar de la vida nocturna en la Plaza Garibaldi o comúnmente conocida Plaza de los Mariachis. Serás partícipe de un espectáculo colorido lleno de belleza y folclore en el Club Guadalajara de Noche donde disfrutarás de una bebida en cortesía mientras presencias el show. La música de mariachi te envolverá con las tradicionales melodías mexicanas que te harán bailar, cantar y disfrutar de una velada inolvidable durante las cinco activityTimes de duración de tu tour."
  },
  {
    "activityName": "Grutas de Tolantongo",
    "activityPlace": "Ciudad de México, México",
    "activityDate": "6 de marzo 2024",
    "activityTime": "08:30",
    "activityPrice": 65,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F8%2F7260%2F1412532%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Grutas de Tolantongo te ofrece las maravillas naturales de México en donde podrás conocer aguas termales entre cuevas, ríos, pozas, cascadas y más. Pasa un día relajante en las aguas termales de Tolantongo, Hidalgo a 1280 metros sobre el nivel del mar que han tomado fama por su belleza en los últimos años. Dentro de este parque turístico tendrás acceso a los atractivos como la gruta, el túnel, río, albercas, pozas termales así como el senderismo por la flora y fauna de la región y tambien podrás descender por la tirolesa (con costo adicional). Este recorrido 100% familiar te permitirá asombrarte de las riquezas naturales de nuestro país así como pasar un día divertido y relajante por los atractivos a tu gusto. Recomendamos llevar dinero en efectivo ya que no hay cajeros automáticos cercanos, probar las delicias gastronómicas preparadas por gente de la región y tomar increíbles fotografías de los paisajes que conocerás. El parque cuenta con servicio de regaderas, lockers, restaurantes, tienda de abarrotes, hospedaje y zona de acampar."
  },
  {
    "activityName": "Peña de Bernal, Tequisquiapan y vinos mexicanos",
    "activityPlace": "Ciudad de México, México",
    "activityDate": "7 de marzo 2024",
    "activityTime": "08:00",
    "activityPrice": 55,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F8%2F7241%2F1412362%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Impresiónate con este tour que te llevará a conocer importantes la historia y los deliciosos sabores de la Ruta del Queso y el vino entre las viñas, cavas y fábricas más importantes, así como el bello pueblo mágico de Bernal. El tour comienza en el corazón de Querétaro donde visitarás Cavas Freixenet distinguida por ofrecer una verdadera experiencia enoturística al conocer el proceso de elaboración de exquisito vino desde la producción de la uva hasta la crianza y el proceso de fermentación del vino en un recorrido a 25 metros de profundidad en sus cavas y al final una degustación de su famoso vino espumoso donde te llevas una copa de regalo.Conoce también la historia del Pueblo mágico de Bernal, un bello activityPlace de calles empedradas y edificios coloridos con buganvilias en los tejados donde disfrutarás de la tranquilidad y aire fresco. Podrás recorrerlo a pie y disfrutar de sus calles angostas y hospitalidad de su gente. El pueblo lleva su nombre Peña de Bernal por un monte rocoso conocido como “La Peña” y es el tercer monolito más grande del mundo con una altitud de 2515 metros sobre el nivel del mar y mide 288 metros de altura, un espacio perfecto para tomar la mejor fotografía de tu viaje en México.Por último visitaremos el Pueblo Mágico de Tequisquiapan caracterizado por su tranquilidad, calles adoquinadas adornadas de ventanas de fiero forjado así como calles angostas y andadores.  Te recomendamos adquirir las artesanías típicas de la región como los juguetes de madera, sombreros, canastas, jarrones, entre otros. Al finalizar tu recorrido te llevaremos de regreso a Ciudad de México."
  },
  {
    "activityName": "Dubái: safari, quad, paseo en camello y campamento Al Khayma",
    "activityPlace": "Dubái, Emiratos Árabes Unidos",
    "activityDate": "16 de Enero 2024",
    "activityTime": "09:00",
    "activityPrice": 40,
    "activityImg": "https://cdn.getyourguide.com/img/tour/620733cf78f74.jpeg/98.jpg",
    "activityDescription": "Explora el desierto de Dubái en el safari definitivo por el desierto que incluye la emoción de un paseo en quad y en camello en el campamento de Al Khayma (opciona). Te encantarán los deportes del desierto, como el surf por las dunas y sandboarding."
  },
  {
    "activityName": "Dubai: Entrada al Museo del Futuro",
    "activityPlace": "Dubái, Emiratos Árabes Unidos",
    "activityDate": "17 de Enero 2024",
    "activityTime": "08:00",
    "activityPrice": 35,
    "activityImg": "https://cdn.getyourguide.com/img/tour/61f10556b4129.jpeg/98.jpg",
    "activityDescription": "Sumérgete en una poderosa visión del futuro con esta entrada al Museo del Futuro de Dubai. Viaja 50 años en el futuro para echar un vistazo imaginativo a cómo será el mundo."
  },
  {
    "activityName": "Dubai Marina: tour en yate con desayuno o barbacoa",
    "activityPlace": "Dubái, Emiratos Árabes Unidos",
    "activityDate": "19 de Enero 2024",
    "activityTime": "07:00",
    "activityPrice": 37,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6214a69f41534.jpeg/98.jpg",
    "activityDescription": "Explora los principales activityPlacees de Dubái en este tour en yate que sale de Dubai Marina. Complementa la experiencia con un guía y una barbacoa recién hecha o un desayuno a bordo."
  },
  {
    "activityName": "Auckland: crucero ecológico avistamiento ballenas y delfines",
    "activityPlace": "Auckland, Nueva Zelanda",
    "activityDate": "21 de Diciembre 2024",
    "activityTime": "05:00",
    "activityPrice": 94,
    "activityImg": "https://cdn.getyourguide.com/img/tour/55306477b6874.jpeg/98.jpg",
    "activityDescription": "Disfruta del Parque Marino del golfo de Hauraki en un safari marino ecoturístico de 4,5 activityTimes. Disfruta de una garantía por la que si no ves ningún mamífero marino, puedes volver a realizar el crucero de forma gratuita."
  },
  {
    "activityName": "Tour guiado a la cueva Waitomo y Hobbiton desde Auckland",
    "activityPlace": "Auckland, Nueva Zelanda",
    "activityDate": "22 de Diciembre 2024",
    "activityTime": "10:00",
    "activityPrice": 194,
    "activityImg": "https://cdn.getyourguide.com/img/tour/50298602448a2.png/98.jpg",
    "activityDescription": "Visita el set de rodaje de Hobbiton y las cuevas de Waitomo en una excursión de un día a bordo de un autobús prémium desde Auckland. Disfruta de un almuerzo en Hobbiton. Sumérgete en el paisaje de la Tierra Media de la mano de tu guía experto."
  },
  {
    "activityName": "Auckland: Visita privada personalizada con un guía local",
    "activityPlace": "Auckland, Nueva Zelanda",
    "activityDate": "24 de Diciembre 2024",
    "activityTime": "11:00",
    "activityPrice": 50,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6474ac17c6081.jpeg/98.jpg",
    "activityDescription": "¡Explora Auckland junto a un guía local! Deja que te enseñe todo lo que hay que saber sobre la ciudad, los activityPlacees emblemáticos y la historia, pero también algunos sitios agradables para comer durante este recorrido privado a pie."
  },
  {
    "activityName": "Estocolmo: crucero turístico por el archipiélago con guía",
    "activityPlace": "Estocolmo, Suecia",
    "activityDate": "7 de mayo 2024",
    "activityTime": "10:00",
    "activityPrice": 35,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5800eec24b11f.jpeg/98.jpg",
    "activityDescription": "Sube a bordo de un barco clásico del archipiélago y navega por los canales de Estocolmo en un crucero turístico. Experimenta la naturaleza intacta del archipiélago de la ciudad y escucha sobre los activityPlacees de interés con tu guía."
  },
  {
    "activityName": "Estocolmo: Entrada al Museo Paradox",
    "activityPlace": "Estocolmo, Suecia",
    "activityDate": "9 de mayo 2024",
    "activityTime": "09:00",
    "activityPrice": 19,
    "activityImg": "https://cdn.getyourguide.com/img/tour/62a1ba7b5c20d.jpeg/98.jpg",
    "activityDescription": "Engaña a tu mente con 70 exposiciones basadas en paradojas en el familiar Museo Paradox de Estocolmo. Reserva una entrada para despertar tus sentidos con experiencias interactivas e ilusiones ópticas que desafían la realidad."
  },
  {
    "activityName": "Estocolmo: tour por tierra y agua en autobús anfibio",
    "activityPlace": "Estocolmo, Suecia",
    "activityDate": "10 de mayo 2024",
    "activityTime": "10:00",
    "activityPrice": 32,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5be1cf47d7063.jpeg/98.jpg",
    "activityDescription": "Descubre la activityPricesa ciudad de Estocolmo a bordo de un autobús anfibio. Escucha las divertidas e interesantes historias que contará el guía en directo en un tour que se desarrolla tanto por tierra como por mar."
  },
  {
    "activityName": "Desde Seúl: Visita guiada a la DMZ, el 3er Túnel y el Puente Colgante",
    "activityPlace": "Seúl, Corea del sur",
    "activityDate": "15 de Noviembre 2023",
    "activityTime": "09:00",
    "activityPrice": 70,
    "activityImg": "https://cdn.getyourguide.com/img/tour/63eecb736694a.jpeg/98.jpg",
    "activityDescription": "Visita el 3er túnel de infiltración, el Observatorio de Dora y el puente colgante para contemplar vistas panorámicas y su historia de guerra. Contempla la DMZ de Corea del Sur y aprende sobre las dos Coreas con tu guía."
  },
  {
    "activityName": "Seúl: Crucero Nocturno Guiado por el Río Han y Picnic en el Parque Hangang",
    "activityPlace": "Seúl, Corea del sur",
    "activityDate": "16 de Noviembre 2023",
    "activityTime": "11:00",
    "activityPrice": 46,
    "activityImg": "https://cdn.getyourguide.com/img/tour/644b6b4f9a0ce.jpeg/98.jpg",
    "activityDescription": "Sumérgete en la vida nocturna de Seúl en el Parque del Río Han, explorando la cultura, los juegos y la comida coreanos. Descubre la historia y el perfil de la ciudad en un crucero con entradas opcionales reservadas con antelación, y disfruta de un picnic."
  },
  {
    "activityName": "Estocolmo: tour por tierra y agua en autobús anfibio",
    "activityPlace": "Seúl, Corea del sur",
    "activityDate": "20 de Noviembre 2023",
    "activityTime": "10:00",
    "activityPrice": 32,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5be1cf47d7063.jpeg/98.jpg",
    "activityDescription": "Descubre la activityPricesa ciudad de Estocolmo a bordo de un autobús anfibio. Escucha las divertidas e interesantes historias que contará el guía en directo en un tour que se desarrolla tanto por tierra como por mar."
  },
  {
    "activityName": "7 colinas y 14 miradores: recorrido en bicicleta eléctrica por Lisboa",
    "activityPlace": "Lisboa, Portugal",
    "activityDate": "7 de Diciembre 2023",
    "activityTime": "01:00",
    "activityPrice": 38,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F8%2F1426%2F1374078%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "En este recorrido, con la ayuda de bicicletas eléctricas, visitaremos las 7 colinas de Lisboa y los 14 miradores. En este tour visitaremos algunos de los miradores de Lisboa más famosos, como Graça, Santa Luzia, Srª do Monte pero visitaremos muchos otros, menos famosos.Si ver Lisboa desde arriba es algo maravilloso, entrar en distritos históricos, como Alfama, Mouraria, Graça, con un guía local muy popular, es una experiencia inolvidable.Dentro de estos barrios, haremos varias paradas para conocer los activityPlacees, conocer pequeñas historias y visitar tiendas tradicionales. También haremos una pausa para degustar. En este tour también se incluye un brindis con la tradicional ginjinha y degustar algunos bocadillos portugueses. Durante nuestra ruta observaremos las casas tradicionales lisboetas, grandes y pequeñas, pintadas con diferentes colores, o decoradas con grandes dibujos realizados en azulejos que también estarán presentes a lo largo de este recorrido en bicicleta.También pasaremos por muchos de los monumentos más importantes de la ciudad."
  },
  {
    "activityName": "Algarve en un tour privado: lagos, Carvoeiro, Benagil y playa Marinha",
    "activityPlace": "Lisboa, Portugal",
    "activityDate": "8 de Diciembre 2023",
    "activityTime": "09:00",
    "activityPrice": 254,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F8%2F0272%2F1366140%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Disfrute de un tour privado de día completo a la región más meridional de Portugal: el Algarve. Allí tendrá la oportunidad de visitar hermosos activityPlacees como los acantilados de Ponta da Piedade, un increíble complejo de cuevas ubicado en la ciudad de Lagos, la playa de Benagil y la playa y los acantilados de Marinha. Si el clima lo permite, puede nadar o dar un paseo en bote a las cuevas (por cuenta propia). A veces las condiciones del mar no permiten que los barcos realicen los recorridos, así que tenlo en cuenta. Mientras esté en el Algarve, podemos llevarlo a una comida tradicional que puede ir desde pescados y mariscos de origen local o el tradicional pollo Piri-Piri. Su día estará lleno de increíbles oportunidades para tomar fotos y hermosos paisajes Aproveche esta oportunidad para alejarse de las grandes ciudades y disfrutar de un día para recordar.Recuerde que nuestro itinerario es flexible y podemos incluir otros sitios como la Estatua del Rey Cristo en Almada en el camino de regreso si llegamos allí antes de la activityTime de cierre."
  },
  {
    "activityName": "Antigua experiencia de fado en Lisboa con Alfama Walking Tour",
    "activityPlace": "Lisboa, Portugal",
    "activityDate": "10 de Diciembre 2023",
    "activityTime": "01:00",
    "activityPrice": 116,
    "activityImg": "https://www.atrapalo.com/ou/static/_next/image/?url=https%3A%2F%2Fcdn.atrapalo.com%2Fcommon%2Fphoto%2Fevent%2F4%2F8%2F7%2F8721%2F1350382%2Ftic_0_0.jpg&w=574&q=75",
    "activityDescription": "Ver un concierto de Fado es una experiencia que debes tener en Portugal. La música de fado es el tipo de música más tradicional de Portugal, con sentimientos nostálgicos y melancólicos en las letras, como saudade y love, acompañados por la guitarra portuguesa. Es una experiencia en uno de los mejores y carismáticos restaurantes del casco antiguo de Lisboa en el antiguo barrio de Alfama para escuchar el espectáculo de Fado con músicos y cantantes profesionales de alta calidad. Ofrecemos un recorrido que incluye recoger y dejar en su alojamiento , un recorrido nocturno que recorre los activityPlacees y puntos de vista más emblemáticos de Lisboa "
  },
  {
    "activityName": "Desde Ciudad Ho Chi Minh: medio día en túneles de Củ Chi",
    "activityPlace": "Ciudad de Ho Chi Minh, Vietnam",
    "activityDate": "16 de Abril 2024",
    "activityTime": "03:00",
    "activityPrice": 13,
    "activityImg": "https://cdn.getyourguide.com/img/tour/63e44ec178601.jpeg/98.jpg",
    "activityDescription": "Descubre los túneles de Cu Chi junto a tu guía informativo. Explora el sistema de túneles subterráneos, pasea por el bosque y prueba suerte en el campo de tiro."
  },
  {
    "activityName": "HCM: Visita a pie al Museo de los Restos de Guerra y al Palacio de la Independencia",
    "activityPlace": "Ciudad de Ho Chi Minh, Vietnam",
    "activityDate": "18 de Abril 2024",
    "activityTime": "07:00",
    "activityPrice": 16,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6434d329e80d5.jpeg/98.jpg",
    "activityDescription": "Aprende sobre la guerra de Vietnam con esta visita guiada a pie al Museo de Restos de Guerra de Ho Chi Minh. Visita los impresionantes interiores del Palacio de la Independencia en este recorrido que incluye la entrada. "
  },
  {
    "activityName": "Saigón: 11 degustaciones de comida y visita turística en moto",
    "activityPlace": "Ciudad de Ho Chi Minh, Vietnam",
    "activityDate": "20 de Abril 2024",
    "activityTime": "02:00",
    "activityPrice": 23,
    "activityImg": "https://cdn.getyourguide.com/img/tour/62ba90f31ebba.jpeg/98.jpg",
    "activityDescription": "Disfruta de un paseo en la parte trasera de la moto y relájate mientras pruebas los mejores platos y bebidas locales y descubres las partes no vistas de Saigón."
  },
  {
    "activityName": "San Petersburgo,  crucero  de 4 activityTimes ",
    "activityPlace": "San Petersburgo, Rusia",
    "activityDate": "14 de Mayo 2024",
    "activityTime": "01:00",
    "activityPrice": 60,
    "activityImg": "https://cdn.getyourguide.com/img/tour/62d6dc2957ec2.jpeg/98.jpg",
    "activityDescription": "Siéntese y relájese en un crucero en catamarán a la apartada isla de Egmont Key. Practique esnórquel, explore el faro histórico y Fort Dade, y tal vez incluso vea un delfín o dos.."
  },
  {
    "activityName": "Acuario marino Clearwater: entrada general sello ecológico",
    "activityPlace": "San Petersburgo, Rusia",
    "activityDate": "15 de Mayo 2024",
    "activityTime": "02:30",
    "activityPrice": 32,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6419f514da2e6.jpeg/98.jpg",
    "activityDescription": "Ve más allá de una experiencia típica en un acuario y descubre un activityPlace dedicado al rescate, rehabilitación y liberación de vida marina. Visita el hogar de delfines rescatados, incluida la fauna marina que aparece en las películas Dolphin Tale."
  },
  {
    "activityName": "Aventura de 2 activityTimes en lancha rápida ",
    "activityPlace": "San Petersburgo, Rusia",
    "activityDate": "17 de Mayo 2024",
    "activityTime": "04:00",
    "activityPrice": 87,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5b2166061a788.jpeg/98.jpg",
    "activityDescription": "Vive la emoción de tu vida en una aventura privada en lancha rápida por la Bahía de Tampa. Conviértete en el capitán de tu propia lancha motora y pasa a toda velocidad por el Parque Fort de Soto y la costa de la Bahía de Tampa para contemplar las bellas vistas de Florida desde una perspectiva única.."
  },
  {
    "activityName": "Budapest: crucero de 1 activityTime con bebida de bienvenida",
    "activityPlace": "Budapest, Hungria",
    "activityDate": "21 de Febrero 2024",
    "activityTime": "11:00",
    "activityPrice": 17,
    "activityImg": "https://cdn.getyourguide.com/img/tour/62e406b1149d2.jpeg/98.jpg",
    "activityDescription": "Contempla las atracciones de Budapest desde el Danubio durante un paseo en barco de 1 activityTime y disfruta de un cóctel de temporada o un refresco. Admira edificios emblemáticos como el castillo de Buda y la sala de conciertos Vigadó."
  },
  {
    "activityName": "Budapest: 1 día en los Baños Széchenyi y pálinka opcional ",
    "activityPlace": "Budapest, Hungria",
    "activityDate": "22 de Febrero 2024",
    "activityTime": "07:00",
    "activityPrice": 37,
    "activityImg": "https://cdn.getyourguide.com/img/tour/523bffd4f0f04.jpeg/98.jpg",
    "activityDescription": "Relájate en Széchenyi, los baños más famosos de Budapest, y disfruta de una degustación de licores pálinka. En este tour opcional también podrás aprender más sobre la historia y la cultura de Hungría."
  },
  {
    "activityName": "Budapest: crucero nocturno y barra libre de Prosecco",
    "activityPlace": "Budapest, Hungria",
    "activityDate": "23 de Febrero 2024",
    "activityTime": "09:00",
    "activityPrice": 34,
    "activityImg": "https://cdn.getyourguide.com/img/tour/64898fae59762.jpeg/98.jpg",
    "activityDescription": "Contempla las inigualables vistas de Budapest en un paseo en barco nocturno por el Danubio. Observa los activityPlacees de interés más importantes de la ciudad mientras tomas copas ilimitadas de Prosecco de gran calidad."
  },
  {
    "activityName": "Desde Marrakech: puesta de sol en el desierto de Agafay, paseo en camello y cena",
    "activityPlace": "Marrakech, Marruecos",
    "activityDate": "7 de Febrero 2024",
    "activityTime": "09:00",
    "activityPrice": 32,
    "activityImg": "https://cdn.getyourguide.com/img/tour/648ef8de3473c.jpeg/97.jpg",
    "activityDescription": "Saborea una cena mágica en el desierto de Agafay con esta aventura desde Marrakech. Monta en camello por un antiguo sendero bereber, contempla la puesta de sol y relájate con cena y entretenimiento en un campamento del desierto."
  },
  {
    "activityName": "Desde Marrakech: safari 3 días desierto Merzouga con comida",
    "activityPlace": "Marrakech, Marruecos",
    "activityDate": "8 de Febrero 2024",
    "activityTime": "07:00",
    "activityPrice": 120,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5c094205367a4.jpeg/98.jpg",
    "activityDescription": "Disfruta del desierto del Sahara marroquí en un safari de 3 días desde Marrakech a Merzouga. Duerme en un campamento beduino en las dunas de Erg Chebbi. Pasea en camello para ver la puesta de sol y el amanecer. Visita la kasbah de Uarzazate y más."
  },
  {
    "activityName": "Marrakech: Excursión en quad o camello por el desierto de Agafay con cena-espectáculo",
    "activityPlace": "Marrakech, Marruecos",
    "activityDate": "10 de Febrero 2024",
    "activityTime": "09:30",
    "activityPrice": 33,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6492f387b9217.jpeg/98.jpg",
    "activityDescription": "Pasa la tarde y la noche en el desierto de Marrakech en un safari guiado con transporte de ida y vuelta y una cena local. Atraviesa el desierto en quad o contempla la puesta de sol a lomos de un camello."
  },
  {
    "activityName": "Desde Cuzco: tour en grupo de 1 día de Machu Picchu",
    "activityPlace": "Cuzco,Perú",
    "activityDate": "19 de Marzo 2024",
    "activityTime": "06:30",
    "activityPrice": 292,
    "activityImg": "https://cdn.getyourguide.com/img/tour/6182c6341ce7c.jpeg/98.jpg",
    "activityDescription": "Experimente Machu Picchu con un guía local en este tour grupal desde Cusco. Descubre el misticismo y la magia de esta maravilla mundial."
  },
  {
    "activityName": "Cuzco: tour por la montaña Arcoíris con comidas",
    "activityPlace": "Cuzco,Perú",
    "activityDate": "20 de Marzo 2024",
    "activityTime": "07:00",
    "activityPrice": 25,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5e18ddb4b0cf1.jpeg/98.jpg",
    "activityDescription": "Haz senderismo en la montaña Arcoíris y contempla los coloridos paisajes que rodean el Nevado Ausangate en este tour guiado de un día. Admira las increíbles tonalidades de la montaña y haz fotos para toda la vida."
  },
  {
    "activityName": "Desde Cuzco: tour en quad por Moray y las minas de sal",
    "activityPlace": "Cuzco,Perú",
    "activityDate": "21 de Marzo 2024",
    "activityTime": "09:00",
    "activityPrice": 35,
    "activityImg": "https://cdn.getyourguide.com/img/tour/5d187b16a1c83.jpeg/98.jpg",
    "activityDescription": "Únete a esta aventura en quad por el Valle Sagrado de los incas. Visita dos de los sitios más importantes de la zona: Moray, el laboratorio agrícola de los incas, y las minas de sal de Maras."
  }

      // {
      //   fruitName: 'pera de conferencia',
      //   type: 'semidulce',
      //   priceKg: 1.50,
      //   origin: 'Holanda',
      // },


    ];

mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allActivities = await Activity.find();
    if(allActivities.length > 0){
        await Activity.collection.drop();
        console.log("Actividades borradas");
    }
})
.catch((error) => console.log("Error borrando actividades"))
.then(async() => {
    const activitiesMap = arrayActivities.map(activity => new Activity(activity));
    await Activity.insertMany(activitiesMap);
    console.log("Actividades insertadas");
})
.catch((error) => console.log(`Error insertando actividades: ${error}`))
.finally(() => mongoose.disconnect());



