const prompt = require('prompt-sync')();

function saldoVitorias() {
  let vitorias = parseInt(prompt("Digite o número de vitórias: "));
  let derrotas = parseInt(prompt("Digite o número de derrotas: "));
  return vitorias - derrotas;
}

function rankHeroi(vitorias) {
  if (vitorias < 10) {
    return "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
    return "Bronze";
  } else if (vitorias > 20 && vitorias <= 50) {
    return "Prata";
  } else if (vitorias > 50 && vitorias <= 80) {
    return "Ouro";
  } else if (vitorias > 80 && vitorias <= 90) {
    return "Diamante";
  } else if (vitorias > 90 && vitorias <= 100) {
    return "Lendário";
  } else {
    return "Lendário";
  }
}

const vitorias = saldoVitorias();
const rank = rankHeroi(vitorias);

console.log(`Seu saldo de vitórias é ${vitorias} e seu rank é ${rank}.`);
