import { propiedadesVenta } from './data/propiedades.js';

//console.log(propiedadesVenta)

const propVenta = document.querySelector('#propVenta')
let html1 = ''

for(const venta of propiedadesVenta){
    const card = document.createElement('div')
    card.className = 'col-md-4 mb-4'
    html1 += `
        <div class="card h-100 shadow rounded border-2 bg-secondary text-light text-center p-3">
        <img src="${venta.src}" class="card-img-top img-fluid rounded mx-auto" alt="${propiedad.nombre}">
        <h5>${venta.nombre}</h5>
        <p>${venta.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
        <p>
            <i class="fas fa-bed"></i> ${venta.habitaciones} |
            <i class="fas fa-bath"></i> ${venta.banos}
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
        <i class="fas ${venta.smoke ? 'fas fa-smoking':'fas fa-smoking-ban'}"></i> ${venta.smoke? 'Permitido fumar' : 'No se permite fumar'}
        <i class="fas ${venta.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${venta.pets? 'Permitido mascotas' : 'No se permite mascotas'}
        </div>
    `
}


propVenta.innerHTML = html1
propVenta.appendChild(card)
