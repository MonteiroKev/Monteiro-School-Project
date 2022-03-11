const button = document.getElementById("button");
const nomeAluno = document.getElementById("nomealuno");
const nome = document.getElementById("nome");
const firstNote = document.getElementById("firstNote","secondNote","thirdNote","fourthNote");
const media = document.getElementById("media");
const finalResult = document.getElementById("finalResult");

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (nome.value == "") {
    alert("Insira seu nome");
    return false;
  }
  nomeAluno.innerHTML = nome.value;

  const item = document.querySelectorAll("input");
  let somaDasNotas = 0;
  const arrayNotas = [];

  for (fields of item) {
    if (fields.id != "nome") {
      let notarecebida = Number(fields.value);

      if (notarecebida > 11 || notarecebida < 0) {
        alert("Sua nota deve menor que 10");
        return false;
      }
      arrayNotas.push(notarecebida);         
    }
  }
  for (let i = 0; i < arrayNotas.length; i++) {
    somaDasNotas += arrayNotas[i];    
  }
  firstNote.innerHTML = (`<h5>NOTA1: ${arrayNotas[0]}</h5>`);
  secondNote.innerHTML = (`<h5>NOTA2: ${arrayNotas[1]}</h5>`);
  thirdNote.innerHTML = (`<h5>NOTA3: ${arrayNotas[2]}</h5>`);
  fourthNote.innerHTML = (`<h5>NOTA4: ${arrayNotas[3]}</h5>`);
  media.innerHTML = (`<h5>MÉDIA: ${calcularMedia(somaDasNotas)}</h5>`);

  if(calcularMedia(somaDasNotas) >= 6){
    finalResult.innerHTML = (`<h5>APROVADO</h5>`);
    return true;  
  }
  else{
    finalResult.innerHTML = (`<h5>REPROVADO</h5>`);
    return false;
  }

});

function calcularMedia(somaDasNotas) {
  const media = somaDasNotas / 4;
  return media;
}







