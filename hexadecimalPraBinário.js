let numero = "BFF"; // precisa ser passado em string para o split recortar em seguida
let lista = numero.split("");
let resultado = [];

substituirNumeros(lista);

function substituirNumeros(valor) {
  for (let index = 0; index < valor.length; index++) {
    if (valor[index] == 0) {
      resultado.push("0000");
    } else if (valor[index] == 1) {
      resultado.push("0001");
    } else if (valor[index] == 2) {
      resultado.push("0010");
    } else if (valor[index] == 3) {
      resultado.push("0011");
    } else if (valor[index] == 4) {
      resultado.push("0100");
    } else if (valor[index] == 5) {
      resultado.push("0101");
    } else if (valor[index] == 6) {
      resultado.push("0110");
    } else if (valor[index] == 7) {
      resultado.push("0111");
    } else if (valor[index] == 8) {
      resultado.push("1000");
    } else if (valor[index] == 9) {
      resultado.push("1001");
    } else if (valor[index] == "A") {
      resultado.push("1010");
    } else if (valor[index] == "B") {
      resultado.push("1011");
    } else if (valor[index] == "C") {
      resultado.push("1100");
    } else if (valor[index] == "D") {
      resultado.push("1101");
    } else if (valor[index] == "E") {
      resultado.push("1110");
    } else if (valor[index] == "F") {
      resultado.push("1111");


    }
  }
}
let resposta = resultado.join("");
console.log(resposta);