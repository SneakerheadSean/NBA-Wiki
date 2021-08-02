# Project Overview

## NBA Wiki

live site location: TBD

## Project Description

An application that can be used to access NBA player information quickly.

## API and Data Sample
While looking through the data, I realized that this data source does not include pictures so below is another API that I used to display player images. 

1st API (NBA Player information only):

NBA API: https://www.balldontlie.io/#introduction

Code Snippet: 

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

2nd API (NBA Player Images)

https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629630.png

Note: The above link is to the NBA headshot of Ja Morant. Each player has a unique ID that can be used to display there picture.

## Wireframes

https://www.figma.com/file/S5UBWwkfoteOrfuh4DM3Md/NBA-WIki?node-id=0%3A1  

#### MVP 

- Properly Display Data from External API(s) 
- Successfully pull data from second API (NBA Player Images)
- Design works for desktop as well as mobile. 
- User can search for NBA players

#### PostMVP  

- Background color changes based on player's team colors
- Users can add favorite players to a watchlist
- Related team news is shown under the corresponding player

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 3| Pseudocode / actual code / Initial Clickable Model / MVP | Incomplete
|August 4| Styling with CSS | Incomplete
|August 5| PostMVP | Incomplete
|August 6| Presentations | Incomplete

## Priority Matrix

[Priority Matrix.pdf](https://github.com/SneakerheadSean/NBA-Wiki/files/6917951/Priority.Matrix.pdf)

## Timeframes

Below are the timeframes corresponding to each area of development. 

H - High Priority | 
S - Significant Priority (Next in line)

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML/CSS/JS Structure | H | 1.5hrs| -hrs | -hrs |
| Working with API | H | 4hrs| -hrs | -hrs |
| Working with 2nd API | H | 4hrs| -hrs | -hrs |
| CSS Styling | H | 5hrs| -hrs | -hrs |
| Post MVP | S | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
