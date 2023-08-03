function checkScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (elementPosition < screenHeight * 0.8) {
        element.classList.add('animate');
      }
    });
  } 
  
  // Ejecutar la función cuando se carga la página y se desplaza
  window.addEventListener('load', checkScrollAnimation);
  window.addEventListener('scroll', checkScrollAnimation);