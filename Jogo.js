import { gerarNumero } from "./aleatorio.js";

const numeroSecreto = gerarNumero();
const tentativas = [1, 2, 3];

for (const tentativa of tentativas) {
  let entrada = prompt(
    `Tentativa ${tentativa} de 3: escolha um número de 1 a 10`
  );

  if (entrada === null) {
    break;
  }

  entrada = entrada.trim().replace(",", ".");
  const palpite = Number(entrada);

  if (!Number.isInteger(palpite) || palpite < 1 || palpite > 10) {
    alert("Digite um número inteiro de 1 a 10.");
    continue;
  }

  if (palpite === numeroSecreto) {
    alert("Parabéns! Você acertou!");
    break;
  } else if (palpite < numeroSecreto) {
    alert("Tente um número maior.");
  } else {
    alert("Tente um número menor.");
  }

  if (tentativa === 3) {
    alert(`Suas tentativas acabaram! O número era ${numeroSecreto}.`);
  }
}
