/* Calcula la carta del día con los datos de cartas.js (INICIO, CARTAS, ESPECIALES). No hace falta editarlo. */
const pad=n=>String(n).padStart(2,'0');
const hoy=()=>{const d=new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())};
const dias=(a,b)=>{const f=x=>{const [y,m,d]=x.split('-').map(Number);return Date.UTC(y,m-1,d)/864e5};return Math.round(f(b)-f(a))};
function cartaDeHoy(){const h=hoy();if(typeof ESPECIALES!=='undefined'&&ESPECIALES[h])return ESPECIALES[h];
  return CARTAS[Math.max(0,dias(INICIO,h))%CARTAS.length]}
