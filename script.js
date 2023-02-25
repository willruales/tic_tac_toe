let tableArray = [[1, 2, 3], [0, 0, 0], [0, 0, 0]]
let newTable = document.createElement('table')

for (let row of tableArray) {

    newTable.insertRow();

    for (let cell of row) {

        let newCell = newTable.rows[newTable.rows.length - 1].insertCell();
        newCell.addEventListener("click", function () { console.log(cell), table() });


        newCell.textContent = cell;
    }
}

document.body.appendChild(newTable);



const playerFactory = (name, mark, turn) => {
    const sayHello = () => console.log('hello!');
    return { name, mark, turn };
};

// const myObj = {
//     player1: playerFactory('player1', "o", true),
//     player2: playerFactory("player2", "X", false),
//     switch: function () {
//         console.log("spank")
//         this
//     },
// }

let player1 = playerFactory('player1', "o", true)
let player2 = playerFactory("player2", "X", false)
//myObj.switch()
// console.log(myObj.player1)

let playerTurn = (function () {
    let currentPlay = () => {
        console.log("innerworks")
        if (player1.turn == true || player2.turn == false) { return player1 }
        else if (player2.turn == true || player1.turn == false) return player2
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
//table()


console.log(tableArray)

console.log(player1, player2)
