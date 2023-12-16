// Dados de cadastro
var nome = sessionStorage.getItem('usuarioCorrente_nome')

//Retira usuário não cadastrado
function retirausuario() {
    if (nome == null) {//Caso  usuário não esteja logado
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
                document.getElementById('textAreaSolicitacaoDeOrca').value = '';
            }, 3000);
        } else {
            alert("Campo Vazio!");
        }
    });   
})

const galeriaCasamento = document.getElementById('galeriaCasamento');
const serviceName = document.getElementById('serviceName');
const serviceIntroduction = document.getElementById('serviceIntroduction');
const serviceLocation = document.getElementById('serviceLocation');

document.addEventListener('DOMContentLoaded', function() {
    var a = window.location.href.split('#')[1];
    const apiUrl = "https://eventsnow3--luiz-felipef215.repl.co/services"   

    fetch(`${apiUrl}/${a}`)

        .then(response => response.json())
        .then(data => {
            console.log(`${apiUrl}/${a}`)
            console.log(data)
            const serviceImg = data.images.filter(images => images.image != "");
            galeriaCasamento.innerHTML += serviceImg.map(service => `<div class="col">
            <div class="card h-100">
                <a href="#" class="stretched-link" >
                    <img src="${service.image}" class="card-img-top" alt="Imagem 1" style="object-fit: cover; height: 200px;">
                </a>             
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
        </style>`)
        
            serviceName.innerHTML=`<h1 class="bg-body-secondary rounded-4">${data.name}</h1>`
            serviceLocation.innerHTML=` <p><span>${data.city}</span>, <span>${data.state}</span></p>`
            serviceIntroduction.innerHTML= data.introduction
            serviceDescription.innerHTML= data.description
        
        })
});