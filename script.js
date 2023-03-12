let tableArray = [["", "", ""], ["", "", ""], ["", "", ""]]

let domTable = document.querySelectorAll("td")
let tArray = Array.from(domTable)
console.log(tArray)

domTable.forEach(function (elem) {
    let row = elem.parentElement
    let cell = elem.cellIndex
    let rownum = row.rowIndex
    //elem.innerText = "ping"
    elem.addEventListener("click", function (e) {
        if (elem.innerText === "") { console.log("pingping", table(elem, rownum, cell)) }

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




let table = (function (x, y, z) {
    if (playerTurn.currentPlay() == player1) {
        tableArray[y][z] = player1.mark
        x.textContent = player1.mark
        player1.turn = false
        player2.turn = true
    }
    else if (playerTurn.currentPlay() == player2) {
        tableArray[y][z] = player2.mark
        x.textContent = player2.mark
        player1.turn = true
        player2.turn = false
    }
})
//table()


function findWinner() {
    console.log(tableArray.flat())
}