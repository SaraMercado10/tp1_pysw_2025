document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const navbar = document.querySelector(".navbar");
  
    toggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });
  