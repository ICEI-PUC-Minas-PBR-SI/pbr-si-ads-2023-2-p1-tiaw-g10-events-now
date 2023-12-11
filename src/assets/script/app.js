// const url = 'https://jsonserver-cachoeiras--dantonlucassaga.repl.co/Cachoeiras';
// let Cachoeiras = [];
// let Destaques = [];
// fetch(url)
//     .then(function (response) { return response.json() })
//     .then(function (dados) {
//         Cachoeiras = dados;
//         console.log('Dados de Cachoeiras Carregados!');

//         const urlDestaques = 'https://jsonserver-cachoeiras--dantonlucassaga.repl.co/Destaques';

//         fetch(urlDestaques)
//             .then(function (response) { return response.json() })
//             .then(function (dados) {
//                 Destaques = dados;
//                 console.log('Dados de Destaques Carregados!');
//             });
//     });


// let fotos = [
// {"id": 1, "foto"}


// ]






// const url = 'https://jsonserver-1.pedrohenriquel5.repl.co/imagensCasamento';
// let imagensCasamento = [];
// fetch(url)
//     .then(function (response) { return response.json() })
//     .then(function (dados) {
//         imagensCasamento = dados;
//         console.log('Dados de  Carregados!');
//     });


//     carregarDados()
//     .then(() => {
//         console.log('Cachoeiras:', Cachoeiras);
//         console.log('Destaques:', Destaques);
//         console.log('Fotos:', Fotos);
//     })
//     .catch(error => {
//         console.error('Erro ao carregar dados:', error);
//     });
// let imagensCasamento = [];



function carregarDados() {
    const url = 'https://jsonserver-1.pedrohenriquel5.repl.co/imagensCasamento';

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar dados');
            }
            return response.json();
        })
        .then(dados => {
            imagensCasamento = dados; // Atribua os dados à variável global
            console.log('imagensCasamento dentro de carregarDados:', imagensCasamento); // Adicione este log
            return dados; // Retorna os dados se necessário
        });
}




document.addEventListener('DOMContentLoaded', function () {
    carregarDados().then(function () {
        var galeriaCasamento = document.getElementById('galeriaCasamento');
        var strTextoHTML = "";
// alert(imagensCasamento.length);
        for (var i = 0; i < imagensCasamento.length; i++) {
            var galeria = imagensCasamento[i];

            strTextoHTML += `<div class="col-md-4 mb-4">
    <div class="card h-100">
        <a href="detalhe_album.html?id=${galeria.id}" class="stretched-link">
            <img src="${galeria.caminho}" class="card-img-top" alt="Imagem 1" style="object-fit: cover; height: 200px;">
        </a>
        <div class="card-body">
            <h5 class="card-title">${galeria.id}</h5>
            <p class="card-text">${galeria.descricao}</p>
        </div>
    </div>
</div>
<style>
    .card {
        transition: transform 0.3s ease, box-shadow 0.3s ease; 
    }
    .card:hover {
        transform: scale(1.05); 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 1;
    }
</style>`;
        }
        galeriaCasamento.innerHTML = strTextoHTML; 

    });
});













// document.getElementById('btfnclick').addEventListener('click', carregarDados)
// function carregarDados() {


// }

// let imagensCasamentoJSON = {
//     "imagensCasamento": [
//         { "id": "imagem1", "caminho": "https://lh3.googleusercontent.com/pw/ADCreHe4GCvNc1t-4lFSOi4LXvM_M8fRmzQ9SPQyqgbOCO_1RhzLKCL08zU2WobUSwe8z2h8UC1zYcBOpkR1PTLoRFviRmIkhkKxw8tKOzf3Br0m_r9-1xZaHt8VL46KigOoOgQOAHd0RJm745sJ0CcUNEn0=w845-h475-s-no-gm?authuser=0", "descricao": "Casamento imagem 1" },
//         { "id": "imagem2", "caminho": "imagens/casamento2.jpeg", "descricao": "Descrição da imagem 2" },
//         { "id": "imagem3", "caminho": "imagens/casamento3.jpeg", "descricao": "Descrição da imagem 3" },
//         // Adicione mais entradas conforme necessário
//     ]
// };
//   var galeriaCasamento = document.getElementById("galeriaCasamento");
//   // Itera sobre as imagens no JSON e adiciona à galeria
//   imagensCasamentoJSON.imagensCasamento.forEach(function(imagem) {
//     // Cria um elemento de coluna
//     var colElement = document.createElement("div");
//     colElement.classList.add("col-md-4", "col-sm-6");
//     // Cria um elemento de imagem
//     var imgElement = document.createElement("img");
//     imgElement.src = imagem.caminho;
//     imgElement.alt = imagem.descricao;
//     imgElement.classList.add("w-100", "mb-4");
//     // Define o ID da imagem
//     imgElement.id = imagem.id;
//     // Adiciona a imagem à coluna
//     colElement.appendChild(imgElement);
//     // Adiciona a coluna à galeria
//     galeriaCasamento.appendChild(colElement);
//   });




