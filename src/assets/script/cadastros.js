
const user = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
const apUrl2 = "https://eventsnow3--luiz-felipef215.repl.co/services"

document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('myServices');

    // Replace 'yourUserId' with the actual user ID you want to filter
    const userId = user.id; // Replace with your actual user's userId

    // Fetch data from a JSON endpoint
    fetch('https://eventsnow3--luiz-felipef215.repl.co/services') // Endpoint for services
        .then(response => response.json())
        .then(data => {
            // Filter services based on userId
            const userServices = data.filter(service => service.userId === userId);
            console.log(userServices)
            // Create cards using innerHTML for filtered services
            userName.innerHTML = `<h1 class="text mb-4">${user.nome}</h1>`


            cardContainer.innerHTML += userServices.map(service => `
            <div class="col">
            <div class="card">
              <img src="${service.images[0].image}" class="card-img-top" alt="..." style="width: 250px; height: 200px;">
              <div class="card-body">
                <h5 class="card-title" style="text-align: center;">${service.name}</h5>
                <p class="card-text"></p>
              </div>
              <div class="mb-3 d-flex justify-content-around">
                <button class="btn" id="botao">Informações</button>
              </div>
            </div>
          </div>
            `).join('');
        })
        .catch(error => console.error('Error fetching data:', error));
});



async function addService (servName, servDesc, servState, servCity, servLoc, servPhoto1, servPhoto2, servPhoto3, servPhoto4, servPhoto5, servPhoto6) {
  
        // Cria um objeto de usuario para o novo usuario 
        let servico = { "userId": user.id, "name": servName, "desc": servDesc, "state": servState, "city": servCity, "location": servLoc, "images": [{"image": servPhoto1},{"image": servPhoto2},{"image": servPhoto3},{"image": servPhoto4},{"image": servPhoto5},{"image": servPhoto6}] };
        
        await fetch(apUrl2, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(servico),
        })
            .then(response => response.json())    
}