import { tareas } from '../assets/data/tareas.js';

window.onload = () => {
    let lista = document.querySelector("#lista");

    
    const eliminarElemento = (event) => {
        const elementoPadre = event.target.closest('.lista_elemento');
        if (elementoPadre) {
            elementoPadre.remove();
        }
    };

    tareas.forEach((tarea) => {
        let elem = `
            <li class="lista_elemento" id="${tarea.id}">
                <p>${tarea.titulo}</p>
                <button class="btn_cerrar">X</button>
            </li>
        `;
        lista.innerHTML += elem;
    });

    const botonesCerrar = document.querySelectorAll('.btn_cerrar');
    botonesCerrar.forEach(boton => {
        boton.addEventListener('click', eliminarElemento);
    });
}

