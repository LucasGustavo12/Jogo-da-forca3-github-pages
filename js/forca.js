const palavras = ["JAVA","HTML","CSS","PHP","PYTHON","LUA"];
let quantidadeErros = 0;
let acertos = 0;
let tentativas = "";
palavraSecreta = palavras[Math.floor(Math.random() * 7)];

let c = document.getElementById("forca");
let ctx = c.getContext("2d");


desenhaBase();
desenhaTracos();

/*
desenhaPoste();
desenhaBarra();
desenhaApoio();
desenhaCabeca();
desenhaTronco();
desenhaBracoEsquerdo();
desenhaBracoDireito();
desenhaPernaEsquerda();
desenhaPernaDireita();
//desenhaTracos();
*/

window.onkeypress = teclaPressionada; 

function teclaPressionada() {
  if (!tentativas.includes(event.key) && palavraSecreta.includes((event.key).toUpperCase())){
    for(let i= 0; i < palavraSecreta.length; i++){
      if(palavraSecreta[i] == (event.key).toUpperCase()) {
        ctx.font = "20px Arial";
        ctx.fillStyle='#0A3871';
        ctx.fillText((event.key).toUpperCase(), 70 + (35 * i), 100);
        acertos++; 
      }
    }
  } else {
    adicionaTentativa();
    quantidadeErros++;
    desenhaBoneco(quantidadeErros);
  }
  verificaFimdeJogo();
}

function adicionaTentativa() {
  if (!tentativas.includes(event.key)) {
    tentativas = tentativas + event.key;
    ctx.font = "10px Arial";
    ctx.fillStyle = '#495057';
    ctx.fillText(tentativas.toUpperCase(), 110, 110);
  }
}

function verificaFimdeJogo() {
   if(quantidadeErros >= 9) {
    ctx.font = "10px Arial";
    ctx.fillStyle='red';
    ctx.fillText("Game Over! A palavra era: " + palavraSecreta, 10, 140);
    window.onkeypress = null;
    return;
   }
    else if(acertos == palavraSecreta.length){
      ctx.font = "10px Arial";
      ctx.fillText("Você ganhou!", 10, 130);
      window.onkeypress = null;
      return;
    }
}

function desenhaBoneco(quantidadeErros){
  switch (quantidadeErros){
    case 1:
        desenhaPoste();
        break;
    case 2: desenhaBarra();
        break;
    case 3:
      desenhaApoio();
      break;
    case 4:
      desenhaCabeca();
      break;
    case 5:
      desenhaTronco();
      break;
    case 6:
      desenhaBracoEsquerdo();
      break;
    case 7:
      desenhaBracoDireito();
      break;
    case 8:
      desenhaPernaEsquerda();
      break;
    case 9:
      desenhaPernaDireita();
      break;
  }
}

function desenhaBase() {
  ctx.strokeStyle = '#0A3871';
  ctx.moveTo(200, 80);
  ctx.lineTo(90, 80);
  ctx.stroke();
}

function desenhaPoste() {
  ctx.moveTo(120, 80);
  ctx.lineTo(120, 0);
  ctx.stroke();
}

function desenhaBarra() {
  ctx.moveTo(120, 1);
  ctx.lineTo(170, 1);
  ctx.stroke();
}

function  desenhaApoio() {
  ctx.moveTo(170, 10);
  ctx.lineTo(170, 0);
  ctx.stroke();
}

function desenhaCabeca(){
  ctx.beginPath();
  ctx.arc(170,20,10,0,2 * Math.PI);
  ctx.stroke();
}

function desenhaTronco() {
  ctx.moveTo(170,30);
  ctx.lineTo(170,50);
  ctx.stroke();
}

function desenhaBracoEsquerdo(){
  ctx.moveTo(170, 30);
  ctx.lineTo(180, 40);
  ctx.stroke();
}

function desenhaBracoDireito(){
  ctx.moveTo(170, 30);
  ctx.lineTo(160, 40);
  ctx.stroke();
}

function desenhaPernaEsquerda(){
  ctx.moveTo(170, 50);
  ctx.lineTo(180, 60);
  ctx.stroke();
}

function desenhaPernaDireita(){
  ctx.moveTo(170, 50);
  ctx.lineTo(160, 60);
  ctx.stroke();
}


function desenhaTracos() {
for (let i=0; i<palavraSecreta.length; i++) {
  ctx.moveTo(70 + (35 * i), 100);
  ctx.lineTo(90 + (35 * i), 100);
  ctx.stroke();
 }
}