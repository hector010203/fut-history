document.getElementById("bilbao").addEventListener("click", function() {
    Swal.fire({
        html: 
            '<div class="contenedor-modal">' +
              '<div class="my-alert">' +
                '<div class="image-container">' +
                    '<img src="assets/la liga/athletic-club.png" alt="Mi Imagen">' +
                '</div>' +
                '<div class="contenido-modal">' +
                    '<h2 class="nombre">Athletic Club de Bilbao</h2>' +
                    '<p>El Athletic Club de Bilbao, fundado en 1898, es uno de los clubes de fútbol más antiguos de España. Conocido por su enfoque único en la cantera y la política de fichajes exclusivamente de jugadores nacidos o formados en el País Vasco, el Athletic ha construido una historia rica y singular. A lo largo de los años, el club ha ganado numerosos títulos nacionales e internacionales, incluyendo 8 Ligas españolas y 23 Copas del Rey.</p>' +
                '</div>' +
              '</div>' +
              '<div class="my-alert-2">' +
                '<div class="contenido-modal">' +
                  '<h2 class="nombre">Plantilla</h2>' +
                  '<p>El Athletic Club se enorgullece de contar con una plantilla compuesta principalmente por jugadores vascos. Han surgido grandes talentos del club, como Joseba Etxeberria, Andoni Iraola y Aritz Aduriz. La combinación de juventud y experiencia se refleja en la plantilla actual, con jóvenes promesas que buscan seguir los pasos de los ídolos del pasado.</p>' +
                  '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/bilbao.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                  '<h2 class="nombre">Estadio</h2>' +
                  '<p>El Athletic Club juega sus partidos en el icónico Estadio San Mamés, ubicado en Bilbao, País Vasco. San Mamés es conocido por su ambiente apasionado y su capacidad para albergar a miles de seguidores fervorosos.</p>' +
                  '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/atletico.webp" alt="Mi Imagen">' +
                  '</div>' +
                  '<h2 class="nombre">Logros</h2>' +
                  '<p>El Athletic Club ha ganado 8 Ligas españolas y 23 Copas del Rey, consolidándose como uno de los equipos más exitosos en el fútbol nacional. También ha tenido notables participaciones en competiciones internacionales, siendo finalista en la Copa UEFA en dos ocasiones.</p>' +
                  '<h2 class="nombre">Rivales</h2>' +
                  '<p>El Athletic Club de Bilbao mantiene una histórica y apasionada rivalidad con el Real Madrid y el FC Barcelona. Los enfrentamientos contra estos clubes son siempre esperados y generan una gran expectación tanto en los jugadores como en los aficionados.</p>' +
                '</div>' +
              '</div>' +
            '</div>',
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: false,
        background: '#1c1c1c',
        width: 900,
      });
});

document.getElementById("atletico").addEventListener("click", function() {
    Swal.fire({
        html: 
            '<div class="contenedor-modal">' +
              '<div class="my-alert">' +
                '<div class="image-container">' +
                    '<img src="assets/la liga/atletico.png" alt="Mi Imagen">' +
                '</div>' +
                '<div class="contenido-modal">' +
                    '<h2 class="nombre">Atlético de Madrid</h2>' +
                    '<p>El Atlético de Madrid es un reconocido club de fútbol con sede en Madrid, España. Fundado en 1903, el club ha dejado una huella indeleble en la historia del fútbol español y europeo. Conocido como "los colchoneros" o "los rojiblancos" por los colores de su equipación, el Atlético de Madrid ha cosechado numerosos éxitos a lo largo de los años.</p>' +
                '</div>' +
              '</div>' +
              '<div class="my-alert-2">' +
                '<div class="contenido-modal">' +
                  '<h2 class="nombre">Plantilla</h2>' +
                  '<p>La plantilla del Atlético de Madrid cuenta con jugadores talentosos y comprometidos. Bajo el liderazgo de su entrenador y con figuras destacadas como Jan Oblak, Luis Suárez y Koke, el equipo muestra un juego sólido y competitivo tanto en la defensa como en el ataque.</p>' +
                  '<div class="flex-jugadores">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/atletico.webp" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                  '<h2 class="nombre">Estadio</h2>' +
                  '<p>El Atlético de Madrid juega sus partidos en el Estadio Wanda Metropolitano, ubicado en Madrid. Con una capacidad para más de 68,000 espectadores, el estadio es un lugar emblemático donde los seguidores del Atlético se reúnen para animar a su equipo con pasión y entusiasmo.</p>' +
                  '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/atletico.webp" alt="Mi Imagen">' +
                  '</div>' +
                  '<h2 class="nombre">Logros</h2>' +
                  '<p>A lo largo de su historia, el Atlético de Madrid ha ganado numerosos títulos, incluyendo 11 Ligas españolas y 11 Copas del Rey. Además, ha tenido destacadas participaciones en competiciones europeas, siendo campeón de la Copa de Europa (actualmente Liga de Campeones de la UEFA) en la temporada 2021-2022.</p>' +
                  '<h2 class="nombre">Rivales</h2>' +
                  '<p>El Atlético de Madrid mantiene una histórica rivalidad con otros clubes españoles, especialmente con el Real Madrid y el FC Barcelona. Los enfrentamientos contra estos equipos son siempre emocionantes y generan una gran expectación en el fútbol español.</p>' +
                '</div>' +
              '</div>' +
            '</div>',
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: false,
        background: '#1c1c1c',
        width: 900,
      });
});
document.getElementById("osasuna").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                  '<img src="assets/la liga/osasuna.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Osasuna</h2>' +
                  '<p>Osasuna es un club de fútbol español con sede en Pamplona, Navarra. Fundado en XXXX, el equipo compite en La Liga y representa a la ciudad en las competiciones nacionales.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla de Osasuna está conformada por jugadores talentosos que defienden los colores del club en La Liga. El equipo cuenta con una mezcla de jugadores experimentados y jóvenes promesas que buscan destacarse en el fútbol español.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/osasuna.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Osasuna juega sus partidos como local en el Estadio XXXX, ubicado en Pamplona. El estadio es reconocido por su ambiente apasionado y ofrece una experiencia única para los aficionados y jugadores.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/osasuna.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>A lo largo de su historia, Osasuna ha obtenido logros destacables en el fútbol español. El equipo ha participado en competiciones europeas y ha dejado su marca en La Liga.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Osasuna mantiene rivalidades con otros clubes de la región, como el XXXX y el XXXX. Los enfrentamientos entre estos equipos generan emocionantes encuentros y una intensa competencia.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
    });
});

document.getElementById("cadiz").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                '<img src="assets/la liga/cadiz.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Cádiz</h2>' +
                  '<p>Cádiz es un club de fútbol español con sede en Cádiz, Andalucía. Fundado en XXXX, el equipo compite en La Liga y representa a la ciudad en las competiciones nacionales.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla de Cádiz está conformada por jugadores talentosos que defienden los colores del club en La Liga. El equipo cuenta con una mezcla de jugadores experimentados y jóvenes promesas que buscan destacarse en el fútbol español.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/cadiz.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Cádiz juega sus partidos como local en el Estadio Ramón de Carranza, ubicado en Cádiz. El estadio es reconocido por su ambiente vibrante y ofrece una experiencia única para los aficionados y jugadores.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/cadiz.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>A lo largo de su historia, Cádiz ha obtenido logros destacables en el fútbol español. El equipo ha participado en competiciones europeas y ha dejado su marca en La Liga.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Cádiz mantiene rivalidades con otros clubes de la región, como el XXXX y el XXXX. Los enfrentamientos entre estos equipos generan emocionantes encuentros y una intensa competencia.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
    });
});

document.getElementById("elche").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                '<img src="assets/la liga/elche.png" alt="Escudo Osasuna">' + 
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Elche</h2>' +
                  '<p>Elche es un club de fútbol español con sede en Elche, Comunidad Valenciana. Fundado en XXXX, el equipo compite en La Liga y representa a la ciudad en las competiciones nacionales.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla de Elche está conformada por jugadores talentosos que defienden los colores del club en La Liga. El equipo cuenta con una mezcla de jugadores experimentados y jóvenes promesas que buscan destacarse en el fútbol español.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/elche.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Elche juega sus partidos como local en el Estadio Manuel Martínez Valero, ubicado en Elche. El estadio es reconocido por su ambiente apasionado y ofrece una experiencia única para los aficionados y jugadores.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/elche.webp" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>A lo largo de su historia, Elche ha obtenido logros destacables en el fútbol español. El equipo ha participado en competiciones europeas y ha dejado su marca en La Liga.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Elche mantiene rivalidades con otros clubes de la región, como el XXXX y el XXXX. Los enfrentamientos entre estos equipos generan emocionantes encuentros y una intensa competencia.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
    });
});

// Continúa con el resto de los equipos siguiendo el mismo formato

document.getElementById("barcelona").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                '<img src="assets/la liga/barcelona.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Barcelona</h2>' +
                  '<p>Barcelona es un club de fútbol español con sede en Barcelona, Cataluña. Fundado en XXXX, el equipo compite en La Liga y es uno de los clubes más exitosos de España y del mundo.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla del Barcelona está conformada por jugadores talentosos y reconocidos a nivel mundial. El equipo cuenta con una rica historia de éxitos y ha sido hogar de jugadores legendarios como Lionel Messi, Xavi Hernández e Andrés Iniesta.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/barcelona.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>El Barcelona juega sus partidos como local en el Camp Nou, uno de los estadios más grandes de Europa con una capacidad de más de 99,000 espectadores. El estadio es conocido por su ambiente eléctrico y ha sido testigo de innumerables momentos históricos.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/camp nou.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>A lo largo de su historia, el Barcelona ha ganado numerosos títulos, incluyendo La Liga, la Copa del Rey, la Liga de Campeones de la UEFA y el Mundial de Clubes. El club ha dejado una huella imborrable en el fútbol y es reconocido por su estilo de juego atractivo conocido como "tiki-taka".</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>El Barcelona mantiene una intensa rivalidad con el Real Madrid, conocido como "El Clásico". Los partidos entre estos dos equipos son considerados como algunos de los más apasionantes y seguidos en el mundo del fútbol.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});


document.getElementById("getafe").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                '<img src="assets/la liga/getafe.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Getafe</h2>' +
                  '<p>Getafe es un club de fútbol español con sede en Getafe, Comunidad de Madrid. Fundado en XXXX, el equipo compite en La Liga y ha tenido un notable crecimiento en las últimas décadas.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla de Getafe está conformada por jugadores comprometidos y talentosos. A pesar de ser un equipo de menor presupuesto, ha logrado competir en la máxima categoría del fútbol español y ha alcanzado importantes logros.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/getafe.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Getafe juega sus partidos como local en el Coliseum Alfonso Pérez, un estadio con capacidad para más de 17,000 espectadores. Aunque es de menor tamaño en comparación con otros estadios, ofrece una atmósfera cercana e intensa.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/getafe.webp" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>Getafe ha logrado destacar en La Liga y ha participado en competiciones europeas como la Europa League. El equipo ha demostrado su capacidad de competir contra equipos más poderosos y ha dejado su huella en el fútbol español.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Getafe mantiene rivalidades regionales con equipos como el Rayo Vallecano y el Leganés. Estos encuentros son seguidos de cerca por los aficionados y generan una gran expectación.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});

document.getElementById("girona").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                '<img src="assets/la liga/girona.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Girona</h2>' +
                  '<p>Girona es un club de fútbol español con sede en Girona, Cataluña. Fundado en XXXX, el equipo ha tenido participaciones destacadas en la Segunda División y ha logrado ascender a la máxima categoría del fútbol español en varias ocasiones.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla de Girona está conformada por jugadores talentosos que representan al club en las competiciones. A lo largo de los años, el equipo ha contado con futbolistas destacados que han dejado su huella en la historia del club.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/girona.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Girona juega sus partidos como local en el Estadi Montilivi, un estadio con capacidad para más de 9,000 espectadores. Aunque es de menor tamaño, ofrece una atmósfera única y cercana entre los aficionados y los jugadores.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/girona.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>Girona ha logrado ascender a la Primera División en varias ocasiones y ha dejado su marca en el fútbol español. A pesar de su tamaño y recursos limitados, el equipo ha demostrado su competitividad y ha sido un rival difícil para otros clubes.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Girona mantiene una rivalidad regional con el Club de Fútbol Reus Deportiu, otro equipo de Cataluña. Estos enfrentamientos generan una gran expectación entre los aficionados de ambos clubes.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});


document.getElementById("rayo").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                '<img src="assets/la liga/rayo.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Rayo Vallecano</h2>' +
                  '<p>Rayo Vallecano es un club de fútbol español con sede en Madrid. Fundado en XXXX, el equipo ha tenido participaciones en la Primera División y la Segunda División, y cuenta con una gran afición conocida por su pasión y entrega.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla del Rayo Vallecano está formada por jugadores comprometidos que representan al club en las competiciones. A lo largo de los años, el equipo ha tenido jugadores destacados que han dejado su huella en la historia del club y en el fútbol español.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/rayo.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Rayo Vallecano juega sus partidos como local en el Estadio de Vallecas, un estadio ubicado en el distrito de Puente de Vallecas en Madrid. Con una capacidad de XXXX espectadores, el estadio es conocido por la cercanía entre los aficionados y el terreno de juego.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/rayo.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>A lo largo de su historia, Rayo Vallecano ha logrado ascender a la Primera División en varias ocasiones y ha dejado su huella en el fútbol español. El equipo ha sido reconocido por su estilo de juego valiente y su espíritu luchador.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Rayo Vallecano mantiene una rivalidad local con el Getafe CF, otro club madrileño. Los enfrentamientos entre estos equipos son conocidos como el "Derbi del Sur de Madrid" y generan una gran pasión entre los aficionados.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});

document.getElementById("celta").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                '<img src="assets/la liga/Celta-contorno-blanco.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Celta de Vigo</h2>' +
                  '<p>Celta de Vigo es un club de fútbol español con sede en Vigo, Galicia. Fundado en XXXX, el equipo ha tenido participaciones destacadas en la Primera División y ha representado a España en competiciones europeas. Su estilo de juego ofensivo es reconocido en el fútbol español.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla del Celta de Vigo está compuesta por jugadores talentosos que representan al club en las competiciones. A lo largo de los años, el equipo ha contado con futbolistas destacados que han dejado su huella en la historia del club y en el fútbol español.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/celta.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Celta de Vigo juega sus partidos como local en el Estadio de Balaídos, un estadio ubicado en Vigo con capacidad para más de XXXX espectadores. El estadio ha sido testigo de emocionantes encuentros de fútbol y ha sido el escenario de grandes momentos del club.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/celta.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>Celta de Vigo ha tenido participaciones destacadas en la Primera División y ha alcanzado finales de la Copa del Rey. El equipo ha sido reconocido por su estilo de juego atractivo y ha dejado su marca en el fútbol español.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Celta de Vigo mantiene una rivalidad histórica con el Deportivo de La Coruña, otro club gallego. Estos enfrentamientos, conocidos como el "Derbi Gallego", son considerados uno de los derbis más intensos y emocionantes del fútbol español.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});

document.getElementById("espanyol").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                  '<img src="assets/la liga/espanyol.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Espanyol</h2>' +
                  '<p>Espanyol, oficialmente conocido como el Reial Club Deportiu Espanyol de Barcelona, es un club de fútbol español con sede en Barcelona. Fundado en XXXX, el equipo ha tenido una larga trayectoria en la Primera División y ha representado a España en competiciones europeas.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla del Espanyol está formada por jugadores talentosos que representan al club en las competiciones. A lo largo de los años, el equipo ha contado con futbolistas destacados que han dejado su huella en la historia del club y han sido reconocidos en el fútbol español.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/espanyol.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Espanyol juega sus partidos como local en el Estadio Cornellà-El Prat, un moderno estadio ubicado en Cornellà de Llobregat, cerca de Barcelona. Con capacidad para más de XXXX espectadores, el estadio ofrece una experiencia única para los aficionados y los jugadores.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/espanyol.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>Espanyol ha tenido participaciones destacadas en la Primera División y ha alcanzado finales de la Copa del Rey y competiciones europeas. El equipo ha sido reconocido por su estilo de juego atractivo y su espíritu competitivo.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Espanyol mantiene una histórica rivalidad con el FC Barcelona, otro club de Barcelona. Los enfrentamientos entre ambos equipos, conocidos como el "Derbi Barcelonés", generan una gran expectación y pasión entre los aficionados de ambos clubes.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});


document.getElementById("mallorca").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                  '<img src="assets/la liga/mallorca.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Mallorca</h2>' +
                  '<p>Mallorca es un club de fútbol español con sede en Palma de Mallorca, Islas Baleares. Fundado en XXXX, el equipo ha tenido participaciones en la Primera División y ha representado a España en competiciones europeas. Mallorca cuenta con una gran afición y un ambiente único en su estadio.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla de Mallorca está formada por jugadores talentosos que representan al club en las competiciones. A lo largo de los años, el equipo ha contado con futbolistas destacados que han dejado su huella en la historia del club y en el fútbol español.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/mallorca.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Mallorca juega sus partidos como local en el Estadio de Son Moix, un estadio ubicado en Palma de Mallorca con capacidad para más de XXXX espectadores. El estadio ha sido testigo de momentos emocionantes y ha sido un factor importante para el club.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/mallorca.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>Mallorca ha tenido participaciones destacadas en la Primera División y ha logrado ascender a la máxima categoría en varias ocasiones. El equipo ha dejado su marca en el fútbol español y ha representado a las Islas Baleares con orgullo.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Mallorca mantiene una rivalidad regional con el Real Zaragoza, otro club de España. Estos enfrentamientos generan una gran expectación y pasión entre los aficionados de ambos equipos.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});

document.getElementById("betis").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                  '<img src="assets/la liga/betis.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Real Betis</h2>' +
                  '<p>Real Betis Balompié, comúnmente conocido como Betis, es un club de fútbol español con sede en Sevilla, Andalucía. Fundado en XXXX, el equipo ha tenido participaciones en la Primera División y ha representado a España en competiciones europeas. Betis cuenta con una gran afición y una tradición arraigada en la ciudad de Sevilla.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla del Real Betis está compuesta por jugadores talentosos que representan al club en las competiciones. A lo largo de los años, el equipo ha contado con futbolistas destacados que han dejado su huella en la historia del club y en el fútbol español.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/betis.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Real Betis juega sus partidos como local en el Estadio Benito Villamarín, un estadio ubicado en Sevilla con capacidad para más de XXXX espectadores. El estadio es conocido por su atmósfera única y ha sido el escenario de momentos destacados en la historia del club.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/betis.webp" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>Real Betis ha tenido participaciones destacadas en la Primera División y ha ganado títulos nacionales e internacionales a lo largo de su historia. El equipo ha dejado su huella en el fútbol español y es uno de los clubes más reconocidos de Andalucía.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Real Betis mantiene una histórica rivalidad con el Sevilla FC, otro club de Sevilla. Estos enfrentamientos, conocidos como el "Derbi Sevillano" o el "Gran Derbi", son considerados uno de los derbis más apasionantes del fútbol español.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});

document.getElementById("villarreal").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                  '<img src="assets/la liga/Villarreal.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Villarreal</h2>' +
                  '<p>Villarreal Club de Fútbol, comúnmente conocido como Villarreal, es un club de fútbol español con sede en Villarreal, Comunidad Valenciana. Fundado en XXXX, el equipo ha tenido participaciones en la Primera División y ha representado a España en competiciones europeas. Villarreal es conocido por su estilo de juego ofensivo y su afición apasionada.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla del Villarreal está compuesta por jugadores talentosos que representan al club en las competiciones. A lo largo de los años, el equipo ha contado con futbolistas destacados que han dejado su huella en la historia del club y en el fútbol español.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/villareal.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Villarreal juega sus partidos como local en el Estadio de la Cerámica, un moderno estadio ubicado en Villarreal con capacidad para más de XXXX espectadores. El estadio ha sido testigo de grandes momentos del club y ofrece una experiencia única para los aficionados.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/villareal.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>Villarreal ha tenido participaciones destacadas en la Primera División y ha alcanzado finales de la UEFA Europa League. El equipo ha sido reconocido por su estilo de juego atractivo y su capacidad para competir en el ámbito nacional e internacional.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Villarreal mantiene una rivalidad regional con el Valencia CF, otro club de la Comunidad Valenciana. Estos enfrentamientos, conocidos como el "Derbi de la Comunitat", generan una gran expectación y emoción entre los aficionados de ambos equipos.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});


document.getElementById("real-madrid").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                  '<img src="assets/la liga/madird.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Real Madrid Club de Fútbol</h2>' +
                  '<p>Real Madrid Club de Fútbol, comúnmente conocido como Real Madrid, es un club de fútbol español con sede en Madrid. Fundado en 1902, el equipo es considerado uno de los más exitosos y populares del mundo. Real Madrid ha ganado numerosos títulos nacionales e internacionales y cuenta con una rica historia y una gran base de seguidores en todo el mundo.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla del Real Madrid está compuesta por jugadores de renombre mundial que representan al club en las competiciones. El equipo cuenta con una combinación de jóvenes talentos y jugadores experimentados que han dejado su huella en la historia del club y en el fútbol en general.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/madrid.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Real Madrid juega sus partidos como local en el Estadio Santiago Bernabéu, un icónico estadio ubicado en Madrid con una capacidad para más de XXXX espectadores. El estadio es reconocido por su ambiente vibrante y ha sido testigo de innumerables momentos históricos del club.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/bernabeu.webp" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>Real Madrid es uno de los clubes más laureados en la historia del fútbol. Ha ganado numerosos títulos nacionales, incluyendo la Liga española y la Copa del Rey, así como competiciones internacionales como la Liga de Campeones de la UEFA y el Mundial de Clubes. El club ha sido reconocido por su estilo de juego ofensivo y su capacidad para competir en los más altos niveles.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Real Madrid mantiene una histórica rivalidad con el Fútbol Club Barcelona, conocido como "El Clásico". Este enfrentamiento entre los dos clubes más importantes de España genera una gran expectación a nivel mundial y es considerado uno de los derbis más emocionantes y seguidos del fútbol.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});

document.getElementById("real-sociedad").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                  '<img src="assets/la liga/real-sociedad.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Real Sociedad de Fútbol</h2>' +
                  '<p>Real Sociedad de Fútbol es un club de fútbol español con sede en San Sebastián, País Vasco. Fundado en 1909, el equipo es conocido por su estilo de juego atractivo y su enfoque en el desarrollo de jugadores jóvenes. Real Sociedad ha tenido éxito en la liga española y ha representado a España en competiciones europeas.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla de Real Sociedad está formada por talentosos jugadores que representan al club en las competiciones. El equipo se caracteriza por su estilo de juego ofensivo y por su capacidad para desarrollar y promover jóvenes talentos. Real Sociedad ha tenido jugadores destacados a lo largo de su historia y continúa siendo un competidor fuerte en la liga española.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/sociedad.jpeg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Real Sociedad juega sus partidos como local en el Estadio Anoeta, ubicado en San Sebastián. El estadio, que tiene una capacidad para más de XXXX espectadores, es conocido por su ambiente animado y ha sido testigo de muchos momentos emocionantes en la historia del club.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/sociedad.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>A lo largo de su historia, Real Sociedad ha ganado varios títulos nacionales, incluyendo la Liga española y la Copa del Rey. El club también ha tenido éxito en competiciones europeas, participando en la Liga de Campeones de la UEFA y la Liga Europa. Real Sociedad es conocido por su estilo de juego atractivo y por su capacidad para competir con los mejores equipos de España y Europa.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Real Sociedad mantiene una rivalidad histórica con el Athletic Club, otro club vasco. Los enfrentamientos entre estos dos equipos, conocidos como el "Derbi Vasco" o "Derbi del Norte", generan una gran pasión y rivalidad en la región del País Vasco.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});

// Sevilla
document.getElementById("sevilla").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                '<img src="assets/la liga/sevilla.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Sevilla FC</h2>' +
                  '<p>Sevilla FC es un club de fútbol español con sede en Sevilla, Andalucía. Fundado en 1890, el equipo ha tenido éxito tanto a nivel nacional como internacional. Sevilla FC es conocido por su estilo de juego ofensivo y por su afición apasionada. El club ha ganado varios títulos, incluyendo la Liga Europa de la UEFA.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla de Sevilla FC está compuesta por jugadores talentosos que representan al club en las competiciones. A lo largo de los años, el equipo ha tenido jugadores destacados que han dejado su huella en la historia del club y en el fútbol español. Sevilla FC se enorgullece de su cantera y de su capacidad para desarrollar jóvenes talentos.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/sevilla.jpeg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Sevilla FC juega sus partidos como local en el Estadio Ramón Sánchez Pizjuán, ubicado en Sevilla. El estadio es conocido por su atmósfera vibrante y por ser uno de los más emblemáticos de España. Ha sido sede de importantes encuentros de fútbol y ha acogido finales de competiciones europeas.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/sevilla.webp" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>Sevilla FC ha ganado varios títulos a lo largo de su historia, incluyendo la Liga española, la Copa del Rey y la Liga Europa de la UEFA. El club ha tenido éxito en competiciones europeas y ha dejado una marca significativa en el fútbol español. Sevilla FC es conocido por su mentalidad ganadora y su espíritu competitivo.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Sevilla FC mantiene una intensa rivalidad con el Real Betis, otro club de la ciudad de Sevilla. Los enfrentamientos entre estos equipos, conocidos como el "Derbi Sevillano", son considerados uno de los derbis más apasionantes y emocionantes de España.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});

// Almería
document.getElementById("almeria").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                  '<img src="assets/la liga/almeria.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">UD Almería</h2>' +
                  '<p>UD Almería es un club de fútbol español con sede en Almería, Andalucía. Fundado en 1989, el equipo ha tenido éxito en la Segunda División española y ha participado en la Primera División. Almería se ha destacado por su estilo de juego atractivo y su capacidad para competir contra equipos de mayor categoría.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla de UD Almería está compuesta por jugadores que representan al club en las competiciones. El equipo ha contado con jugadores talentosos a lo largo de su historia, algunos de los cuales han dejado su huella en el fútbol español. Almería se enorgullece de su espíritu luchador y su capacidad para competir en la máxima categoría del fútbol español.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/almeria.jpeg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>UD Almería juega sus partidos como local en el Estadio de los Juegos Mediterráneos, ubicado en Almería. El estadio ofrece una experiencia moderna a los aficionados y ha sido sede de importantes encuentros de fútbol. Es un símbolo de la pasión futbolística en la ciudad de Almería.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/almeria.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>A lo largo de su historia, UD Almería ha logrado varios ascensos a la Primera División española. El club ha competido en la máxima categoría y ha dejado una marca en el fútbol español. Almería ha sido reconocido por su espíritu luchador y su capacidad para desafiar a equipos de mayor categoría.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>UD Almería mantiene una rivalidad local con el Real Murcia, otro club de la región de Andalucía. Los enfrentamientos entre estos equipos son conocidos como el "Derbi del Sureste" y generan gran pasión entre los aficionados de ambos clubes.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});


// Valladolid
document.getElementById("valladolid").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                  '<img src="assets/la liga/valladolid.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Real Valladolid</h2>' +
                  '<p>Real Valladolid es un club de fútbol español con sede en Valladolid, Castilla y León. Fundado en 1928, el equipo ha competido en varias temporadas de la Primera División española y ha dejado una marca en el fútbol español. Valladolid se caracteriza por su espíritu luchador y su identificación con la ciudad y sus seguidores.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla del Real Valladolid está conformada por jugadores que representan al club en las competiciones. A lo largo de su historia, el equipo ha tenido jugadores destacados que han dejado su huella en el fútbol español. Valladolid se enorgullece de su cantera y de su compromiso con el desarrollo de talento local.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/valladolid.jpeg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Real Valladolid juega sus partidos como local en el Estadio José Zorrilla, ubicado en Valladolid. El estadio es un símbolo para la afición y ha sido sede de emocionantes encuentros de fútbol. Con una capacidad para miles de espectadores, el estadio crea una atmósfera vibrante en los partidos.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/valladolid.jpg" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>A lo largo de su historia, Real Valladolid ha logrado ascensos y participaciones destacadas en la Primera División española. El club ha dejado su huella en el fútbol español y ha sido reconocido por su espíritu competitivo y su compromiso con el juego limpio.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Real Valladolid mantiene una rivalidad local con el Real Oviedo, otro club de la región de Castilla y León. Los enfrentamientos entre estos equipos generan gran expectación y pasión entre los aficionados de ambas ciudades.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});


// Valencia
document.getElementById("valencia").addEventListener("click", function() {
  Swal.fire({
      html: 
          '<div class="contenedor-modal">' +
            '<div class="my-alert">' +
              '<div class="image-container">' +
                  '<img src="assets/la liga/Valencia.png" alt="Escudo Osasuna">' +
              '</div>' +
              '<div class="contenido-modal">' +
                  '<h2 class="nombre">Valencia CF</h2>' +
                  '<p>Valencia CF es un club de fútbol español con sede en Valencia, Comunidad Valenciana. Fundado en 1919, el equipo es conocido por su historia y tradición en el fútbol español. Valencia CF ha competido en la Primera División y ha logrado éxitos a nivel nacional e internacional.</p>' +
              '</div>' +
            '</div>' +
            '<div class="my-alert-2">' +
              '<div class="contenido-modal">' +
                '<h2 class="nombre trayectoria">Plantilla</h2>' +
                '<p>La plantilla del Valencia CF está compuesta por jugadores talentosos que representan al club en las competiciones. A lo largo de su historia, el equipo ha tenido jugadores destacados que han dejado su huella en el fútbol español e internacional. Valencia CF se enorgullece de su cantera y su apuesta por el desarrollo de talento joven.</p>' +
                '<div class="flex-jugadores plantilla-laliga">' +
                    '<div class="item item-1">' +
                        '<img src="assets/plantillas/valencia.jpg" alt="Messi" class="image">' +
                        '<div class="middle">' +
                            '<a href="https://www.google.com.mx/">' +
                              '<button class="text" id="messi">Saber Mas</button>' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                  '</div>' +
                '<h2 class="nombre">Estadio</h2>' +
                '<p>Valencia CF juega sus partidos como local en el Estadio Mestalla, ubicado en Valencia. El estadio es uno de los más antiguos y emblemáticos de España y ha sido testigo de momentos históricos del fútbol. Con capacidad para miles de espectadores, el estadio crea una atmósfera única en los partidos.</p>' +
                '<div class="image-container-estadio">' +
                    '<img src="assets/estadios/valencia.webp" alt="Mi Imagen">' +
                  '</div>' +
                '<h2 class="nombre">Logros</h2>' +
                '<p>A lo largo de su historia, Valencia CF ha ganado varios títulos nacionales e internacionales, incluyendo la Primera División, la Copa del Rey y la Copa de la UEFA. El club ha dejado su huella en el fútbol español y europeo, y ha sido reconocido por su estilo de juego y su afición apasionada.</p>' +
                '<h2 class="nombre">Rivales</h2>' +
                '<p>Valencia CF mantiene una intensa rivalidad con el Levante UD, otro club de la ciudad de Valencia. Los enfrentamientos entre estos equipos, conocidos como el "Derbi de Valencia", son considerados uno de los derbis más apasionantes y emocionantes del fútbol español.</p>' +
              '</div>' +
            '</div>' +
          '</div>',
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      background: '#1c1c1c',
      width: 900,
  });
});
