document.addEventListener('DOMContentLoaded', function () {
  const cardContainer = document.getElementById('myServices');

  fetch('https://eventsnow3--luiz-felipef215.repl.co/services')
      .then(response => response.json())
      .then(data => {
          cardContainer.innerHTML += data.map(service => `
              <div class="col" id="servico">
                  <div class="card">
                    
                      <img src="${service.images[0].image}" class="card-img-top" alt="..." style="height: 250px;">
                      <div class="card-body" style="height: 100px;">
                          <h5 class="card-title">${service.name}</h5>
                          <p class="card-text text-truncate">${service.introduction}</p>
                      </div>
                      <div class="mb-3 d-flex justify-content-around">
                          <a href="servico.html#${service.id}"><button class="btn" id="botao">Contratar</button></a>
                      </div>
                  </div>
              </div>
          `).join('');

          const filterElement = document.getElementById("filtro");
          const cards = document.querySelectorAll("#servico");

          filterElement.addEventListener('input', filterCards);

          function filterCards() {
              const filterText = filterElement.value.toLowerCase();

              for (const card of cards) {
                  const title = card.querySelector('.card-title').textContent.toLowerCase();

                  if (!title.includes(filterText)) {
                      card.style.display = "none";
                  } else {
                      card.style.display = "block";
                  }
              }
          }
      })
      .catch(error => console.error('Error fetching data:', error));
});