let domTable = document.querySelectorAll("td")
let tArray = Array.from(domTable)
let winner = document.querySelector(".winner")

domTable.forEach(function (elem, index) {
    elem.addEventListener("click", function (e) {
        if (elem.innerText === "") {
            table(elem, index)
        }

    });

});

const playerFactory = (name, mark, turn, coords) => {
    return { name, mark, turn, coords };
};

let player1 = playerFactory('player1', "o", true, [])
let player2 = playerFactory("player2", "X", false, [])


let table = (function (x, index) {

    let currentPlay = () => {
        if (player1.turn == true) { return switcher(player1, player2) }
        else if (player2.turn == true) return switcher(player2, player1)
    }

    let switcher = (a, b) => {
        a.coords.push(index)
        x.textContent = a.mark
        a.turn = false
        b.turn = true

    }
    currentPlay()
    check(player1)
    check(player2)
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


        for (const i of winningCombinations) {

            const check = (current) => x.coords.includes(current)
            let allFounded = i.every(check);

            if (allFounded === true) {

                console.log(`${x.name} is the winner`)
                winner.style.display = "block";
                winner.innerHTML += `<button class="reset">playagain</button>${x.name} is the winner`
                e.preventDefault()
                break
            }
            else if (player2.coords.length >= 4) { console.log("draw!") }
        }


    }
}
let check = checkWinner()

function reset() { console.log("works!") }