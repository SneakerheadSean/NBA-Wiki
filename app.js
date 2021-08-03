// External API used for data. 
const DOMAIN = "https://www.balldontlie.io/api/v1/players"

const input = document.querySelector('#search-bar')
const button = document.querySelector('#search')
const results = document.querySelector('#results')
let playersData = null;

const nbaPlayers = async () => {
  try {
    const nbaPlayersURL = `https://www.balldontlie.io/api/v1/players/?search=${input.value}`
    const playersImagesURL = "https://data.nba.net/data/10s/prod/v1/2020/players.json"
    playersData = await axios.get(playersImagesURL)
    const response = await axios.get(nbaPlayersURL)
    showData(response.data.data, playersData.data.league.standard)
    // console.log(playersData.data.league.standard)
        } catch (error) {
      console.error(error)
    }
}

// nbaPlayers()

button.addEventListener('click', nbaPlayers)

function showData(players, idArray) {
  results.innerHTML = ""

  const currentPlayer = idArray.find((player) => {
    return player.firstName === players[0].first_name && player.lastName === players[0].last_name
  })
  console.log(currentPlayer)
  const playerImage = `http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${currentPlayer.personId}.png`
  playerImages(playerImage)

  players.forEach(player => {
    
    let playerData = `
    <h1 id="player-name">${player.first_name} ${player.last_name}</h1>
    <h4>Team:</h4>
    <h2>${player.team.full_name}</h2>
    `
    
    results.insertAdjacentHTML('beforeend', playerData)
  });

}

const playerImages = async (playerPhoto) => {
  try {
    // const playersImagesURL = "https://data.nba.net/data/10s/prod/v1/2020/players.json"
    // const response = await axios.get(playerPhoto)
    // console.log(response)
    toDataURL(playerPhoto, function(dataUrl) {
      // console.log('RESULT:', dataUrl.split(",")[1])
      const imageData = `<img src=${dataUrl.split(",")[1]}/>`
      results.insertAdjacentHTML('beforeend', imageData)
    })
  } catch (error) {
    console.error(error)
  }



}

function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}
