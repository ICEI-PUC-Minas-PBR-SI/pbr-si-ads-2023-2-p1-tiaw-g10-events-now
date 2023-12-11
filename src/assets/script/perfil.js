//imagens e conteúdo
var fotousu = "<img src='assets/imagens/avatar1.png' alt='Imagem do avatar'>";

// Dados iniciais
var dados1 = [fotousu, "20 anos", "Procuro festa para casamento"];
var dados2 = ["Costumo de gostar de Lugares e ambientes rosas", "Gosto de cisnes e flores", "Procuro serviço barato e prático"];
var dados3 = ["Evento marcado para 24 de fevereiro"]
var dados4 = ["Buffet da JU", "Bolos da Camila"]
var dados5 = ["Rua Anton...- ...91"]

// Referência para a lista de dados
var dataList = document.getElementById("card-no-hover");

//Botoes clicados
function btn1(){
  trocarDados1();
  trocacor1(botao1);
}

function btn2(){
  trocarDados2();
  trocacor2(botao2);
}

function btn3(){
  trocarDados3();
  trocacor3(botao3);
}

function btn4(){
  trocarDados4();
  trocacor4(botao4);
}

function btn5(){
  trocarDados5();
  trocacor5(botao5);
}



// Função para trocar os dados para botao 1
function trocarDados1() {
  // Verifica qual conjunto de dados está atualmente sendo exibido
  var dadosAtuais = dataList.innerHTML === mostrardados(dados2, dados3, dados4, dados5) ? dados1 : dados1;
  
  // Atualiza o conteúdo da lista com o novo conjunto de dados
  dataList.innerHTML = mostrardados(dadosAtuais);
}

// Função para trocar os dados para botao 2
function trocarDados2() {
  // Verifica qual conjunto de dados está atualmente sendo exibido
  var dadosAtuais = dataList.innerHTML === mostrardados(dados1, dados3, dados4, dados5) ? dados2 : dados2;
  
  // Atualiza o conteúdo da lista com o novo conjunto de dados
  dataList.innerHTML = mostrardados(dadosAtuais);
}

// Função para trocar os dados para botao 3
function trocarDados3() {
  // Verifica qual conjunto de dados está atualmente sendo exibido
  var dadosAtuais = dataList.innerHTML === mostrardados(dados1, dados3, dados4, dados5) ? dados3 : dados3;
  
  // Atualiza o conteúdo da lista com o novo conjunto de dados
  dataList.innerHTML = mostrardados(dadosAtuais);
}

// Função para trocar os dados para botao 4
function trocarDados4() {
  // Verifica qual conjunto de dados está atualmente sendo exibido
  var dadosAtuais = dataList.innerHTML === mostrardados(dados1, dados2, dados3, dados5) ? dados4 : dados4;
  
  // Atualiza o conteúdo da lista com o novo conjunto de dados
  dataList.innerHTML = mostrardados(dadosAtuais);
}

// Função para trocar os dados para botao 5
function trocarDados5() {
  // Verifica qual conjunto de dados está atualmente sendo exibido
  var dadosAtuais = dataList.innerHTML === mostrardados(dados1, dados2, dados3, dados4) ? dados5 : dados5;
  
  // Atualiza o conteúdo da lista com o novo conjunto de dados
  dataList.innerHTML = mostrardados(dadosAtuais);
}

//MANIPULANDO A COR DO BOTÃO
// Adiciona um ouvinte de clique ao botão
document.getElementById("btn1").addEventListener("click", trocacor1); 
document.getElementById("btn2").addEventListener("click", trocacor2);
document.getElementById("btn3").addEventListener("click", trocacor3); 
document.getElementById("btn4").addEventListener("click", trocacor4); 
document.getElementById("btn5").addEventListener("click", trocacor5); 


function trocacor1() {
  var button = document.getElementById("btn2");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn3");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn4");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn5");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn1");
  button.classList.add("selecionado");
}


function trocacor2() {
  var button = document.getElementById("btn1");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn3");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn4");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn5");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn2");
  button.classList.add("selecionado");
}

function trocacor3() {
  var button = document.getElementById("btn1");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn2");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn4");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn5");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn3");
  button.classList.add("selecionado");
}

function trocacor4() {
  var button = document.getElementById("btn1");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn2");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn3");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn5");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn4");
  button.classList.add("selecionado");
}

function trocacor5() {
  var button = document.getElementById("btn1");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn2");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn3");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn4");
  button.classList.remove("selecionado");
  var button = document.getElementById("btn5");
  button.classList.add("selecionado");
}



//MANIPULANDO A TELA
// Função para criar a lista os dados
function mostrardados(dados) {
  return dados.join("<div></div>"+"<p></p>"+"<p></p>"+"<p></p>");
}

// Exibe os dados iniciais
dataList.innerHTML = mostrardados(dados1); trocacor1();
