const url = 'https://jsonserver-cachoeiras--dantonlucassaga.repl.co/Cachoeiras';
let Cachoeiras = [];
fetch(url)
    .then(function (response) { return response.json() })
    .then(function (dados) {
        Cachoeiras = dados;
        console.log('Dados de Cachoeiras Carregados!');
    });
