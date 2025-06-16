
function getById(id){
    return document.getElementById(id);
}

function getBotao(id, funcao){
    getById(id).addEventListener('click', funcao);
    return getById(id);
}

let botaoErro =
    getBotao('botaoErro', () => {
        const texto = getById('erro').value;
        criarMensagemErro('mensagemErro', texto);
    });

function criarMensagemErro(id, mensagem){
    var errorMessage = getById(id);
    var textoErro = mensagem.trim();

    if(textoErro === ""){
        errorMessage.textContent = "";
        errorMessage.classList.add('oculto');
        return;
    }

    errorMessage.textContent = textoErro;
    errorMessage.classList.remove('oculto');

    setTimeout(function() {
        errorMessage.classList.add('oculto');
        errorMessage.textContent = "";
    }, 3000);
}

let botaoExibir =
    getBotao('botaoExibir', exibirConteudo);

function exibirConteudo(){
    let conteudo = getById('caixaDeTexto').value.trim();
    document.getElementById('conteudo').innerHTML = conteudo;

    if(conteudo === ""){
        criarMensagemErro('caixaErro', "O campo deve estar preenchido!");
    } else {
        getById('conteudo').textContent = conteudo;
        criarMensagemErro('caixaErro', "");
    }
}

let botaoCalcular =
    getBotao('botaoCalcular', calcularEngajamento);

function calcularEngajamento(){
    let interacoes = getById('interacoes').value.trim();
    let visualizacoes = getById('visualizacoes').value.trim();
    let erro = getById('mensagemErro2');
    let resultado = getById('resultado');

    erro.classList.add('oculto');
    erro.textContent = "";
    resultado.textContent = "";

    if(interacoes === "" || visualizacoes === ""){
        criarMensagemErro('mensagemErro2', "Os campos devem estar preenchidos!");
        return;
    }

    let numInteracoes = parseFloat(interacoes);
    let numVisualizacoes = parseFloat(visualizacoes);

    if(isNaN(numInteracoes) || isNaN(numVisualizacoes) || numVisualizacoes === 0){
        criarMensagemErro('mensagemErro2', "Números inválidos ou número de visualizações igual a zero.");
        return;
    }

    let taxa = (numInteracoes/numVisualizacoes) * 100;
    criarMensagemErro('mensagemErro2', "");
    resultado.textContent = `Taxa de Engajamento: ${taxa.toFixed(2)}%`;
}

let botaoUpload =
    getBotao('botaoUpload', carregarImagem);

function carregarImagem(){
    let uploadImagem = getById('uploadImagem');
    let resultado = getById('resultado2');

    let arquivoSelecionado = uploadImagem.files[0];

    resultado.innerHTML = "";

    if(!arquivoSelecionado){
        criarMensagemErro('mensagemErro3', "Nenhum arquivo foi selecionado.");
        return;
    }

    let img = document.createElement('img');
    img.src = URL.createObjectURL(arquivoSelecionado);
    img.alt = "Imagem carregada";
    resultado.appendChild(img);
}

let selectImagem = getById('selectImagem');
selectImagem.addEventListener('change', exibirImagemSelecionada);

function exibirImagemSelecionada(){
    let caminho = selectImagem.value;
    let imagem = getById('imagemSelecionada');

    imagem.innerHTML = "";

    if(caminho === ""){
        criarMensagemErro('mensagemErro4', 'Nenhuma imagem selecionada.');
        return;
    }

    criarMensagemErro('mensagemErro4', "");

    let img = document.createElement('img');
    img.src = caminho;
    img.alt = "Imagem selecionada";
    img.style.maxWidth = "300px";
    img.style.marginTop = "10px";
    imagem.appendChild(img);
}

let botaoEnviar =
    getBotao('enviarBtn', enviarSelecao);

function enviarSelecao() {
    let redes = document.getElementsByName('redesSociais');
    let marcadas = "";
  
    for (let i = 0; i < redes.length; i++) {
      if (redes[i].checked) {
        marcadas += redes[i].value + "<br>";
      }
    }
  
    if (marcadas === "") {
      criarMensagemErro('mensagemErro5', 'Pelo menos um checkbox deve estar marcado!');
      getById('redesSelecionadas').innerHTML = "";
      return;
    }
  
    criarMensagemErro('mensagemErro5', '');
    getById('redesSelecionadas').innerHTML = marcadas;
}

let botaoAdicionar =
    getBotao('adicionarHashtag', adicionarHashtag);
let botaoRemover = 
    getBotao('removerHashtag', removerHashtag);
let botaoLimpar = 
    getBotao('limparHashtags', limparHashtags);

function adicionarHashtag() {
    let hashtag = getById('hashtag');
    let input = hashtag.value.trim();
    let select = getById('listaHashtags');
    let erro = 'mensagemErroHashtag';

    if (input === "" || input.length < 2) {
        criarMensagemErro(erro, "A hashtag deve ter pelo menos 2 caracteres.");
        return;
    }

    if (!input.startsWith('#')) {
        input = '#' + input;
    }

    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === input) {
            criarMensagemErro('mensagemErroHashtag', 'Hashtag repetida.');
            return;
        }
    }

    if (select.options.length >= 5) {
        criarMensagemErro(erro, "Máximo de 5 hashtags atingido.");
        return;
    }

    const option = document.createElement('option');
    option.value = input;
    option.textContent = input;
    select.appendChild(option);
    hashtag.value = "";
    criarMensagemErro(erro, ""); 
}

function removerHashtag() {
    let lista = getById('listaHashtags');
    
    let selecionadas = lista.selectedOptions;
    
    if (selecionadas.length === 0) {
        criarMensagemErro('mensagemErroHashtag', "Selecione uma hashtag para remover!");
        return;
    }
    
    for (let i = selecionadas.length - 1; i >= 0; i--) {
        lista.removeChild(selecionadas[i]);
    }
    
    criarMensagemErro('mensagemErroHashtag', "");
}

function limparHashtags(){
    let lista = getById('listaHashtags');
    lista.innerHTML = "";
}

let ativosDisponiveis = getById('ativosDisponiveis');
let carteiraInvestimentos = getById('carteiraInvestimentos');

let botaoDireita = 
    getBotao('moverParaDireitaBtn', () =>{
        moverAtivos(ativosDisponiveis, carteiraInvestimentos);
        atualizarBotoes();
    });

let botaoEsquerda = 
    getBotao('moverParaEsquerdaBtn', () =>{
        moverAtivos(carteiraInvestimentos, ativosDisponiveis);
        atualizarBotoes();
    });

function moverAtivos(origem, destino){
    let selecionados = Array.from(origem.selectedOptions);
    
    if(selecionados.length === 0){
        criarMensagemErro('mensagemErroAtivos', "Ação inválida! Selecione um ativo.");
        return;
    }

    for (let i = selecionados.length - 1; i >= 0; i--) {
        const opt = selecionados[i];
        origem.removeChild(opt);
        destino.appendChild(opt);
    }
}

function atualizarBotoes(){
    botaoDireita.disabled = ativosDisponiveis.options.length === 0;
    botaoEsquerda.disabled = carteiraInvestimentos.options.length === 0;
}
