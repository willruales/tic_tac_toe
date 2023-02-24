let tableArray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]


const playerFactory = (name, mark, turn) => {
    const sayHello = () => console.log('hello!');
    return { name, mark, turn };
};

const player1 = playerFactory('player1', "o", true);
const player2 = playerFactory("player2", "X", false)
console.log(player1)

let playerTurn = (function () {
    let currentPlay = () => {
        console.log("innerworks")
        if (player1.turn = true) { return player1 }
        else if (player2.turn = true) return player2
    }
    return {
        currentPlay

    }
})();




let table = (function () {
    if (playerTurn.currentPlay() == player1) {
        console.log("deeperworks")
        tableArray[0][0] = player1.mark
        player1.turn = false
        player2.turn = true
    }
    else if (playerTurn.currentPlay() == player2) {
        tableArray[0][1] = player1.mark
        player1.turn = true
        player2.turn = false
    }
})

table()
console.log(tableArray)

console.log(player1, player2)
