//Se activa para moviles
document.addEventListener("DOMContentLoaded", function () { //Espera que la página este cargada
    const toggle = document.querySelector(".nav-toggle");
    const navbar = document.querySelector(".navbar");
  
    toggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });
  