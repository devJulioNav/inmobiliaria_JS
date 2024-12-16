import { propiedadesVenta, propiedadesAlquiler } from './data/propiedades.js';

const mostrarPropiedades = (propiedades, containerID) => {
    const container = document.getElementById(containerID)
    const propiedadesLmt = propiedades.slice(0,3)

    for(const propiedad of propiedadesLmt) {
        const card = document.createElement('div')
        card.className = 'col-md-4 mb-4'
        const cardContent = `
        <div class="card h-100 shadow rounded border-2 bg-secondary text-light text-center p-3">
        <img src="${propiedad.src}" class="card-img-top img-fluid rounded mx-auto" alt="${propiedad.nombre}">
        <h5>${propiedad.nombre}</h5>
        <p>${propiedad.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
        <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
            <i class="fas fa-bath"></i> ${propiedad.banos}
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        <i class="fas ${propiedad.smoke ? 'fas fa-smoking':'fas fa-smoking-ban'}"></i> ${propiedad.smoke? 'Permitido fumar' : 'No se permite fumar'}
        <i class="fas ${propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${propiedad.pets? 'Permitido mascotas' : 'No se permite mascotas'}
        </div>
        `
       
        card.innerHTML = cardContent
        container.appendChild(card)
    }
}

mostrarPropiedades(propiedadesVenta, 'ventaContainer')
mostrarPropiedades(propiedadesAlquiler, 'alquilerContainer')