let domTable = document.querySelectorAll("td")
let tArray = Array.from(domTable)
let winner = document.querySelector(".winner")


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
                winner.style.display = "block";
                winner.innerHTML += `<button class="reset">playagain</button>${x.name} is the winner`
                break
            }
            else if (Player2.coords.length >= 4) { console.log("draw!") }
        }


    }
}
let check = checkWinner()

function reset() {
    deleteme()
    e.preventDefault()
}