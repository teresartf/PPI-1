    // 2.a)
    document.getElementById("p1").innerHTML = "Exercício<br>DOM";

    // 2.b)
    const botoes = document.getElementsByTagName("button");

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.add("estilo-botoes");
    }

    // 3.
    const divParagrafos = document.getElementById("paragrafos");
    const paragrafos = divParagrafos.getElementsByTagName("p");
    
    const divR = document.getElementById("resultado")
    divR.textContent = `Quantidade de Parágrafos: ${paragrafos.length}`;

    //4.
    var botao = document.getElementById("botao");
    var paragrafo = document.getElementById("paragrafo");
    var textoOriginal = paragrafo.textContent;
    var textoAlternativo = "O texto deste parágrafo foi alterado!";

    botao.addEventListener("click", function() {
        if (paragrafo.textContent === textoOriginal) {
            paragrafo.textContent = textoAlternativo;
        } else {
            paragrafo.textContent = textoOriginal;
        }
    });

    var botaoLimpar = document.getElementById("botao_limpar");

    botaoLimpar.addEventListener("click", function() {
        var paragrafo = document.getElementById("paragrafo");
        paragrafo.textContent = "";
    });

    //6.
    var botao2 = document.getElementById("botao-2");
    var texto = document.getElementById("6-questao");

    botao2.addEventListener("click", function () {
        if (texto.style.color === "red") {
            texto.style.color = "navy";
        } else {
            texto.style.color = "red";
        }
    });

    //7.
    function copiarTexto() {
        var texto = document.getElementById("entrada").value;
        var textoMaiusculo = texto.toUpperCase();
        document.getElementById("saida").value = textoMaiusculo;
    }

    //8.
    function alterarBody() {
        document.body.classList.add("alto-contraste");
    } 
    
    function resetarBody() {
        document.body.classList.remove("alto-contraste");
    }  

    //9.

    let tamanho_fonte = 14;

    function aumentarTamanho() {
      if (tamanho_fonte < 32) {
        tamanho_fonte += 1;
        document.body.style.fontSize = tamanho_fonte + "px";
      }
    }

    function diminuirTamanho() {
      if (tamanho_fonte > 10) {
        tamanho_fonte -= 1;
        document.body.style.fontSize = tamanho_fonte + "px";
      }
    }

    //10.

function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacoes = document.getElementsByName("operacao");
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("valor").innerHTML = "Preencha todos os campos!";
        document.getElementById("valor-resultado").innerHTML = "";
        return;
    }

    let operacaoSelecionada = null;
    for (let op of operacoes) {
        if (op.checked) {
            operacaoSelecionada = op.value;
            break;
        }
    }

    switch (operacaoSelecionada) {
        case "soma":
            resultado = num1 + num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            break;
        case "divisao":
            resultado = num2 !== 0 ? (num1 / num2) : "Erro: divisão por zero!";
            break;
        default:
            resultado = "Selecione uma operação.";
    }

    document.getElementById("valor").innerHTML = `Resultado:`;
    document.getElementById("valor-resultado").innerHTML = ` ${resultado}`;
}