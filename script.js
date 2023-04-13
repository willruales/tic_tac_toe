let domTable = document.querySelectorAll("td")
let tArray = Array.from(domTable)
let winner = document.querySelector(".winner")
let pop_up = document.querySelector(".pop-up")
let body = document.querySelector("body")
let winningLine = document.querySelector(".winning-line")
function deleteme() {

    domTable.forEach(function (elem, index) {
        elem.addEventListener("click", function (event) {
            if (elem.innerText === "") {
                table(elem, index, event)
            }
        });
    });


}
deleteme()

const PlayerFactory = (name, mark, turn, coords, winner) => {
    return { name, mark, turn, coords, winner };
};

let Player1 = PlayerFactory('Player1', "o", true, [], false);
let Player2 = PlayerFactory("Player2", "X", false, [], false);




let table = (function (x, index) {


    let currentPlay = () => {
        if (Player1.turn == true) { return switcher(Player1, Player2) }
        else if (Player2.turn == true) return switcher(Player2, Player1)
    }

    let switcher = (a, b) => {
        a.coords.push(index)
        x.textContent = a.mark
        a.turn = false
        b.turn = true

    }
    currentPlay()
    check(Player1)
    check(Player2)

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
                x.winner = true
                console.log(`${x.name} is the winner`)
                winningLine.insertAdjacentHTML('beforeend', `<div>${x.name} is the winner </div>`);
                //winningLine;
                pop_up.style.opacity = "1"
                body.style.pointerEvents = "none"
                pop_up.style.pointerEvents = "all"

                break
            }
            else if (Player1.coords.length >= 5 || Player2.coords.length >= 5) {
                console.log("draw!")


                //winningLine;
                pop_up.style.opacity = "1"
                body.style.pointerEvents = "none"
                pop_up.style.pointerEvents = "all"
                winningLine.textContent = "its a draw"
                break

            }
        }


    }
}
let check = checkWinner()

function reset() {
    domTable.forEach(elem => {
        elem.innerHTML = ""
        winningLine.innerHTML = ""
        pop_up.style.opacity = "0"
        body.style.pointerEvents = "all"
        pop_up.style.pointerEvents = "none"
        Player1.coords = []
        Player2.coords = []
    })
}