const menuBoton = document.getElementById('boton-menu');
const menuDesplegable = document.getElementById('menu-desplegable');
const menubotonCerrar = document.getElementById('boton-menu-cerrar');
const portfolioDiv = document.getElementById('portfolio');

const mostrarMenu = () => {
    menuDesplegable.classList.add('menu-activo');
};

const cerrarMenu = () => menuDesplegable.classList.remove('menu-activo');

menuBoton.addEventListener('click', mostrarMenu);
menubotonCerrar.addEventListener('click', cerrarMenu);

const traerImagnes = async () => {
    const url = 'src/api.json';
    const api = await fetch(url);
    const data = await api.json();
    const result = data.images
    
    result.forEach(img => {
        const { url, title, categorie } = img;

        portfolioDiv.innerHTML += `
            <div class="portfolio-grid_imagen">
                <figure>
                    <img src="${url}" alt="${title}">
                    <figcaption>
                        ${title}
                        <hr />
                        ${categorie}
                    </figcaption>
                </figure>
            </div>`
    });
    // const images = [];
    
    // images.push

    // portfolioDiv.appendChild(images);
    console.log(result);
}

traerImagnes();