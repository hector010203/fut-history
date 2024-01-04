document.addEventListener("DOMContentLoaded", function () {
  var loader = document.getElementById("loader");
  var body = document.body;

  // Muestra el loader
  loader.style.display = "flex";
  body.classList.add("loading");

  // Oculta el loader cuando la página ha cargado completamente
  window.addEventListener("load", function () {
    loader.style.display = "none";
    body.classList.remove("loading");
  });
});

function checkScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (elementPosition < screenHeight * 0.84) {
        element.classList.add('animate');
      }
    });
  } 
  
  // Ejecutar la función cuando se carga la página y se desplaza
  window.addEventListener('load', checkScrollAnimation);
  window.addEventListener('scroll', checkScrollAnimation);

  const d = document;
  let topBottom = d.querySelector(".flecha");
  let redireccion = d.querySelector("header");
  let footer = d.querySelector("footer")

  topBottom.addEventListener("click", (e) => {
    document.documentElement.scrollIntoView({ behavior: "smooth" });
  });
  

  d.addEventListener("scroll", e =>{
    if(scrollY > 300){
      topBottom.classList.remove("visible")
    }else{
      topBottom.classList.add("visible")
    }

    // if(scrollY > 3600){
    //   topBottom.classList.add("flecha2")
    // }else{
    //   topBottom.classList.remove("flecha2")
    // }
  })

  // footer.addEventListener("mouseover", (e) => {
  //   topBottom.classList.add("flecha2");
  // });
  
  // footer.addEventListener("mouseout", (e) => {
  //   topBottom.classList.remove("flecha2");
  // });
  