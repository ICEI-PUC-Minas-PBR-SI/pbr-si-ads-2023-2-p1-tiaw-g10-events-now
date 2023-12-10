
    const filterElement = document.getElementById("filtro")
    const cards = document.querySelectorAll("#servico")
    filterElement.addEventListener('input', filterCards)

    function filterCards(){
      if (filterElement.value != ''){
          for (let card of cards){
            let title = card.querySelector('h5')

            title = title.textContent.toLowerCase()

            let filterText = filterElement.value.toLowerCase()
            console.log(title)

            if(!title.includes(filterText)){
                card.style.display = "none"
            }
            else{
              card.style.display = "block"
            }
          }
      }

      else{
          for (let card of cards){
            card.style.display ="block"
          }
      }
    }