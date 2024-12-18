document.getElementById("header").innerHTML = `
  <div class="container-header">
    <a href="index.html">
      <img class="logo-light-mode" src="img/logo-principal-new.png" alt="logo gato y perro juntos" />
    </a>
    <button id="hamburger" class="hamburger" aria-label="Abrir menú">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav id="menu" class="menu">
      <a href="index.html">Inicio</a>
      <a href="productos.html">Productos</a>
      <a href="form.html">Formulario Adopción</a>
      <a href="login.html">Iniciar sesión</a>
      <a href="registro.html">Registro</a> 
      <div class="theme-switch" id="theme-switch-container">
        <!-- Código del switch existente -->
        <input type="checkbox" id="theme-toggle" />
        <label for="theme-toggle">
          <div class="switch-background">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgb(255, 200, 0)" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
            </svg>
            <div class="switch-circle"></div>
          </div>
        </label>
      </div>
    </nav>
  </div>
`;

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("open");
});


document.getElementById("footer").innerHTML = `

      <div class="container">
        <h4>Seguinos en nuestras redes:</h4>
        <div class="footer-links">
          <a href="error404.html" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-whatsapp"></a>
        </div>
        <p class="p-footer">&copy; Patitas Felices 2024</p>
      </div>
      
    `;