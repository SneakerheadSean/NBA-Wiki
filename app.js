// External API used for NBA data.
const DOMAIN = "https://www.balldontlie.io/api/v1/players";

const input = document.querySelector("#search-bar");
const button = document.querySelector("#search");
const results = document.querySelector("#results");
const imageResults = document.querySelector(".insertImage");
let playersData = null;

// Below is the code used to return data which was prompted by the user's input

const nbaPlayers = async () => {
  try {
    const nbaPlayersURL = `https://www.balldontlie.io/api/v1/players/?search=${input.value}`;
    const playersImagesURL =
      "https://data.nba.net/data/10s/prod/v1/2020/players.json";
    playersData = await axios.get(playersImagesURL);
    const response = await axios.get(nbaPlayersURL);
    showData(response.data.data, playersData.data.league.standard);
  } catch (error) {
    console.error(error);
  }
};

// Once the button is clicked, the function is called and the data is returned to the browser.

button.addEventListener("click", nbaPlayers);

// Data from the above API does not include NBA players' pictures. In order to solve for that, I created another function to take the user's input, retrieves the data from the first API and then uses the second api below to return the player's picture.

function showData(players, idArray) {
  results.innerHTML = "";

  const currentPlayer = idArray.find((player) => {
    return (
      player.firstName === players[0].first_name &&
      player.lastName === players[0].last_name
    );
  });

  // Once we have the player's ID, we can pass that data to API below and render that data to the browser.
  
  const playerImage = `http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${currentPlayer.personId}.png`;

  players.forEach((player) => {
    let playerData = `
    <h1 id="player-name">${player.first_name} ${player.last_name}</h1>
    <h4>Team:</h4>
    <h2>${player.team.full_name}</h2>
    <img src="${playerImage}"/>
    `;
    results.insertAdjacentHTML("beforeend", playerData);
  });
}
