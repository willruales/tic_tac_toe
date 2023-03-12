let tableArray = [["", "", ""], ["", "", ""], ["", "", ""]]
let testArray = []

let domTable = document.querySelectorAll("td")
let tArray = Array.from(domTable)
console.log(tArray)

domTable.forEach(function (elem, index) {
    let row = elem.parentElement
    let cell = elem.cellIndex
    let rownum = row.rowIndex
    //elem.innerText = "ping"
    elem.addEventListener("click", function (e) {
        if (elem.innerText === "") {
            console.log("pingping", table(elem, rownum, cell, index))
        }

    });

});
console.log(domTable)

const playerFactory = (name, mark, turn) => {
    const sayHello = () => console.log('hello!');
    return { name, mark, turn };
};


let player1 = playerFactory('player1', "o", true)
let player2 = playerFactory("player2", "X", false)

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




let table = (function (x, y, z, index) {
    if (playerTurn.currentPlay() == player1) {
        testArray.push(index)
        x.textContent = player1.mark
        player1.turn = false
        player2.turn = true
    }
    else if (playerTurn.currentPlay() == player2) {
        x.textContent = player2.mark
        player1.turn = true
        player2.turn = false
    }
})
//table()



const checkWinner = () => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (combo of winningCombinations) {
        if (combo = testArray) { return console.log("works") }
        else {

        }
    }
}