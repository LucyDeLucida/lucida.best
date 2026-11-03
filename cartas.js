/* ============================================================
   CARTAS DEL SCRIPTORIUM
   Para editar: cambiá los textos entre comillas. Cada carta va entre
   comillas dobles y termina con una coma. Si necesitás comillas dentro
   del texto, usá “ ” (no ").
   ============================================================ */

// Día en que aparece la carta 1 (formato AAAA-MM-DD). Desde ahí se
// van sucediendo una por día, y al terminar la lista vuelve a empezar.
// Antes de esa fecha se muestra la carta 1.
const INICIO = "2026-11-03";

const CARTAS = [
  "Tomá una infusión sin hacer ninguna otra cosa más que eso (sin teléfono, sin trabajo, sin conversaciones, sin distracciones)",
  "¿Cuántas mariposas sos capaz de encontrar hoy? Prestá atención y notalas al final del día.",
  "Salí a buscar una flor y llevala en tu ropa o cabello el resto del día.",
  "Usá un color que no uses normalmente (ropa, accesorios, uñas, maquillaje, etc)",
  "Hoy cambiá de cartera/bolso/mochila.",
  "Escribí una carta pensando en un ser amado y luego dedicatela a vos misma (sí, vos sos el ser amado)",
  "Regalale una carta a alguien, que contenga un poema, un chiste, una frase, un rezo, un deseo, lo que vos quieras.",
  "Invitá a alguien a hacer algo RANDOM con vos: A trabajar, a leer juntas/os, a hacer un trámite, a pasear al perro, etc.",
  "Componé una canción que contenga estas palabras: Altar, pecho, cristal, jadeo y restricción.",
  "¿Vas a mirarte al espejo? Andá a mirarte al espejo. A los ojos.",
  "Hoy vas a hacerte tres cumplidos a vos misma a lo largo del día.",
  "Remojá tus pies. Mentalmente. Tomate unos instantes para invocar la sensación real.",
  "¿Podrías, por favor, añadir una pequeña planta a tu lugar de trabajo? (aunque sólo sea una papa vieja remojada en agua)",
  "Mirá a tu alrededor: nombrá dos cosas que veas, dos cosas que puedas tocar, dos cosas que puedas oler.",
  "Relajá los hombros. Lengua reposando en el paladar.",
  "Mirá hacia la ventana más próxima. Sentí cómo un par de alas salen de tu espalda, visualizate volando un ratito. Sólo un pequeño paseíto.",
  "Las plantas de tus pies, son centros de vital importancia.",
  "Levantá los brazos hacia el cielo. Más, más alto. Decí “Aaaaa” suavecito al bajarlos.",
  "Con tu mano izquierda acariciá tu mano derecha, ambos dorso y palma. 1 minuto. Repetí al revés (derecha-izquierda).",
  "Frotá tu rostro, palpalo. Agradecele.",
  "Frotá tus piernas.",
  "Depositá un beso en tu palma derecha. Y en la izquierda.",
  "Acariciá tu bajo vientre. Un minuto.",
  "¿A cuántas personas vas a abrazar hoy? Pensá un número (fuera de tu zona de confort) y hacelo.",
  "Con tu mano derecha agarrá tu hombro izquierdo. Y con la izquierda agarrá tu hombro derecho. Permanecé así. 1 minuto.",
  "Relajá el cuero cabelludo. Vamos.",
  "Mañana vas a despertar de una manera distinta. Hoy vas a pensar en esa forma. (con música, bailar desde la cama, largar una carcajada, tocar una nota en un instrumento, cantar, etc)",
  "¿Qué peinado inusual vas a hacerte hoy?",
  "Sentí el aroma de tu propia piel durante 30 segundos.",
  "Mirate al espejo y sacate la lengua a vos misma. 3 veces. En clara señal de burla, sí."
];

// Cartas para una fecha puntual (ganan sobre la carta automática).
// Formato: "AAAA-MM-DD": "Texto de la carta",
const ESPECIALES = {
  // "2026-12-21": "Texto especial para el solsticio...",
};
