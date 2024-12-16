const propiedadesVenta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: true,
    pets: false
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 2500,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zola residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    }
]

const propiedadesAlquiler = [
    {
    nombre: 'Apartamento confortable en centro financiero',
    src: 'https://www.valenciaflats.com/wp-content/blogs.dir/1517/files/01-corporativa-home/valenciaflats-general-salon-comedor-apartamento-1900.jpg',
    descripcion: 'Apartamento con todas las cómodidades en centro financiero',
    ubicacion: '235 Hensworth Avenue, Arkansas, VI 12653',
    habitaciones: 2,
    banos: 2,
    costo: 1700,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Apartamento en las afueras de la ciudad',
    src: 'https://www.arvaldevelopers.com/wp-content/uploads/2019/06/Azalea-living-room.jpg',
    descripcion: 'Apartamento ubicado en la periferia y zona campestre',
    ubicacion: '733 London Street, Patagonia, HO 72345',
    habitaciones: 3,
    banos: 2,
    costo: 2500,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento con paisaje deslumbrante',
    src: 'https://urbansa.co/wp-content/uploads/2021/12/2.png',
    descripcion: 'Apartamento convista a las montañas y zona acogedora',
    ubicacion: '253 Zona Alborada Block 23, Retamal, BI 65521', 
    habitaciones: 3,
    banos: 2,
    costo: 2800,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento con terraza',
    src: 'https://img.jamesedition.com/listing_images/2024/05/27/15/43/08/1adfc076-7e69-4c75-8519-e28cd94b6ede/je/760x470xc.jpg',
    descripcion: 'Apartamento lujoso con terraza estilo vintage',
    ubicacion: '120 Alameda Street, Miramar, SA 33444',
    habitaciones: 4,
    banos: 3,
    costo: 4200,
    smoke: true,
    pets: false
    },
    {
    nombre: 'Apartamento de playa',
    src: 'https://storage.googleapis.com/aqacentor-corporativewebs-pro--corporative-web--wp--pro--static/1/2024/06/decoracion-habitacion-apartamento-playa-1024x585.jpg',
    descripcion: 'Apartamento de playa cómodo con zona parrillera y juegos',
    ubicacion: 'Zona Playa Alta 450, Cancún, ME 43662',
    habitaciones: 2,
    banos: 2,
    costo: 2100,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio lujoso y seguro',
    src: 'https://theressa.net/images/projects/612d0511d2679-CONDOMINIOS.jpg',
    descripcion: 'Condominio con cochera propia, vigilancia, jardines y juegos recreacionales',
    ubicacion: 'Calle Antequera 225, Monterrico, LI 213359',
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: false
    }
]

export {propiedadesVenta, propiedadesAlquiler};