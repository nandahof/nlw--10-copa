function createGame(player1, hour, player2) {
  return `
   <li>
       <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}" />
       <strong>${hour}</strong>
       <img src="./assets/${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
<div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>

          <ul>
           ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("02/11", "sexta", createGame("brazil", "16:00", "cameroon")) +
  createCard("23/11", "quarta", createGame("germany", "10:00", "japan")) +
  createCard(
    "24/11",
    "quinta",
    createGame("uruguay", "10:00", "south korea") +
    createGame("brazil", "16:00", "serbia") 
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  ) 
