const PALABRAS = [
  // Famosos y Celebridades
  "Messi", "Cristiano Ronaldo", "Taylor Swift", "Shakira", "Elon Musk", "Barack Obama", 
  "Einstein", "Michael Jackson", "Beyoncé", "Lady Gaga", "Greta Thunberg", "Rihanna", 
  "Zendaya", "Bad Bunny", "Karol G", "Pedro Pascal", "Rosalía", "Will Smith", 
  "Keanu Reeves", "Miley Cyrus", "Dua Lipa",

  // Personajes de Películas y Series
  "Harry Potter", "Gandalf", "Darth Vader", "Spider-Man", "Batman", "Goku", "Naruto", 
  "Barbie", "Homero Simpson", "Bob Esponja", "Sailor Moon", "Wednesday", "Eleven", 
  "Walter White", "Jon Snow", "Daenerys", "Yoda", "Iron Man", "Thor", "Loki", 
  "Buzz Lightyear",

  // Videojuegos
  "Mario", "Luigi", "Pikachu", "Link", "Zelda", "Donkey Kong", "Lara Croft", 
  "Kratos", "Steve (Minecraft)", "Pac-Man",

  // Comida y Bebida
  "hamburguesa", "pizza", "sushi", "taco", "helado", "chocolate", "espagueti", 
  "panqueques", "tarta", "donut", "paella", "gofre", "churro", "ensalada", 
  "sándwich", "nuggets", "kebab", "café", "té", "jugo", "cerveza", "vino", 
  "leche", "agua mineral", "ramen", "arepa", "empanada", "mate", "horchata", 
  "mochi", "nachos", "gazpacho", "croissant", "fondue",

  // Lugares y Escenarios
  "Nueva York", "París", "Tokio", "Roma", "El desierto", "La selva", "Playa", 
  "Montaña", "Bosque", "Casa embrujada", "Estadio", "Castillo", "Escuela", 
  "Universidad", "Museo", "Biblioteca", "Iglesia", "Supermercado", "Restaurante", 
  "Cine", "Discoteca", "Aeropuerto", "Parque de atracciones", "Estación espacial", 
  "Egipto", "La Antártida", "Marte", "La Luna", "Isla desierta", "Cueva", 
  "Laboratorio", "Hospital", "Zoológico", "Estación de tren",

  // Objetos y Cosas
  "espada", "telescopio", "micrófono", "reloj", "teléfono", "mochila", "lápiz", 
  "cuaderno", "computadora", "auriculares", "guitarra", "batería", "globo", 
  "sombrero", "caja", "silla", "espejo", "linterna", "llave", "martillo", 
  "cepillo", "dado", "cuchara", "peluche", "drone", "cámara", "póster", 
  "ventilador", "paraguas", "tijeras", "alfombra", "candado", "taza",

  // Animales
  "pingüino", "león", "tigre", "oso", "panda", "cocodrilo", "delfín", "ballena", 
  "gato", "perro", "murciélago", "tiburón", "jirafa", "elefante", "zorro", 
  "conejo", "oveja", "caballo", "vaca", "gallina", "ratón", "mono", "pez", 
  "búho", "camaleón", "erizo", "lobo", "rana", "cabra", "flamenco", "águila", 
  "pavo", "koala", "canguro",

  // Fantasía y Ciencia Ficción
  "dinosaurio", "dragón", "zombi", "vampiro", "sirena", "fantasma", "robot", 
  "alienígena", "monstruo", "hechicero", "pirata", "mago", "héroe", "villano", 
  "samurái", "ninja", "vaquero", "rey", "reina", "gladiador", "explorador", 
  "mutante", "clon", "cyborg", "hada", "duende", "espectro", "gólem", 
  "centauro", "minotauro", "quimera",

  // Conceptos abstractos y emociones
  "internet", "Wi-Fi", "tiempo", "trampa", "sueño", "magia", "miedo", "amor", 
  "risa", "silencio", "ruido", "secreto", "invisible", "misterio", "energía", 
  "estrés", "relámpago", "tormenta", "nube", "nieve", "fuego", "viento", "sol", 
  "vergüenza", "orgullo", "esperanza", "caos", "equilibrio", "destino", 
  "suerte", "curiosidad", "pasión", "soledad",

  // Cultura pop y actualidad
  "karaoke", "selfie", "tiktok", "meme", "emoticono", "emoji", "abducción", 
  "paradoja", "mimo", "payaso", "peluca", "disfraz", "túnel del tiempo", 
  "superpoder", "streamer", "influencer", "podcast", "hashtag", "viral", 
  "spoiler", "trending", "challenge", "reel", "filtro"
];

let numJugadores = 0;
let palabraElegida = "";
let roles = [];
let jugadorActual = 1;

// Crear partículas flotantes
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particlesContainer.appendChild(particle);
  }
}

function elegirPalabra() {
  return PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
}

function showScreen(screenId) {
  // Ocultar todas las pantallas
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  
  // Mostrar la pantalla deseada con animación
  setTimeout(() => {
    const targetScreen = document.getElementById(screenId);
    targetScreen.classList.remove('hidden');
    targetScreen.classList.add('fade-in');
  }, 200);
}

function empezarJuego() {
  numJugadores = parseInt(document.getElementById("numJugadores").value);
  if (numJugadores < 3) {
    alert('Se necesitan al menos 3 jugadores para jugar');
    return;
  }
  
  palabraElegida = elegirPalabra();
  roles = new Array(numJugadores).fill(palabraElegida);
  const impostorIndex = Math.floor(Math.random() * numJugadores);
  roles[impostorIndex] = "IMPOSTOR";
  jugadorActual = 1;
  
  showScreen('pantalla-jugador');
  mostrarJugador();
}

function mostrarJugador() {
  document.getElementById("numeroJugador").textContent = jugadorActual;
}

function mostrarPalabra() {
  showScreen('pantalla-palabra');
  const palabra = roles[jugadorActual - 1];
  const wordDisplay = document.getElementById('wordDisplay');
  const palabraMostrada = document.getElementById("palabraMostrada");
  
  palabraMostrada.textContent = palabra;
  
  // Cambiar estilo si es impostor
  if (palabra === "IMPOSTOR") {
    wordDisplay.classList.add('impostor-word');
  } else {
    wordDisplay.classList.remove('impostor-word');
  }
}

function siguienteJugador() {
  jugadorActual++;
  if (jugadorActual > numJugadores) {
    showScreen('pantalla-final');
  } else {
    showScreen('pantalla-jugador');
    mostrarJugador();
  }
}

function reiniciarJuego() {
  showScreen('pantalla-inicio');
  // Reset variables
  numJugadores = 0;
  palabraElegida = "";
  roles = [];
  jugadorActual = 1;
}

// Inicializar partículas al cargar la página
window.onload = function() {
  createParticles();
};