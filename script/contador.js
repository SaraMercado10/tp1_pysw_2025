function animarContador() {
    const contador = document.getElementById("contador");
    let inicio = 0;
    const final = 500;
    const duracion = 2000;
    const incremento = final / (duracion / 50);
  
    clearInterval(contador._intervalo);
  
    contador.innerText = "0";
    contador._intervalo = setInterval(() => {
      inicio += incremento;
      if (inicio >= final) {
        contador.innerText = final;
        clearInterval(contador._intervalo);
      } else {
        contador.innerText = Math.floor(inicio);
      }
    }, 50);
  }
  
  // Ejecutar al cargar y luego cada 5 segundos
  animarContador();
  setInterval(animarContador, 5000);
  