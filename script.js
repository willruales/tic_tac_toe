let tableArray = [["", "", ""], ["", "", ""], ["", "", ""]]
let newTable = document.createElement('table')
function setFirst() {
    for (let row of tableArray) {

        newTable.insertRow();

        for (let cell of row) {

            let newCell = newTable.rows[newTable.rows.length - 1].insertCell();
            newCell.addEventListener("click", function () {
                console.log(cell), table(row, newCell)
            });


            newCell.textContent = cell;
        }
    }

    document.body.appendChild(newTable);


}

setFirst()


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




let table = (function (x) {
    newTable.innerHTML = ""
    if (playerTurn.currentPlay() == player1) {
        console.log("deeperworks")
        x = player1.mark
        player1.turn = false
        player2.turn = true
    }
    else if (playerTurn.currentPlay() == player2) {
        //tableArray[0][1] = player1.mark
        x.textContent = player2.mark
        player1.turn = true
        player2.turn = false
    }

    //tableArray[0][0] = playerTurn.currentPlay().mark
    //const show = tableArray[y]
    //console.log(show)
    //console.log(x)

    x.textContent = playerTurn.currentPlay().mark
    //e.preventDefault()
    //playerTurn.currentPlay
    setFirst()
})
//table()


console.log(tableArray)

console.log(player1, player2)
