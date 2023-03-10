let domTable = document.querySelectorAll("td")
let tArray = Array.from(domTable)
let testArray = []

domTable.forEach(function (elem, index) {
    elem.addEventListener("click", function (e) {
        if (elem.innerText === "") {
            table(elem, index), playgame()
        }

    });

});

const playerFactory = (name, mark, turn) => {
    const sayHello = () => console.log('hello!');
    return { name, mark, turn };
};
let player1 = playerFactory('player1', "o", true)
let player2 = playerFactory("player2", "X", false)


let table = (function (x, index) {

    let currentPlay = () => {
        if (player1.turn == true || player2.turn == false) { return player1 }
        else if (player2.turn == true || player1.turn == false) return player2
    }


    if (currentPlay() == player1) {
        testArray.push(index)
        x.textContent = player1.mark
        player1.turn = false
        player2.turn = true
    }
    else if (currentPlay() == player2) {
        x.textContent = player2.mark
        player1.turn = true
        player2.turn = false
    }
})

let playgame = (function () {
    if (testArray.length >= 3) { check(testArray) }

})

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
    return (x) => {

        for (let code of winningCombinations) {

            const hasAllElems = testArray.every(elem => code.includes(elem));
            if (hasAllElems === true) {
                console.log("win")
                break
            }
        }

    }

}

let check = checkWinner()