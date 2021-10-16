# Overview

## NBA Wiki

[NBA Wiki](https://sneakerheadsean.github.io/NBA-Wiki/)

## Description

An application that can be used to access NBA, NFL, and news information quickly.

## API and Data Sample
While looking through the data, I realized that this data source does not include pictures so below is another API that I used to display player images. 

1st API (NBA Player information only):

NBA API: https://www.balldontlie.io/#introduction

Code Snippet: 

```javascript
{
  "data":[
    {
      "id":237,
      "first_name":"LeBron",
      "last_name":"James",
      "position":"F",
      "height_feet": 6,
      "height_inches": 8,
      "weight_pounds": 250,
      "team":{
        "id":14,
        "abbreviation":"LAL",
        "city":"Los Angeles",
        "conference":"West",
        "division":"Pacific",
        "full_name":"Los Angeles Lakers",
        "name":"Lakers"
      }
    }
    ...
 ],
 "meta": {
    "total_pages": 50,
    "current_page": 1,
    "next_page": 2,
    "per_page": 25,
    "total_count": 9999
  }
}
```

2nd API (NBA Player Images)

![Player Photo](https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629630.png)

Note: The above link is to the NBA headshot of Ja Morant. Each player has a unique ID that can be used to display their picture.

## Wireframe

![wireframe](https://www.figma.com/file/S5UBWwkfoteOrfuh4DM3Md/NBA-WIki?node-id=0%3A1)

#### MVP 

- Properly Display Data from External API(s) 
- Successfully pull data from second API (NBA Player Images)
- Design works for desktop as well as mobile. 
- User can search for NBA players

#### PostMVP  

- Background color changes based on player's team colors
- Users can add favorite players to a watchlist
- Related team news is shown under the corresponding player

## Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|August 3| Pseudocode / actual code / Initial Clickable Model / MVP | Complete
|August 3| Styling with CSS | Complete
|August 5| PostMVP | Incomplete
|August 6| product Launch | Complete

## Priority Matrix

![Priority Matrix](https://github.com/SneakerheadSean/NBA-Wiki/files/6917951/Priority.Matrix.pdf)

## Timeframes

Below are the timeframes corresponding to each area of development. 

H - High Priority | 
S - Significant Priority (Next in line)

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML/CSS/JS Structure | H | 1.5hrs| 3hrs | 3hrs |
| Working with API | H | 4hrs| 2hrs | 2.5hrs |
| Working with 2nd API | H | 4hrs| 5hrs | 6hrs |
| CSS Styling | H | 5hrs| 4hrs | 6hrs |
| Post MVP | S | 3hrs| -hrs | -hrs |
| Total | H | 17.5hrs| 14hrs | 17.5hrs |

## Code Snippet

Below is a code snippet that shows how I fed data from one API into another, so I can get the NBA players' headshot to render to the browser. 

``` javascript

function showData(players, idArray) {
  results.innerHTML = ""

  const currentPlayer = idArray.find((player) => {
    return player.firstName === players[0].first_name && player.lastName === players[0].last_name
  })
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

```




