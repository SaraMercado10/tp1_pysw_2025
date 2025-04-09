document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const navbar = document.querySelector(".navbar");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Alternar el menú móvil
  toggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
  });

  // Alternar el modo claro/oscuro
  themeToggle.addEventListener("click", function () {
      body.classList.toggle("light-mode");

      if (body.classList.contains("light-mode")) {
          themeToggle.classList.remove("dark-mode");
          themeToggle.classList.add("light-mode");
      } else {
          themeToggle.classList.remove("light-mode");
          themeToggle.classList.add("dark-mode");
      }

      // Guardar la preferencia del usuario en localStorage
      localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
  });

  // Cargar la preferencia del usuario desde localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
      body.classList.add("light-mode");
      themeToggle.classList.add("light-mode");
  } else {
      body.classList.remove("light-mode");
      themeToggle.classList.add("dark-mode");
  }
});
  