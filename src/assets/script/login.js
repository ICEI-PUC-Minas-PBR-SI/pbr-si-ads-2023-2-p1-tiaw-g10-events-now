// Página inicial de Login
const LOGIN_URL = "login.html";
const apiUrl = 'https://eventsnow3--luiz-felipef215.repl.co/users';


// Objeto para o banco de dados de usuários baseado em JSON
var db_usuarios = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};



// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp () {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    let usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {usuarioCorrente = JSON.parse (usuarioCorrenteJSON);}
    
    // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
    // Obtem a string JSON com os dados de usuários a partir do localStorage
    var usuariosJSON = localStorage.getItem('db_usuarios');

    // Verifica se existem dados já armazenados no localStorage
    if (!usuariosJSON) {  // Se NÃO há dados no localStorage        
       
    }
    else {db_usuarios = JSON.parse(usuariosJSON); // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
    }
};

// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
async function checkCredentials(email, password) {
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Check if any user in the data has the provided login and password
        const match = data.find(user => user.email === email && user.password === password);
        
        if(!!match){
            usuarioCorrente.id = match.id;
            usuarioCorrente.login = match.login;
            usuarioCorrente.email = match.email;
            usuarioCorrente.nome = match.name;

            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
        sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
        sessionStorage.setItem('usuarioCorrente_login', usuarioCorrente.login);
        sessionStorage.setItem('usuarioCorrente_email', usuarioCorrente.email);
        sessionStorage.setItem('usuarioCorrente_nome', usuarioCorrente.nome);
        }
        return !!match; // Convert match result to a boolean     
    })
      
  }  

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser () {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    window.location = LOGIN_URL;
}

initLoginApp ();


// função para gerar códigos randômicos a serem utilizados como código de usuário
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function readUsers() {
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })    
}

// Function to fetch user data from the API
async function fetchUserData() {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    return jsonData;
  }
  
  // Function to check if a user or email already exists
  function isUserOrEmailExists(jsonData, login, email) {
    return jsonData.some(user => user.login === login || user.email === email);
  }

async function addUser (nome, login, senha, email) {
    const jsonData = await fetchUserData();

    if (!isUserOrEmailExists(jsonData, login, email)) {
        // Cria um objeto de usuario para o novo usuario 
        let newId = generateUUID ();
        let usuario = { "id": newId, "login": login, "password": senha, "name": nome, "email": email };
        
        // Inclui o novo usuario no banco de dados baseado em JSON
        //db_usuarios.usuarios.push (usuario);
        // Salva o novo banco de dados com o novo usuário no localStorage
        localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));
        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        })
            .then(response => response.json())
        window.location.href = 'login.html'
    } else alert("Usuário ou e-mail já cadastrado.")
}

function updateUser(id, user) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(response => response.json())
       
}

function deleteUser(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        
}
