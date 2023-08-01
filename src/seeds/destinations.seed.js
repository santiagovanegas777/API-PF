
mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const Destination = require("../api/models/destination.model.js");



const arrayDestinations = [
  {
    "destinationPlace": "París, Francia",
    "destinationDate": "Desde el 9 al 17 de Octubre 2023",
    "destinationPrice": 1500,
    "destinationDescription": "¿Te imaginas paseando por las icónicas calles de París, explorando sus monumentos históricos, deleitándote con su deliciosa gastronomía y sumergiéndote en su fascinante cultura? ¡Es hora de que tu sueño se haga realidad! Nuestro paquete turístico a París ha sido meticulosamente diseñado para ofrecerte una experiencia inolvidable, llena de momentos mágicos y recuerdos imborrables.",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
        {
            "hotelName": "Elegance Palace",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Centro histórico de París"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689979140/Destinos/paris_37bc088a_1280x720_jwmj2l.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689979140/Destinos/87c891d0-7f75-11e8-b6b0-0242ac110007_aj43is.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689979140/Destinos/a60c7ed4-cc5d-478e-98fa-0c4210ed2908_n7vqho.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689979140/Destinos/948ecba9-2af5-4b9c-876f-9c51bb46043b_xfo3qd.webp"
      ]
},

{
    "destinationPlace": "Nueva York, Estados Unidos",
    "destinationDate": "Desde el 14 al 22 de Agosto 2023",
    "destinationPrice": 2500,
    "destinationDescription": "¡Bienvenido a la ciudad que nunca duerme! Nuestro paquete turístico te invita a sumergirte en la energía inigualable de Nueva York, donde cada rincón es una experiencia única. Descubre los icónicos rascacielos de Manhattan que dominan el horizonte, vive el bullicio de Times Square, saborea la deliciosa fusión de sabores internacionales en sus restaurantes y déjate cautivar por el arte y la cultura en sus famosos museos y teatros de Broadway. Nueva York es un crisol de culturas y una metrópolis que nunca deja de sorprender. ¡Prepárate para una aventura inolvidable en la Gran Manzana!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
        {
          "hotelName": "Central Park View",
          "hotelCategory": "5 estrellas",
          "hotelLocation": "Central Park, Manhattan"
        },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689981875/Destinos/Estatua-de-la-Libertad_n2s3n0.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689981876/Destinos/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu__cropped_rr8mts.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689981885/Destinos/nycpc-nyc-skyline-1440x720_vqh4p9.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689981885/Destinos/central-park_tirfaq.webp"
      ]
},

{
    "destinationPlace": "Tokio, Japón",
    "destinationDate": "Desde el 12 al 19 de Febrero 2024",
    "destinationPrice": 3500,
    "destinationDescription": "¡Bienvenido a la fascinante metrópolis de Tokio! Nuestro paquete turístico te llevará a descubrir la perfecta combinación de tradición y modernidad en esta vibrante ciudad japonesa. Sumérgete en la cultura milenaria del país del sol naciente mientras te maravillas con los impresionantes templos y jardines zen. A la vez, déjate envolver por la alta tecnología y la moda futurista de los distritos de Akihabara y Shibuya. Deléitate con la deliciosa gastronomía japonesa, desde el sushi tradicional hasta los sabores únicos de los izakayas locales. ¡Tokio es un paraíso para los amantes de la cultura y la aventura! Prepárate para vivir momentos inolvidables en esta ciudad llena de contrastes y sorpresas.",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Tokyo Tower View",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Torre de Tokio, Tokio"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689982396/Destinos/tokyo-4358758_1280_lnqzqz.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689982310/Destinos/91683_yho0zq.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689982301/Destinos/Por-que%CC%81-Tokio-es-una-de-las-ciudades-ma%CC%81s-sorprendentes_zjlk6o.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689982298/Destinos/giappone-tokyo-tempio-panorama_mi57ju.jpg"
      ]
},

{
    "destinationPlace": "Londres, Reino Unido",
    "destinationDate": "Desde el 2 al 8 de Octubre 2023",
    "destinationPrice": 1600,
    "destinationDescription": "¡Bienvenido a la majestuosa ciudad de Londres! Nuestro paquete turístico te llevará a explorar la rica historia y la emocionante modernidad de la capital británica. Descubre los emblemáticos monumentos de la ciudad, desde el imponente Palacio de Buckingham hasta la icónica Torre de Londres. Pasea por las elegantes calles de Covent Garden y admira las luces nocturnas del Puente de la Torre. Sumérgete en el ambiente cultural de los famosos museos y teatros de West End. Disfruta de la deliciosa cocina británica en acogedores pubs y restaurantes. Londres es una ciudad llena de encanto y diversidad que te cautivará en cada esquina. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que combina tradición y modernidad a la perfección!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Covent Garden Boutique",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Covent Garden, Londres"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689983425/Destinos/descarga_1_csmoa6.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689983416/Destinos/tour-londres-antiguo-589x392_t5d6el.avif",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689983409/Destinos/x73083398_A-red-London-double-decker-bus-passes-the-London-Eye-as-it-is-driven-over-Westminster-B.jpg.pagespeed.ic_.WFyTInMTZk_cp2oai.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689983405/Destinos/caption_h3ee6w.jpg"
      ]
},

{
    "destinationPlace": "Roma, Italia",
    "destinationDate": "Desde el 24 al 31 de Agosto 2023",
    "destinationPrice": 1400,
    "destinationDescription": "¡Bienvenido a la Ciudad Eterna! Nuestro paquete turístico te llevará a descubrir los tesoros históricos y culturales de Roma, una ciudad que respira historia en cada callejón. Maravíllate con los majestuosos monumentos romanos, como el Coliseo y el Panteón, que atestiguan la grandeza del pasado imperial. Admira las obras maestras del arte en los museos del Vaticano y explora la majestuosidad de la Basílica de San Pedro. Deléitate con la deliciosa gastronomía italiana, desde auténticas pizzas hasta exquisitos platos de pasta. Roma es un tesoro de emociones y experiencias que te llevará en un viaje en el tiempo. ¡Prepárate para sumergirte en la magia de esta ciudad única en el mundo!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Vatican View Hotel",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Vaticano, Roma"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689983729/Destinos/5e89ad90-8f10-11e8-b6b0-0242ac110007_kjkjti.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689983735/Destinos/fontana-di-trevi-roma-unsplash_sy7fkt.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689983740/Destinos/elle-fin-de-semana-en-roma-1642526556_z3f3vy.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689983745/Destinos/Roma-en-3-di%CC%81as_l3bb7f.jpg"
      ]
},

{
    "destinationPlace": "Barcelona, España",
    "destinationDate": "Desde el 11 al 18 de Marzo 2024",
    "destinationPrice": 1100,
    "destinationDescription": "¡Bienvenido a la vibrante ciudad de Barcelona! Nuestro paquete turístico te invita a descubrir la combinación única de historia, arte y estilo de vida mediterráneo que ofrece esta maravillosa ciudad. Recorre las icónicas obras del arquitecto Gaudí, como la Sagrada Familia y el Parque Güell, que te dejarán sin aliento con su belleza y originalidad. Sumérgete en la animada cultura catalana paseando por las animadas Ramblas y el encantador Barrio Gótico. Disfruta de la deliciosa gastronomía española, desde las tapas tradicionales hasta la paella en restaurantes locales. Barcelona te ofrece una experiencia única que combina la historia con la modernidad, el mar y la montaña. ¡Prepárate para enamorarte de esta ciudad llena de color y encanto!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Beachfront Paradise",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Frente al mar, Barcelona"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689984138/Destinos/GettyImages-1392907424_mjgcvf.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689984131/Destinos/barcelona-29506_pvhypi.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689984126/Destinos/park-guell-barcelona-s-305364611_eqwufm.avif",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689984121/Destinos/GettyRF_519706257_l8pt6t.jpg"
      ]
},

{
    "destinationPlace": "Sídney, Australia",
    "destinationDate": "Desde el 10 al 17 de Junio 2024",
    "destinationPrice": 2900,
    "destinationDescription": "¡Bienvenido a la espectacular ciudad de Sídney! Nuestro paquete turístico te llevará a descubrir la belleza natural y el encanto urbano de esta icónica ciudad australiana. Contempla la famosa Ópera de Sídney y el majestuoso Puente del Puerto, dos de los símbolos más emblemáticos de la ciudad. Explora las hermosas playas de arena dorada, como Bondi Beach, donde podrás relajarte y disfrutar del sol y el mar. Sumérgete en la fascinante cultura aborigen australiana en el Museo de Arte Contemporáneo. Disfruta de la deliciosa gastronomía local, desde el marisco fresco hasta las especialidades internacionales en los restaurantes de clase mundial. Sídney es una ciudad moderna y vibrante que te cautivará con su energía y paisajes asombrosos. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad costera única!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Beachfront Retreat",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Frente a la playa de Bondi, Sídney"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689984715/Destinos/que-hacer-sidney-6_yar4tu.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689984711/Destinos/cual-es-la-mejor-epoca-para-viajar-a-sidney_ylxdzp.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689984708/Destinos/George_street_in_Sydney_Australia_k5ci79.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689984704/Destinos/Playa-Bondi-Beach-1024x576_nrdyzn.jpg"
      ]
},

{
    "destinationPlace": "Río de Janeiro, Brasil",
    "destinationDate": "Desde el 22 al 30 de Enero 2024",
    "destinationPrice": 1600,
    "destinationDescription": "¡Bienvenido a la maravillosa ciudad de Río de Janeiro! Nuestro paquete turístico te invita a descubrir la belleza natural y el espíritu festivo de esta icónica ciudad brasileña. Contempla las impresionantes vistas desde el Cristo Redentor en la cima del Corcovado y visita el emblemático Pan de Azúcar para disfrutar de panorámicas espectaculares. Relájate en las famosas playas de Copacabana e Ipanema, donde podrás sumergirte en el ambiente carioca y disfrutar del sol y el mar. Disfruta de la animada música y danza en las calles y experimenta la samba en los tradicionales bares. Siente la pasión del Carnaval en cada rincón de la ciudad. Río de Janeiro es una ciudad que combina naturaleza, cultura y alegría de vivir. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad vibrante y llena de color!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
        {
            "hotelName": "Copacabana Beach Resort",
            "hotelCategory": "4 estrellas",
            "hotelLocation": "Frente a la playa de Copacabana, Río de Janeiro"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689985096/Destinos/panoramica-rio-janeiro-brasil_jqw4pe.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689985104/Destinos/Teatro_Municipal_-_panoramio__4_rfgyzl.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689985110/Destinos/75_oz7suz.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689985116/Destinos/GettyImages-488575011_hlir3h.webp"
      ]
},

{
    "destinationPlace": "Ciudad del Cabo, Sudáfrica",
    "destinationDate": "Desde el 16 al 25 de Octubre 2023",
    "destinationPrice": 2000,
    "destinationDescription": "¡Bienvenido a la deslumbrante Ciudad del Cabo! Nuestro paquete turístico te llevará a descubrir la belleza natural y la rica diversidad cultural de esta fascinante ciudad sudafricana. Contempla la majestuosidad de la Montaña de la Mesa, un icono natural que domina el horizonte, y disfruta de las impresionantes vistas desde su cima. Explora la Península del Cabo, donde el océano y la tierra se encuentran en un espectáculo de acantilados y playas vírgenes. Sumérgete en la historia de Robben Island, una antigua prisión que hoy es Patrimonio de la Humanidad. Descubre la animada escena artística y gastronómica en los coloridos barrios de Woodstock y Bo-Kaap. Ciudad del Cabo es un destino único que combina naturaleza, aventura y cultura. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad cautivadora y llena de contrastes!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Oceanfront Retreat",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Frente al mar, Ciudad del Cabo"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689985702/Destinos/Cape-Town_gtg5cp.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689985706/Destinos/beach-sea-coast-ocean-bird-penguin-838124-pxhere.com_-scaled_lrxuub.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689985712/Destinos/760px-Mapcarta_zkqtcc.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689985720/Destinos/tour-ciudad-cabo-montana-mesa-589x392_cogslx.avif"
      ]
},

{
    "destinationPlace": "Vancouver, Canadá",
    "destinationDate": "Desde el 8 al 17 de Abril 2024",
    "destinationPrice": 2700,
    "destinationDescription": "¡Bienvenido a la espectacular ciudad de Vancouver! Nuestro paquete turístico te invita a descubrir la impresionante belleza natural y la emocionante vida urbana que ofrece esta ciudad canadiense. Disfruta de las magníficas vistas de las Montañas Rocosas y el océano Pacífico que rodean la ciudad. Explora el famoso Parque Stanley, un oasis de vegetación en medio de la urbe, perfecto para relajarse y hacer senderismo. Descubre la animada escena cultural en el barrio de Gastown, donde la historia se mezcla con la modernidad. Deléitate con la variada gastronomía local, desde los famosos mariscos hasta las deliciosas comidas internacionales. Vancouver es una ciudad vibrante y llena de actividades para todos los gustos. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que combina naturaleza y cosmopolitismo con un encanto único!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
        {
            "hotelName": "Mountain View Lodge",
            "hotelCategory": "4 estrellas",
            "hotelLocation": "Frente a las Montañas Rocosas, Vancouver"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689986038/Destinos/vista-panoramica-vancouver_kjci52.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689986043/Destinos/vancouver-canada_fyd0or.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689986049/Destinos/216226-British-Columbia_s2kfzq.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689986053/Destinos/Stanley_Park_Destination_Vancouver_Kazutoshi_Yoshimura_87768_PowerPoint_2000px_r7l7sp.webp"
      ]
},

{
    "destinationPlace": "Estambul, Turquía",
    "destinationDate": "Desde el 14 al 24 de Agosto 2023",
    "destinationPrice": 1500,
    "destinationDescription": "¡Bienvenido a la mágica ciudad de Estambul! Nuestro paquete turístico te llevará a descubrir la fascinante historia y la rica cultura de esta ciudad transcontinental. Admira la majestuosidad de la antigua Basílica de Santa Sofía y la esplendorosa Mezquita Azul, símbolos icónicos de la ciudad. Pasea por el Gran Bazar, donde podrás sumergirte en la tradición de los mercados orientales y encontrar tesoros únicos. Descubre la mística atmósfera del Palacio Topkapi y el encanto del Palacio de Dolmabahçe. Saborea los deliciosos manjares turcos, como el kebab y los baklavas, en los auténticos restaurantes locales. Estambul es una ciudad que une Europa y Asia, con una mezcla única de culturas y tradiciones. ¡Prepárate para vivir una experiencia inolvidable en esta encantadora ciudad que te cautivará con su belleza y diversidad!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Bosphorus View Resort",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Frente al Bósforo, Estambul"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689986435/Destinos/3bae040b-2afb-4b11-9542-859eeb8ebaf1_wpvfza.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689986443/Destinos/estambul-restauracion-mezquita-azul_eegvvi.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689986443/Destinos/a_U0uvT3r_vw6umw.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689986443/Destinos/RXOWFRUDLVAQ5EJ6VVAANT4WYI_suqmgn.webp"
      ]
},

{
    "destinationPlace": "Buenos Aires, Argentina",
    "destinationDate": "Desde el 4 al 14 de Diciembre 2023",
    "destinationPrice": 1700,
    "destinationDescription": "¡Bienvenido a la apasionante ciudad de Buenos Aires! Nuestro paquete turístico te invita a descubrir la esencia del tango, la rica cultura y la vibrante vida urbana de la capital argentina. Sumérgete en la elegancia y el encanto del barrio de La Boca, con sus casas de colores y su famoso estadio de fútbol. Recorre las amplias avenidas de la ciudad y maravíllate con la arquitectura europea de la Plaza de Mayo y el Obelisco. Disfruta de una cena y espectáculo de tango en uno de los tradicionales locales de San Telmo. Saborea los deliciosos sabores de la gastronomía argentina, desde el asado hasta los exquisitos vinos. Buenos Aires es una ciudad que late al ritmo del tango y te invita a disfrutar de su pasión y cultura. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad llena de vida y emociones!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Recoleta Boutique",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Barrio de Recoleta, Buenos Aires"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987097/Destinos/80ccbd4a-9d52-4b2a-b2b3-e9c254b3447c_alta-libre-aspect-ratio_default_0_etj5fr.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987103/Destinos/EDD567B6-661E-481F-97ACD929AB125ABA_sz1wnl.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987111/Destinos/caminito-1140x675_qjtr8l.png",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987115/Destinos/1133674319_0_512_2730_2048_1920x0_80_0_0_09d945f6aa96192e68149fdd05529875_uhkcre.jpg"
      ]
},

{
    "destinationPlace": "Bangkok, Tailandia",
    "destinationDate": "Desde el 16 al 25 de Noviembre 2023",
    "destinationPrice": 1700,
    "destinationDescription": "¡Bienvenido a la fascinante ciudad de Bangkok! Nuestro paquete turístico te llevará a descubrir la vibrante cultura, los templos exquisitos y la deliciosa gastronomía de la capital tailandesa. Maravíllate con el esplendor del Gran Palacio, un complejo de templos impresionante que refleja la grandeza de la antigua monarquía. Explora los mercados locales y flotantes, donde podrás encontrar productos únicos y saborear auténticas delicias tailandesas. Disfruta del tranquilo ambiente de los templos budistas como el Wat Pho, con su icónico Buda Reclinado. Sumérgete en la animada vida nocturna de Bangkok, desde los bares en azoteas con vistas panorámicas hasta los coloridos espectáculos de cabaret. Bangkok es una ciudad que combina tradición con modernidad y te ofrece una experiencia única en el corazón de Tailandia. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su encanto y exotismo!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
        {
            "hotelName": "Golden Palace Hotel",
            "hotelCategory": "4 estrellas",
            "hotelLocation": "Centro de Bangkok"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987432/Destinos/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa_ivcprr.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987436/Destinos/8236d066-1b7a-4c8b-a58a-08190a9738db_dqctyg.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987440/Destinos/bangkok2_yun7ic.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987441/Destinos/street-bangkok-thailand_16x9_hx1sso.avif"
      ]
},

{
    "destinationPlace": "Ámsterdam, Países Bajos",
    "destinationDate": "Desde el 12 al 22 de Marzo 2024",
    "destinationPrice": 1400,
    "destinationDescription": "¡Bienvenido a la encantadora ciudad de Ámsterdam! Nuestro paquete turístico te invita a descubrir los hermosos canales, la rica historia y la vibrante cultura de la capital de los Países Bajos. Recorre los icónicos canales en un paseo en barco y admira las pintorescas casas y puentes que adornan la ciudad. Visita el famoso Museo Van Gogh y maravíllate con las obras maestras de uno de los pintores más influyentes de la historia del arte. Explora la animada Plaza Dam y el Barrio Rojo, conocidos por su bullicio y atmósfera única. Disfruta de los sabores locales en los acogedores cafés y prueba los famosos quesos holandeses. Ámsterdam es una ciudad que combina encanto, cultura y una actitud relajada hacia la vida. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su belleza y autenticidad!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
        {
            "hotelName": "Canal View Hotel",
            "hotelCategory": "4 estrellas",
            "hotelLocation": "Frente a los canales de Ámsterdam"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987654/Destinos/amsterdam-canales-puentes-hd_uym3b7.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987654/Destinos/amsterdam-paises-bajos_m51bmf.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987653/Destinos/zona-roja-amsterdam_zehch6.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987653/Destinos/d77bcff2-a859-4785-bdb1-3b15a0887607_upqctr.webp"
      ]
},

{
    "destinationPlace": "Berlín, Alemania",
    "destinationDate": "Desde el 13 al 22 de Mayo 2024",
    "destinationPrice": 1500,
    "destinationDescription": "¡Bienvenido a la emocionante ciudad de Berlín! Nuestro paquete turístico te llevará a descubrir la historia, la cultura y el arte que hacen de esta ciudad alemana un destino fascinante. Explora los vestigios del Muro de Berlín y el Checkpoint Charlie, símbolos de la Guerra Fría y la división de la ciudad. Visita los famosos museos de la Isla de los Museos, donde encontrarás una impresionante colección de arte y objetos históricos. Maravíllate con la arquitectura moderna y la animada vida urbana de Alexanderplatz y Potsdamer Platz. Saborea las delicias culinarias alemanas, desde las salchichas hasta los pretzels, en los tradicionales biergartens y restaurantes locales. Berlín es una ciudad que combina historia con creatividad y te sorprenderá con su ambiente cosmopolita. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad vibrante y llena de contrastes!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Modern Art Resort",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Potsdamer Platz, Berlín"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987964/Destinos/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities_wnbviv.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987964/Destinos/shutterstock-302415089_6b607cdb_auh9mj.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987968/Destinos/571ba00b-11cd-4a54-9f2a-5b38da2bc89e_wazlox.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689987969/Destinos/8b1efec5-edde-474d-ad26-3b6dfa093030_gd4pls.jpg"
      ]
},

{
    "destinationPlace": "Praga, República Checa",
    "destinationDate": "Desde el 15 al 23 de Enero 2024",
    "destinationPrice": 1300,
    "destinationDescription": "¡Bienvenido a la encantadora ciudad de Praga! Nuestro paquete turístico te invita a descubrir la rica historia, la arquitectura impresionante y la atmósfera romántica de la capital checa. Recorre el famoso Puente de Carlos, una joya gótica que cruza el río Moldava y te ofrece vistas panorámicas de la ciudad. Explora el Castillo de Praga, uno de los más grandes del mundo, y maravíllate con sus magníficas catedrales y palacios. Pasea por el Barrio Judío, donde encontrarás una fascinante historia y una vibrante escena artística. Disfruta de la deliciosa cerveza checa y los platos tradicionales en los acogedores restaurantes locales. Praga es una ciudad llena de encanto y magia que te transportará a la época medieval. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su belleza y romanticismo!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Riverside Romance",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "A orillas del río Moldava, Praga"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689988491/Destinos/praga_838db84b_230302140436_1200x630_vlzhal.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689988491/Destinos/98_w5k1wb.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689988492/Destinos/122830-Astronomical-Clock-Prague-Orloj-Prazsky-Orloj_yx1fne.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689988491/Destinos/praga_fng80g.webp"
      ]
},

{
    "destinationPlace": "Copenhague, Dinamarca",
    "destinationDate": "Desde el 6 al 13 de Noviembre 2023",
    "destinationPrice": 1600,
    "destinationDescription": "¡Bienvenido a la encantadora ciudad de Praga! Nuestro paquete turístico te invita a descubrir la rica historia, la arquitectura impresionante y la atmósfera romántica de la capital checa. Recorre el famoso Puente de Carlos, una joya gótica que cruza el río Moldava y te ofrece vistas panorámicas de la ciudad. Explora el Castillo de Praga, uno de los más grandes del mundo, y maravíllate con sus magníficas catedrales y palacios. Pasea por el Barrio Judío, donde encontrarás una fascinante historia y una vibrante escena artística. Disfruta de la deliciosa cerveza checa y los platos tradicionales en los acogedores restaurantes locales. Praga es una ciudad llena de encanto y magia que te transportará a la época medieval. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su belleza y romanticismo!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
        {
            "hotelName": "Scandinavian Design Hotel",
            "hotelCategory": "4 estrellas",
            "hotelLocation": "Centro de Copenhague"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989027/Destinos/f.elconfidencial.com_original_036_cf6_706_036cf6706198f8ac3e0fbeb0a759e020_lre0xb.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989027/Destinos/la-sirenita-de-copenhagen_dfxl4z.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989027/Destinos/Str%C3%B8get_Erik_Hageman_ztklvi.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989027/Destinos/GettyImages-599005948_qdcs6y.webp"
      ]
},

{
    "destinationPlace": "Hong Kong, China",
    "destinationDate": "Desde el 20 al 29 de Agosto 2023",
    "destinationPrice": 1800,
    "destinationDescription": "¡Bienvenido a la emocionante ciudad de Hong Kong! Nuestro paquete turístico te invita a descubrir la vibrante metrópolis, la fusión de culturas y la impresionante arquitectura de esta ciudad asiática. Admira el icónico horizonte de rascacielos y cruza el famoso puerto de Victoria en el Star Ferry, una experiencia imperdible. Explora el animado distrito de Tsim Sha Tsui, conocido por su bulliciosa vida nocturna y sus tiendas de lujo. Descubre la rica cultura china y la herencia británica en los templos y edificios coloniales. Saborea la exquisita gastronomía de Hong Kong, desde los dim sum hasta los platos de mariscos frescos en los mercados locales. Hong Kong es una ciudad llena de energía y diversidad que te dejará asombrado. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que nunca duerme!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
        {
            "hotelName": "Skyline View Hotel",
            "hotelCategory": "4 estrellas",
            "hotelLocation": "Centro de Hong Kong"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989338/Destinos/61600f039c816.r_d.1046-727-5764_gfbkvd.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989338/Destinos/Hong-Kong-2_4_m5gufa.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989342/Destinos/hongkong-main-data_qcacdw.avif",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989344/Destinos/US_HongKong_HK_Header_kqtayb.jpg"
      ]
},

{
    "destinationPlace": "Singapur, República de Singapur",
    "destinationDate": "Desde el 17 al 27 de Junio 2024",
    "destinationPrice": 1900,
    "destinationDescription": "¡Bienvenido a la asombrosa ciudad de Singapur! Nuestro paquete turístico te llevará a descubrir la modernidad, la riqueza cultural y la fusión de tradiciones en esta ciudad-estado del sudeste asiático. Maravíllate con la majestuosidad de los rascacielos en Marina Bay Sands y disfruta de la vista panorámica desde su famosa piscina en la azotea. Explora los coloridos barrios étnicos de Chinatown, Little India y Kampong Glam, cada uno con su propia identidad y encanto. Descubre los jardines botánicos de Singapur, Patrimonio de la Humanidad, y relájate en el Jardín de la Bahía con sus impresionantes estructuras futuristas. Saborea la deliciosa gastronomía de Singapur, que incluye platos chinos, malayos, indios y peranakanos. Singapur es una ciudad cosmopolita y multicultural que te dejará maravillado. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que combina lo mejor de Oriente y Occidente!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Gardens Oasis Resort",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Frente a los Jardines de la Bahía, Singapur"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989632/Destinos/_104161841_singapore_ssparklingbusinessdistrictfoundingfatherleekuanyewkickedoffthekeepsingaporecleancampaignfiftyyearsagoinoctober2018-creditgettyimages_xuc87d.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989632/Destinos/donde-alojarse-en-singapur.jpg_ywti8f.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989633/Destinos/hotel-marina-bay-sands-singapur_98_m9nf2d.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989633/Destinos/IG24T2CIR7KON6ZZM4GYHJIAOM_m9mo8i.avif"
      ]
},

{
    "destinationPlace": "Ciudad de México, México",
    "destinationDate": "Desde el 4 al 14 de Marzo 2024",
    "destinationPrice": 1200,
    "destinationDescription": "¡Bienvenido a la fascinante Ciudad de México! Nuestro paquete turístico te invita a descubrir la rica historia, la cultura vibrante y la gastronomía deliciosa de la capital mexicana. Admira los imponentes monumentos en la Plaza de la Constitución, conocida como Zócalo, y visita la majestuosa Catedral Metropolitana. Explora las antiguas pirámides de Teotihuacán y maravíllate con la grandeza de la civilización prehispánica. Sumérgete en el colorido barrio de Coyoacán, conocido por su ambiente bohemio y calles empedradas. Saborea la deliciosa comida mexicana, desde tacos hasta mole, en los tradicionales mercados y restaurantes locales. Ciudad de México es una metrópolis llena de vida y contrastes que te dejará asombrado. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que es un crisol de culturas y tradiciones!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Aztec Culture Resort",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Frente a las Pirámides de Teotihuacán"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989932/Destinos/CiudadMexico_e2khlh.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989932/Destinos/San-Miguel-de-Allende-in-Guanajuato_fxhri4.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989932/Destinos/GettyRF_508879694_ebjguz.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689989932/Destinos/WQ7ENFIBOVDEZELPNFMRPIRNNI_fn6eqs.avif"
      ]
},

{
    "destinationPlace": "Dubái, Emiratos Árabes Unidos",
    "destinationDate": "Desde el 15 al 25 de Enero 2024",
    "destinationPrice": 2200,
    "destinationDescription": "¡Bienvenido a la espectacular ciudad de Dubái! Nuestro paquete turístico te invita a descubrir la opulencia, la modernidad y el lujo de esta metrópolis en medio del desierto. Maravíllate con los icónicos rascacielos que adornan el horizonte, incluyendo el Burj Khalifa, el edificio más alto del mundo. Disfruta de emocionantes actividades, como un paseo en camello por las dunas del desierto y una cena bajo las estrellas en un campamento beduino. Visita el Burj Al Arab, uno de los hoteles más lujosos del mundo, y déjate sorprender por su diseño extravagante. Descubre los zocos tradicionales y los modernos centros comerciales, donde podrás encontrar desde especias hasta productos de alta gama. Saborea la deliciosa gastronomía de Dubái, que ofrece platos de todo el mundo preparados por chefs internacionales. Dubái es una ciudad de contrastes, donde lo antiguo se mezcla con lo moderno en un entorno de lujo y elegancia. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad de ensueño que nunca deja de sorprender!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Skyscraper View Hotel",
            "hotelCategory": "4 estrellas",
            "hotelLocation": "Centro de Dubái"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990185/Destinos/dubai-skyline-at-dusk-jpg_header-144981_qy445u.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990185/Destinos/gettyimages-1225427289-1-1674411305_lp3hde.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990191/Destinos/destacada-vivir-trabajar-dubai_ydhotk.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990191/Destinos/mapa-de-dubai_wkjfma.jpg"
      ]
},

{
    "destinationPlace": "Auckland, Nueva Zelanda",
    "destinationDate": "Desde el 20 al 30 de Diciembre 2024",
    "destinationPrice": 2000,
    "destinationDescription": "¡Bienvenido a la impresionante ciudad de Auckland! Nuestro paquete turístico te llevará a descubrir la belleza natural, la cultura maorí y la aventura en esta vibrante ciudad de Nueva Zelanda. Explora la famosa Sky Tower y disfruta de las impresionantes vistas panorámicas de la ciudad y el puerto. Descubre la cultura maorí en el Museo de Auckland y sumérgete en la rica historia de la región. Maravíllate con la belleza de la región de Northland, conocida por sus playas, bosques y paisajes impresionantes. Disfruta de actividades al aire libre, como senderismo, kayak y avistamiento de ballenas. Saborea la deliciosa gastronomía de Auckland, que ofrece una combinación de sabores locales e internacionales. Auckland es una ciudad que ofrece una mezcla única de naturaleza, aventura y cultura. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su encanto y diversidad!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Harborfront View Hotel",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Frente al puerto de Auckland"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990552/Destinos/Experiencias-GrowPro-en-Auckland_zcdenm.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990552/Destinos/mount-maunganui-nueva-zelanda_oezu2r.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990553/Destinos/queen-street_ab0zxv.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990572/Destinos/c7c3ce7c816c5fa3d3ffe6c904bb6834_giymoq.jpg"
      ]
},

{
    "destinationPlace": "Estocolmo, Suecia",
    "destinationDate": "Desde el 6 al 13 de Mayo 2024",
    "destinationPrice": 1800,
    "destinationDescription": "¡Bienvenido a la hermosa ciudad de Estocolmo! Nuestro paquete turístico te invita a descubrir la elegancia, la historia y la cultura escandinava en la capital sueca. Explora la Ciudad Vieja (Gamla Stan) con sus calles adoquinadas y edificios de colores, y visita el Palacio Real, residencia oficial de la familia real sueca. Pasea por los hermosos parques y jardines, como el Parque Djurgården, y visita el impresionante Museo Vasa para ver el buque de guerra del siglo XVII, Vasa. Disfruta de un relajante paseo en barco por los canales y el archipiélago de Estocolmo. Saborea la deliciosa gastronomía sueca, que incluye platos como el salmón y las albóndigas suecas. Estocolmo es una ciudad llena de encanto y estilo escandinavo, con una combinación única de lo antiguo y lo moderno. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te enamorará con su belleza y elegancia!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Waterfront Charm Resort",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Frente al agua, Estocolmo"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990930/Destinos/a0fe0b3e-1469-412a-a45e-276f65e77702_mmpka3.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990937/Destinos/123058_zg8yn2.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990942/Destinos/98_1_vbufxu.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689990948/Destinos/estocolmo-suecia-14-noviembre-2016-panorama-invierno-escenico-ciudad-vieja-gamla-stan-1980-oficialmente-staden-mellan-broarna-ciudad-puentes-es-casco-antiguo-estocolmo-suecia_173948-5517_epuzrc.avif"
      ]
},

{
    "destinationPlace": "Seúl, Corea del Sur",
    "destinationDate": "Desde el 14 al 24 de Noviembre 2023",
    "destinationPrice": 1700,
    "destinationDescription": "¡Bienvenido a la vibrante ciudad de Seúl! Nuestro paquete turístico te invita a descubrir la rica cultura, la tecnología moderna y la deliciosa gastronomía de la capital surcoreana. Explora los palacios históricos, como Gyeongbokgung y Changdeokgung, y sumérgete en la fascinante historia de la dinastía Joseon. Visita el colorido mercado de Gwangjang, donde podrás probar platos tradicionales coreanos y comprar souvenirs únicos. Maravíllate con la modernidad de Dongdaemun Design Plaza y disfruta de las compras en los famosos distritos comerciales de Myeongdong y Insadong. Descubre la belleza natural del Monte Namsan y el Río Han. Saborea la deliciosa comida coreana, como el bulgogi y el kimchi, en los restaurantes locales y puestos callejeros. Seúl es una ciudad de contrastes que combina lo antiguo con lo moderno, y te ofrecerá una experiencia única que nunca olvidarás. ¡Prepárate para vivir una emocionante aventura en esta metrópolis asiática que te deslumbrará con su energía y encanto!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
        {
            "hotelName": "Modern City Hotel",
            "hotelCategory": "4 estrellas",
            "hotelLocation": "Centro de Seúl"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991230/Destinos/8e3nomYe_vbbtdc.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991218/Destinos/DSC02074_750x563_tpzinj.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991237/Destinos/Lugares-que-visitar-en-Seul-Corea-del-Sur_kubrqb.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991242/Destinos/autumn-in-gyeongbokgung-palace-seoul-in-south-korea-1_ffrmeg.webp"
      ]
},

{
    "destinationPlace": "Lisboa, Portugal",
    "destinationDate": "Desde el 4 al 11 de Diciembre 2023",
    "destinationPrice": 1500,
    "destinationDescription": "¡Bienvenido a la encantadora ciudad de Lisboa! Nuestro paquete turístico te invita a descubrir la historia, la cultura y la belleza de la capital portuguesa. Explora las estrechas calles empedradas del barrio de Alfama y admira las impresionantes vistas desde el Castillo de San Jorge. Pasea por la Plaza del Comercio y descubre la arquitectura manuelina en el Monasterio de los Jerónimos. Maravíllate con el icónico Puente 25 de Abril y disfruta de un paseo en el famoso tranvía 28 que recorre los puntos más destacados de la ciudad. Descubre la vida nocturna en el Barrio Alto y relájate en las playas cercanas de Cascais y Estoril. Saborea la deliciosa gastronomía portuguesa, que incluye platos como el bacalao y los pasteles de Belém. Lisboa es una ciudad llena de encanto, historia y vistas panorámicas que te enamorará desde el primer momento. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su atmósfera única y su carácter acogedor!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
        {
            "hotelName": "Historic City Center Hotel",
            "hotelCategory": "4 estrellas",
            "hotelLocation": "Centro de Lisboa"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991536/Destinos/lisbon_header-4117128_z5u8vp.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991543/Destinos/lisboa-1617630975_bh5j77.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991549/Destinos/lisboa-barrio-alfama-t.jpg_t2swrd.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991690/Destinos/lisboa-puente-entre-continentes-donde-confluyen-tradicion-y-vanguardia-2022-02-04-lisboa-puente-entre-continentes-donde-confluyen-tradicion-y-vanguardia-9_cmlzn9.jpg"
      ]
},

{
    "destinationPlace": "Ho Chi Minh, Vietnam",
    "destinationDate": "Desde el 15 al 25 de Abril 2024",
    "destinationPrice": 1600,
    "destinationDescription": "¡Bienvenido a la emocionante ciudad de Ho Chi Minh! Nuestro paquete turístico te invita a descubrir la rica historia, la cultura vibrante y la deliciosa gastronomía del sur de Vietnam. Explora los fascinantes túneles de Cu Chi, utilizados durante la Guerra de Vietnam, y maravíllate con la arquitectura colonial francesa en la Oficina Central de Correos y la Catedral de Notre-Dame. Pasea por el animado Mercado Ben Thanh y saborea los sabores auténticos en los puestos callejeros de comida. Descubre los paisajes rurales y las aldeas tradicionales del delta del Mekong, donde podrás navegar en bote y conocer la vida local. Saborea la auténtica comida vietnamita, desde los pho hasta los rollitos de primavera, y disfruta de un café vietnamita en los cafés locales. Ho Chi Minh es una ciudad de contrastes, donde lo antiguo y lo moderno se mezclan en una experiencia única de la cultura vietnamita. ¡Prepárate para vivir una aventura inolvidable en esta ciudad llena de historia y encanto!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Riverfront View Resort",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Frente al río Saigón, Ho Chi Minh"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991913/Destinos/ho-chi-minh-city_nyjfna.avif",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991912/Destinos/nightlife-in-ho-chi-minh-city-1_ymxwvg.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991913/Destinos/23b0fb58-f6d8-4c68-89ad-4cc15ac766cb_qxbyb4.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689991913/Destinos/hcmc-1120046774-1_jazbgo.jpg"
      ]
},

{
    "destinationPlace": "San Petersburgo, Rusia",
    "destinationDate": "Desde el 13 al 20 de Mayo 2024",
    "destinationPrice": 1900,
    "destinationDescription": "¡Bienvenido a la majestuosa ciudad de San Petersburgo! Nuestro paquete turístico te invita a descubrir la rica historia, la arquitectura impresionante y el arte inigualable de la antigua capital rusa. Explora los espléndidos palacios, como el Palacio de Invierno y el Palacio de Catalina, y maravíllate con las obras maestras en el Museo del Hermitage, uno de los museos más grandes y prestigiosos del mundo. Pasea por las encantadoras calles adoquinadas del centro histórico y visita la Catedral de San Isaac y la Iglesia del Salvador sobre la Sangre Derramada. Disfruta de un relajante paseo en barco por los canales de la Venecia del Norte. Saborea la deliciosa gastronomía rusa, desde el borsch hasta el caviar, en los elegantes restaurantes y cafés locales. San Petersburgo es una ciudad llena de belleza y cultura, donde el pasado imperial se combina con una atmósfera moderna y artística. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te cautivará con su elegancia y esplendor!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
        {
            "hotelName": "Imperial Palace Hotel",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Centro de San Petersburgo"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992114/Destinos/616d3e95c2d3f.r_d.1065-804-5693_etwf2v.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992107/Destinos/4532331134_jrfiev.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992106/Destinos/rusia_sanpetersburgo_hermitage_shutterstockrf_669812044_maraze_shutterstock_schk99.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992106/Destinos/architecture-3287636_1920-1-1-655x368_fbco4e.jpg"
      ]
},

{
    "destinationPlace": "Budapest, Hungría",
    "destinationDate": "Desde el 20 al 29 de Febrero 2024",
    "destinationPrice": 1700,
    "destinationDescription": "¡Bienvenido a la fascinante ciudad de Budapest! Nuestro paquete turístico te invita a descubrir la historia, la arquitectura impresionante y los relajantes balnearios de la Perla del Danubio. Explora el majestuoso Parlamento Húngaro, el Castillo de Buda y la imponente Basílica de San Esteban. Maravíllate con las vistas panorámicas desde la Colina de Gellért y el Bastión de los Pescadores. Pasea por las elegantes avenidas y los encantadores callejones del centro de la ciudad. Disfruta de un relajante baño en los famosos balnearios termales, como Széchenyi y Gellért, y prueba la gastronomía húngara en los acogedores restaurantes locales. Budapest es una ciudad de contrastes, donde lo antiguo y lo moderno se mezclan en una experiencia única. ¡Prepárate para vivir una aventura inolvidable en esta ciudad que te enamorará con su encanto y su ambiente acogedor!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Riverfront View Resort",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Frente al Danubio, Budapest"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992569/Destinos/que-ver-budapest_dkmkch.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992569/Destinos/BartokBelaBoulevard_exbspa.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992555/Destinos/Budapest-Hotels-1-scaled_ggphtr.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992555/Destinos/ba0d6f79-6fb9-4ad6-bd5e-c277914c6a20_y1ynrb.webp"
      ]
},

{
    "destinationPlace": "Marrakech, Marruecos",
    "destinationDate": "Desde el 5 al 15 de Febrero 2024",
    "destinationPrice": 1800,
    "destinationDescription": "¡Bienvenido a la cautivadora ciudad de Marrakech! Nuestro paquete turístico te invita a sumergirte en los colores, aromas y sabores de esta fascinante ciudad marroquí. Explora la emblemática Plaza Jemaa el-Fna y déjate llevar por la magia de los zocos, donde podrás comprar artesanías, especias y productos locales. Maravíllate con los exquisitos palacios y jardines, como el Palacio Bahía y los Jardines de Majorelle. Pasea por las estrechas callejuelas del Barrio de la Medina y visita la mezquita Koutoubia, un verdadero símbolo de Marrakech. Disfruta de un relajante baño en un auténtico hammam marroquí y prueba los deliciosos platos tradicionales, como el cuscús y el tagine. Marrakech es una ciudad llena de encanto, tradición y hospitalidad que te transportará a un mundo de magia oriental. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te atrapará con su belleza y autenticidad!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Oasis Garden Retreat",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Cerca de los Jardines de Majorelle, Marrakech"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992925/Destinos/que-ver-marrakech-min_vi8syn.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992925/Destinos/90_c3phve.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992925/Destinos/image_j7qvvt.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689992925/Destinos/marrakechportada-1566330578_s6wtwg.jpg"
      ]
},

{
    "destinationPlace": "Cusco, Perú",
    "destinationDate": "Desde el 18 al 28 de Marzo 2024",
    "destinationPrice": 1900,
    "destinationDescription": "¡Bienvenido a la mágica ciudad de Cusco! Nuestro paquete turístico te invita a explorar la asombrosa historia, la cultura ancestral y los impresionantes paisajes de los Andes peruanos. Descubre los antiguos restos incas en la famosa ciudadela de Machu Picchu, una de las siete maravillas del mundo moderno. Explora los encantadores callejones empedrados del centro histórico de Cusco y visita los sitios arqueológicos cercanos, como Sacsayhuamán y Q'enqo. Maravíllate con la belleza de los valles sagrados y los paisajes montañosos de la región. Disfruta de la deliciosa gastronomía peruana, desde el ceviche hasta el lomo saltado, en los acogedores restaurantes locales. Cusco es una ciudad llena de espiritualidad y misterio, donde las tradiciones incas se mezclan con la cultura contemporánea. ¡Prepárate para vivir una experiencia inolvidable en esta ciudad que te envolverá con su encanto y su riqueza cultural!",
    "destinationIncluded":[
        "Vuelos de ida y vuelta en clase turista.",
        "Alojamiento en hoteles de calidad seleccionados.",
        "Régimen de media pensión",
        "Traslados desde y hacia el aeropuerto.",
        "Guías locales expertos que te acompañarán en las visitas que decidas contratar."
      ],
    "destinationHotel":
          {
            "hotelName": "Panoramic View Resort",
            "hotelCategory": "5 estrellas",
            "hotelLocation": "Cerca de la ciudadela de Machu Picchu"
          },
    "destinationInformation": "Precios, fechas y disponibilidad están sujetos a cambios. Consulta con nuestro equipo de ventas para obtener más detalles sobre el paquete y las promociones especiales disponibles.",
    "destinationImg": [
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689993178/Destinos/Plaza_de_Cusco_Allison_Bellido_ncmxcw.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689993177/Destinos/CuscoRainBlog3-1_xapgfq.webp",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689993177/Destinos/Montan%CC%83a-de-los-7-colores-Cusco_yex7ut.jpg",
        "https://res.cloudinary.com/dgenowvll/image/upload/v1689993178/Destinos/Machu-Picchu-14-scaled_jruasr.jpg"
      ]
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
    const allDestinations = await Destination.find();
    if(allDestinations.length > 0){
        await Destination.collection.drop();
        console.log("Destinos borrados");
    }
})
.catch((error) => console.log("Error borrando destinos"))
.then(async() => {
    const destinationsMap = arrayDestinations.map(destination => new Destination(destination));
    await Destination.insertMany(destinationsMap);
    console.log("Destinos insertados");
})
.catch((error) => console.log(`Error insertando destinos: ${error}`))
.finally(() => mongoose.disconnect());



