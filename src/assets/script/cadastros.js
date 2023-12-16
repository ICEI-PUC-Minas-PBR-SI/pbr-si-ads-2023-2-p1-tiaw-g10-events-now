const user = JSON.parse(sessionStorage.getItem('usuarioCorrente'));

document.addEventListener('DOMContentLoaded', function () {
  const user = JSON.parse(sessionStorage.getItem('usuarioCorrente'));

  // Check if the user is null
  if (user === null) {
    // You can redirect to the login page
    window.location.href = 'login.html';
  }
})

const apUrl2 = "https://eventsnow3--luiz-felipef215.repl.co/services"

document.addEventListener('DOMContentLoaded', function () {
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
              <img src="${service.images[0].image}" class="card-img-top" alt="..."  style="height: 250px;">
              <div class="card-body" style="height: 100px;">
                <h5 class="card-title" style="text-align: center;">${service.name}</h5>
                <p class="card-text"></p>
              </div>
              <div class="mb-3 d-flex justify-content-around">
                <button class="btn btn-now1" id="botao"><a href="servico.html#${service.id}" class="text-white" style="text-decoration: none;">Informações</a></button>
                <button class="delete-button btn btn-danger" data-user-id="${service.id}" id="deletebutton">Delete</button>
              </div>
            </div>
          </div>
            `).join('');
      document.addEventListener('DOMContentLoaded', function () {
        // Add event listeners to all delete buttons
        const deleteButtons = document.querySelectorAll('.delete-button');

        deleteButtons.forEach(button => {
          button.addEventListener('click', function () {
            // Get the user ID from the data attribute
            const userId = button.getAttribute('data-user-id');

            // Ask for user confirmation
            if (confirm("Are you sure you want to delete this user?")) {
              // If the user confirms, call the deleteUser function
              deleteUser(userId);
            }
          });
        });
      });


    })
    .catch(error => console.error('Error fetching data:', error));
});

async function addService(servName, servDesc, servBDesc, servState, servCity, servPhoto1, servPhoto2, servPhoto3, servPhoto4, servPhoto5, servPhoto6) {

  // Cria um objeto de usuario para o novo usuario 
  let servico = { "userId": user.id, "name": servName, "introduction": servBDesc, "description": servDesc, "state": servState, "city": servCity, "images": [{ "image": servPhoto1 }, { "image": servPhoto2 }, { "image": servPhoto3 }, { "image": servPhoto4 }, { "image": servPhoto5 }, { "image": servPhoto6 }] };

  await fetch(apUrl2, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(servico),
  })
    .then(response => response.json())
}

async function deleteService(id) {
  const apiUrl = "https://eventsnow3--luiz-felipef215.repl.co/services"
  await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
}

