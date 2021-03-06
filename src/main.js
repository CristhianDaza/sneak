const menuBoton = document.getElementById("boton-menu");
const menuDesplegable = document.getElementById("menu-desplegable");
const menubotonCerrar = document.getElementById("boton-menu-cerrar");
const portfolioDiv = document.getElementById("portfolio");

const blockBoton = document.getElementById("block");
const columnBoton = document.getElementById("column");

const all = document.querySelectorAll(".all");
const branding = document.querySelectorAll(".branding");
const web = document.querySelectorAll(".web");
const photography = document.querySelectorAll(".photography");
const app = document.querySelectorAll(".app");

const viewOurBoton = document.getElementById('viewOur');

const url = "src/api.json";

const traerImagenes = async () => {
  const api = await fetch(url);
  const data = await api.json();
  const result = data.images;

  result.forEach((img) => {
    const { url, title, categorie } = img;

    portfolioDiv.innerHTML += `
            <div class="portfolio-grid_imagen">
                <figure>
                    <img src="${url}" alt="${title}">
                    <figcaption>
                        <span class="portfolio-grid_title">
                            ${title.toUpperCase()}
                        </span>
                        <hr />
                        <span class="portfolio-grid_categorie">
                            ${categorie.slice(0, -5)}
                        </span>
                    </figcaption>
                </figure>
            </div>`;
  });
  if(menuDesplegable.classList.contains = "menu-activo") {
    menuDesplegable.classList.remove("menu-activo")
}
};

const traerImagenesCategoria = async (value) => {
  value.preventDefault();
  const api = await fetch(url);
  const data = await api.json();
  const result = data.images;
  const categoriaTitulo = value.target.text;
  portfolioDiv.innerHTML = "";

  const categorias = result.filter(
    (categoria) => categoria.categorie.includes(categoriaTitulo)
  );
  categorias.forEach((img) => {
    const { url, title, categorie } = img;

    portfolioDiv.innerHTML += `
            <div class="portfolio-grid_imagen">
                <figure>
                    <img src="${url}" alt="${title}">
                    <figcaption>
                        <span class="portfolio-grid_title">
                            ${title.toUpperCase()}
                        </span>
                        <hr />
                        <span class="portfolio-grid_categorie">
                            ${categorie.slice(0, -5)}
                        </span>
                    </figcaption>
                </figure>
            </div>`;
  });

  if(menuDesplegable.classList.contains = "menu-activo") {
        menuDesplegable.classList.remove("menu-activo")
  }
  bajarScroll();
};

const bajarScroll = () => {
    if(window.scrollY < 10) {
        window.scrollTo({
            top: 900,
            behavior: 'smooth'
            });
    }
}

const viewOur = () => {
    window.scrollTo({
        top: 900,
        behavior: 'smooth'
    });
}

const mostrarMenu = () => menuDesplegable.classList.add("menu-activo");

const cerrarMenu = () => menuDesplegable.classList.remove("menu-activo");

const verBlock = () => portfolioDiv.classList.remove("vertical");

const verColumn = () => portfolioDiv.classList.add("vertical");

menuBoton.addEventListener("click", mostrarMenu);
menubotonCerrar.addEventListener("click", cerrarMenu);

blockBoton.addEventListener("click", verBlock);
columnBoton.addEventListener("click", verColumn);

all.forEach(all => all.addEventListener('click', traerImagenesCategoria));
branding.forEach(branding => branding.addEventListener('click', traerImagenesCategoria));
web.forEach(web => web.addEventListener('click', traerImagenesCategoria));
photography.forEach(photography => photography.addEventListener('click', traerImagenesCategoria));
app.forEach(app => app.addEventListener('click', traerImagenesCategoria));

viewOurBoton.addEventListener('click', viewOur)

traerImagenes();
