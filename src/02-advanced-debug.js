console.log('Advanced debugging example running.');

function goodPractices() {
  let game = gameObject
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      let data = teamObj.players;
      for (let key in data) {
      }
    }
  }
}

goodPractices();