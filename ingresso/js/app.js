function comprar() {
  //recuperar o tipo e quantidade de ingressos
  let tipoIngresso = document.getElementById("tipo-ingresso");
  let quantidade = parseInt(document.getElementById("qtd").value);

  // Verificar se a quantidade é um número positivo
  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  if (tipoIngresso.value == "pista") {
    comprarPista(quantidade);
  } else if (tipoIngresso.value == "superior") {
    comprarSuperior(quantidade);
  } else {
    comprarInferior(quantidade);
  }
}

//comprar o ingresso
function comprarPista(quantidade) {
  let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
  if (quantidade > qtdPista) {
    alert(
      "A quantidade de ingressos pedida é maior que a quantidade disponível!"
    );
  } else {
    qtdPista = qtdPista - quantidade;
    document.getElementById("qtd-pista").textContent = qtdPista;
    alert("Compra realizada com sucesso!");
  }
}

function comprarSuperior(quantidade) {
  let qtdSuperior = parseInt(
    document.getElementById("qtd-superior").textContent
  );
  if (quantidade > qtdSuperior) {
    alert(
      "A quantidade de ingressos pedida é maior que a quantidade disponível!"
    );
  } else {
    qtdSuperior = qtdSuperior - quantidade;
    document.getElementById("qtd-superior").textContent = qtdSuperior;
    alert("Compra realizada com sucesso!");
  }
}

function comprarInferior(quantidade) {
  let qtdInferior = parseInt(
    document.getElementById("qtd-inferior").textContent
  );
  if (quantidade > qtdInferior) {
    alert(
      "A quantidade de ingressos pedida é maior que a quantidade disponível!"
    );
  } else {
    qtdInferior = qtdInferior - quantidade;
    document.getElementById("qtd-inferior").textContent = qtdInferior;
    alert("Compra realizada com sucesso!");
  }
}
