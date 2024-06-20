let hora = document.getElementById('hora');
let dia = document.getElementById('dia');
let minuto = document.getElementById('minuto');
let segundo = document.getElementById('segundo');

let lancamento = '25 dec 2024';

function countDown ( ) { 
  let dataLanc = new Date(lancamento);
  let hoje = new Date();

  let segTotal = (dataLanc - hoje) / 1000;

  let finalDias = Math.floor(segTotal / 60 / 60 / 24);
  let finalHoras = Math.floor(segTotal / 60 / 60) % 24;
  let finalMinutos = Math.floor(segTotal / 60) % 60;
  let finalSegundos = Math.floor(segTotal) % 60;

  dia.innerHTML = finalDias
  hora.innerHTML = formatoTempo(finalHoras)
  minuto.innerHTML = formatoTempo(finalMinutos)
  segundo.innerHTML = formatoTempo(finalSegundos)

}

function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo
}

countDown()
setInterval(countDown, 1000)