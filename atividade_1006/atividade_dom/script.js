// 2) Crie dois exemplos usando os métodos do objeto document:
// a. getElementById();
// b. getElementsByTagName();
function mudarTexto(){
    document.getElementById("titulo").innerText = "🍳 Receita de Omelete"
}

function colorirTexto(){
    var itens = document.getElementsByTagName("li");
    for(var i =0; i < itens.length; i++){
        itens[i].style.color = "pink"
        itens[i].style.fontWeight = "bold"
    }
}

// 3) Crie um código que conte o número de parágrafos dentro de uma div e exiba o
// resultado em uma outra div.
let passos = document.getElementById("conteudo").getElementsByClassName("passo");
document.getElementById("resultado").textContent = "Total de passos: " + passos.length;


// 4) Crie um segundo botão chamado “limpar” que limpe o conteúdo do texto do
// parágrafo.
var botao = document.getElementById("botao");
var limpar = document.getElementById("limpar");

botao.addEventListener("click", function () {
  document.getElementById("paragrafo").textContent = "Não mexa os ovos depois de despejar na frigideira, deixe cozinhar em fogo médio-baixo sem mexer até começar a firmar nas bordas.";
});

limpar.addEventListener("click", function () {
  document.getElementById("paragrafo").textContent = "";
});

// 5) Qual a diferença entre as propriedades textContent, innerText e innerHTML dos
// elementos HTML? Cite exemplos.
// resposta: 
// textContent: retorna todo o texto e elementos;
// innerText: retorna apenas o texto visível;
// innerHTML: retorna o conteudo HTML(tags).HTML

// exemplo
var el = document.getElementById("exemplo");
console.log(el.textContent); 
console.log(el.innerText); 
console.log(el.innerHTML);

// 6) Crie um exemplo em que uma propriedade CSS de um elemento HTML é alterada
// via DOM baseada na documentação da página:
// https://www.w3schools.com/js/js_htmldom_css.asp
function destacar() {
    let destaque = document.getElementById("destaque");
    destaque.style.color = "orange";
    destaque.style.fontWeight = "bold";
    destaque.style.backgroundColor = "#ffffcc";
}

// 7) Criar um código que copie o conteúdo de uma caixa de texto para outra só que em
// caixa alta.
function copiarMaiusculo() {
    let texto = document.getElementById("entrada").value;
    document.getElementById("saida").value = texto.toUpperCase();
}

// 8) Cria código que tenha botão de alto contraste que alterne a cor de fundo do body
// para preto e cor do texto para branco. Adicionalmente, crie um botão para resetar
// as cores originais.
function modoContraste() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  
  const container = document.querySelector(".container");
  if (container) {
    container.style.backgroundColor = "#222";
    container.style.color = "white";
  }
}

function resetarCores() {
  document.body.style.backgroundColor = "";
  document.body.style.color = "";

  const container = document.querySelector(".container");
  if (container) {
    container.style.backgroundColor = "";
    container.style.color = "";
  }
}


// 9) Crie um script acionado por botões que aumentem o tamanho do texto de toda a
// página e outro que faça o contrário.

function aumentarFonte() {
  document.body.style.textTransform = "uppercase";
}

function diminuirFonte() {
  document.body.style.textTransform = "lowercase";
}

// 10) Crie uma pequena calculadora com as 4 operações. A operação deve ser
// selecionada de botões de radio. Para isso, teste a propriedade selected para
// descobrir qual operação está selecionada.
function calcular() {
    const qtd1 = parseFloat(document.getElementById("qtd1").value);
    const qtd2 = parseFloat(document.getElementById("qtd2").value);
    const operacao = document.querySelector('input[name="op"]:checked').value;
    let resultado;

    if (isNaN(qtd1) || isNaN(qtd2)) {
      document.getElementById("resultadoCalculo").textContent = "Por favor, insira números válidos!";
      return;
    }

    switch (operacao) {
      case "+":
        resultado = qtd1 + qtd2;
        break;
      case "-":
        resultado = qtd1 - qtd2;
        break;
      case "*":
        resultado = qtd1 * qtd2;
        break;
      case "/":
        if (qtd2 === 0) {
          document.getElementById("resultadoCalculo").textContent = "Não é possível dividir por zero!";
          return;
        }
        resultado = qtd1 / qtd2;
        break;
      default:
        resultado = 0;
    }

    document.getElementById("resultadoCalculo").textContent = `Resultado: ${resultado.toFixed(2)} calorias`;
  }
// 11) Pesquise como criar elementos e adicione o conteúdo de uma caixa de texto em
// uma lista não ordenada.
function adicionarIngrediente() {
    const input = document.getElementById("novoIngrediente");
    const lista = document.querySelector("body > ul"); // pega o primeiro <ul> que tem seus ingredientes originais
    const ingrediente = input.value.trim();
  
    if (ingrediente === "") {
      alert("Por favor, digite um ingrediente.");
      return;
    }
  
    // cria novo <li> e adiciona na lista original
    const li = document.createElement("li");
    li.textContent = ingrediente;
    lista.appendChild(li);
  
    // limpa o input
    input.value = "";
  
    // atualiza a saída mostrando toda a lista (ingredientes originais + os novos)
    const itens = lista.querySelectorAll("li");
    const nomesIngredientes = Array.from(itens).map(item => item.textContent);
    document.getElementById("saida").value = nomesIngredientes.join(", ");
}

// 12) Repita o exercício anterior adicionando o conteúdo da caixa de texto em um
// elemento de um select.
function adicionarNoSelect() {
    const input = document.getElementById("novoIngredienteSelect");
    const select = document.getElementById("selectIngredientes");
    const ingrediente = input.value.trim();
  
    if (ingrediente === "") {
      alert("Por favor, digite um ingrediente.");
      return;
    }
  
    // Cria uma nova opção e adiciona no select
    const option = document.createElement("option");
    option.textContent = ingrediente;
    select.appendChild(option);
  
    // Limpa o campo de entrada
    input.value = "";
  }
  