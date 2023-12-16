
const filterElement = document.getElementById("filtro")
const cards = document.querySelectorAll("#servico")
filterElement.addEventListener('input', filterCards)

function filterCards() {
  if (filterElement.value != '') {
    for (let card of cards) {
      let title = card.querySelector('h5')

      title = title.textContent.toLowerCase()

      let filterText = filterElement.value.toLowerCase()
      console.log(title)

      if (!title.includes(filterText)) {
        card.style.display = "none"
      }
      else {
        card.style.display = "block"
      }
    }
  }

  else {
    for (let card of cards) {
      card.style.display = "block"
    }
  }
}

const user = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
const apUrl2 = "https://eventsnow3--luiz-felipef215.repl.co/services"

document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('myServices');

    // Replace 'yourUserId' with the actual user ID you want to filter

    // Fetch data from a JSON endpoint
    fetch('https://eventsnow3--luiz-felipef215.repl.co/services') // Endpoint for services
        .then(response => response.json())
        .then(data => {
            cardContainer.innerHTML += data.map(service => `
            <div class="col" id="servico">
              <div class="card">
                  <img src="${service.images[0].image}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${service.name}</h5>
                      <p class="card-text">${service.introduction}</p>
                  </div>
                  <div class="mb-3 d-flex justify-content-around">
                      
                    <a href="servico.html#${service.id}"><button class="btn" id="botao">Contratar</button></a>
                  </div>
              </div>
          </div>
            `).join('');
        })
        .catch(error => console.error('Error fetching data:', error));
});



