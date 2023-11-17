const gameObject = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: "0",
          shoe: "16",
          points: "22",
          rebounds: "12",
          assists: "12",
          steals: "3",
          blocks: "1",
          slamDunks: "1"
        },
        "Reggie Evans": {
          number: "30",
          shoe: "14",
          points: "12",
          rebounds: "12",
          assists: "12",
          steals: "12",
          blocks: "12",
          slamDunks: "7"
        },
        "Brook Lopez": {
          number: "11",
          shoe: "17",
          points: "17",
          rebounds: "19",
          assists: "10",
          steals: "3",
          blocks: "1",
          slamDunks: "15"
        },
        "Mason Plumlee": {
          number: "1",
          shoe: "19",
          points: "26",
          rebounds: "12",
          assists: "6",
          steals: "3",
          blocks: "8",
          slamDunks: "5"
        },
        "Jason Terry": {
          number: "31",
          shoe: "15",
          points: "19",
          rebounds: "2",
          assists: "2",
          steals: "4",
          blocks: "11",
          slamDunks: "1"
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: "4",
          shoe: "18",
          points: "10",
          rebounds: "1",
          assists: "1",
          steals: "2",
          blocks: "7",
          slamDunks: "2"
        },
        "Bismak Biyombo": {
          number: "0",
          shoe: "16",
          points: "12",
          rebounds: "4",
          assists: "7",
          steals: "7",
          blocks: "15",
          slamDunks: "10"
        },
        "DeSagna Diop": {
          number: "2",
          shoe: "14",
          points: "24",
          rebounds: "12",
          assists: "12",
          steals: "4",
          blocks: "5",
          slamDunks: "5"
        },
        "Ben Gordon": {
          number: "8",
          shoe: "15",
          points: "33",
          rebounds: "3",
          assists: "2",
          steals: "1",
          blocks: "1",
          slamDunks: "0"
        },
        "Brendan Haywood": {
          number: "33",
          shoe: "15",
          points: "6",
          rebounds: "12",
          assists: "12",
          steals: "22",
          blocks: "5",
          slamDunks: "12"
        }
      }
    }
  };

function homeTeamName() {
  let object = gameObject
  return object["home"]["teamName"]
}

console.log(homeTeamName())

//argument players name return # of points scored for that player
function numPointScored(playerName) {
  const homePlayers = gameObject.home.players
  const awayPlayers = gameObject.away.players

  if (homePlayers.hasOwnProperty(playerName)) {
    return homePlayers[playerName].points
  } else if (awayPlayers.hasOwnProperty(playerName)) {
    return awayPlayers[playerName].points
  } else {
    return "Player not found"
  }
}
console.log(numPointScored("DeSagna Diop"))

//argument that returns player name based on shoe size
function shoeSize(playerName) {
  const homePlayers = gameObject.home.players
  const awayPlayers = gameObject.away.players

  if (homePlayers.hasOwnProperty(playerName)) {
    return homePlayers[playerName].shoe
  } else if (awayPlayers.hasOwnProperty(playerName)) {
    return awayPlayers[playerName].shoe
  } else {
    return "Shoe size not found"
  }
}

console.log(shoeSize("Brendan Haywood"))

//Build a function that take arg of team name and returns array of teams colors
function teamColors(teamName) {
  const homeTeam = gameObject.home
  const awayTeam = gameObject.away
  if (homeTeam.teamName === teamName) {
    return homeTeam.colors
  } else if (awayTeam.teamName === teamName) {
    return awayTeam.colors
  } else {
    return "There is no team with that name"
  }
}
console.log(teamColors("Brooklyn Nets"))

//Build function that takes gameObject as paramater and returns team names in an array
function teamNames() {
  return [gameObject.home.teamName, gameObject.away.teamName]
}

console.log(teamNames(gameObject))

// Build a function that takes an argument of teamName and returns an array of jersey numbers for that team
function teamColors(teamName) {
  const homeTeam = gameObject.home;
  const awayTeam = gameObject.away;
  if (homeTeam.teamName === teamName) {
    const jerseyNumbers = Object.values(homeTeam.players).map(player => player.number)
    return jerseyNumbers
  } else if (awayTeam.teamName === teamName) {
    const jerseyNumbers = Object.values(awayTeam.players).map(player => player.number)
    return jerseyNumbers
  } else {
    return "That is not a valid team"
  }
}
console.log(teamColors("Brooklyn Nets"))


function playerStats(playerName) {
  const homePlayers = gameObject.home.players
  const awayPlayers = gameObject.away.players

  if (homePlayers.hasOwnProperty(playerName)) {
    return homePlayers[playerName]
  } else if (awayPlayers.hasOwnProperty(playerName)) {
    return awayPlayers[playerName]
  } else {
    return "Player not found"
  }
}
console.log(playerStats("Brendan Haywood"))


function BigShoeRebound(gameObject) {
  let playerWithLargestShoe = {};
  let largestShoeSize = 0;

  for (const team of [gameObject.home, gameObject.away]) {
    for (const playerName in team.players) {
      const player = team.players[playerName];
      if (player.shoe > largestShoeSize) { 
        largestShoeSize = player.shoe; 
        playerWithLargestShoe = player;
      }
    }
  }

  return playerWithLargestShoe.rebounds;
}
console.log(BigShoeRebound(gameObject))