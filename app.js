// External API used for data. 
const DOMAIN = "https://www.balldontlie.io/api/v1/players"

const input = document.querySelector('#search-bar')
const button = document.querySelector('#search')
const results = document.querySelector('#results')
const imageResults = document.querySelector('.insertImage')
let playersData = null;

const nbaPlayers = async () => {
  try {
    const nbaPlayersURL = `https://www.balldontlie.io/api/v1/players/?search=${input.value}`
    const playersImagesURL = "https://data.nba.net/data/10s/prod/v1/2020/players.json"
    playersData = await axios.get(playersImagesURL)
    const response = await axios.get(nbaPlayersURL)
    showData(response.data.data, playersData.data.league.standard)
  } catch (error) {
      console.error(error)
    }
}

button.addEventListener('click', nbaPlayers)

function showData(players, idArray) {
  results.innerHTML = ""

  const currentPlayer = idArray.find((player) => {
    return player.firstName === players[0].first_name && player.lastName === players[0].last_name
  })
  // console.log(currentPlayer)
  const playerImage = `http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${currentPlayer.personId}.png`
  
  players.forEach(player => {
    
    let playerData = `
    <h1 id="player-name">${player.first_name} ${player.last_name}</h1>
    <h4>Team:</h4>
    <h2>${player.team.full_name}</h2>
    <img src="${playerImage}"/>
    `
    results.insertAdjacentHTML('beforeend', playerData)
  });

}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}