const menuBoton = document.getElementById('boton-menu');
const menuDesplegable = document.getElementById('menu-desplegable');
const menubotonCerrar = document.getElementById('boton-menu-cerrar')

const mostrarMenu = () => {
    menuDesplegable.classList.add('menu-activo');
};

const cerrarMenu = () => menuDesplegable.classList.remove('menu-activo');

menuBoton.addEventListener('click', mostrarMenu);
menubotonCerrar.addEventListener('click', cerrarMenu);
