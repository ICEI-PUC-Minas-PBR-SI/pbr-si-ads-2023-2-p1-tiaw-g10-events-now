// Dados de cadastro
var nome = sessionStorage.getItem('usuarioCorrente_nome')

//Retira usuário não cadastrado
function retirausuario(){  
    if(nome == null)
    {//Caso  usuário não esteja logado
      window.location.href = 'login.html';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var modal = new bootstrap.Modal(document.getElementById('chatModal'));
    document.getElementById('btnAbrirModal').addEventListener('click', function () {
      var valueTextArea = document.getElementById('textAreaSolicitacaoDeOrca').value;
      if (valueTextArea.trim() !== '') {
        localStorage.setItem("msg", valueTextArea)
        modal.show();    
        setTimeout(function () {
          modal.hide();         
          document.getElementById('textAreaSolicitacaoDeOrca').value = ''; // Limpa o texto do textarea
        }, 3000);
      } else {
        alert("Campo Vazio!");
      }
    });
  });


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


document.getElementById('mensagem').innerText = retirausuario(); localStorage.getItem("msg");//retira usuário não cadastrado e depois exibe dados
