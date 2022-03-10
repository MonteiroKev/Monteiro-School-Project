const button = document.getElementById("button");
const nomeAluno = document.getElementById("nomealuno");
const nome = document.getElementById("nome");

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
      somaDasNotas += notarecebida;
    }
  }
  console.log(somaDasNotas);
});
