function validaAnoBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function validarFormatoInput(dataStr) {
  const partes = dataStr.split("/");
  if (partes.length !== 3) return false;
  const [dia, mes, ano] = partes.map(Number);
  if (isNaN(dia) || isNaN(mes) || isNaN(ano)) return null;
  return { dia, mes, ano };
}

function validarData(dia, mes, ano) {
  if (mes < 1 || mes > 12) return "Mês inválido!";
  const diasMes = [31, validaAnoBissexto(ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (dia < 1 || dia > diasMes[mes - 1]) return "Dia inválido para o mês informado!";
  return false; 
}

function nomeDoMes(mes) {
  const nomes = [
    "janeiro", "fevereiro", "março", "abril",
    "maio", "junho", "julho", "agosto",
    "setembro", "outubro", "novembro", "dezembro"
  ];
  return nomes[mes - 1];
}

function dataPorExtenso(dataStr) {
  const partes = validarFormatoInput(dataStr);
  if (!partes) return "Formato inválido! Use dd/mm/aaaa.";

  const { dia, mes, ano } = partes;

  const erro = validarData(dia, mes, ano);
  if (erro) return erro;

  return `${dia} de ${nomeDoMes(mes)} de ${ano}`;
}

document.getElementById("converter").addEventListener("click", () => {
const entrada = document.getElementById("data").value.trim();
const resultado = dataPorExtenso(entrada);
const mensagem = document.getElementById("mensagem");
mensagem.textContent = resultado;
if (resultado.includes("inválido")) {
mensagem.style.color = "red";   
} else {
mensagem.style.color = "blue";
document.getElementById("data").value=""; 
}
}

);