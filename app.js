// External API used for data. 
const DOMAIN = "https://www.balldontlie.io/api/v1/players"

const input = document.querySelector('#search-bar')
const button = document.querySelector('#search')
const results = document.querySelector('#results')

const nbaPlayers = async () => {
  try {
    const nbaPlayersURL = `https://www.balldontlie.io/api/v1/players/?search=${input.value}`
    const response = await axios.get(nbaPlayersURL)
    showData(response.data.data)

        } catch (error) {
      console.error(error)
    }
}

// nbaPlayers()

button.addEventListener('click', nbaPlayers)

function showData(players) {
  results.innerHTML = ""
  players.forEach(player => {
    
    let playerData = `
    <h1 id="player-name">${player.first_name} ${player.last_name}</h1>
    <h4>Team:</h4>
    <h2>${player.team.full_name}</h2>
    `
    
    results.insertAdjacentHTML('beforeend', playerData)
  });

}