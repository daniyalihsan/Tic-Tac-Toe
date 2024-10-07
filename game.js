let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


let boxes = document.querySelectorAll('.box');
let winner = document.querySelector('.winner');

let turnO = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        //player o turn.
        if (turnO) {
            box.innerHTML = "O";
            box.style.color = "green";
            turnO = false;
        }
        //player x turn.
        else {
            box.innerHTML = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
let restbtn = document.querySelector('.resetbutton');
//exception winner is null
if (restbtn != null) {

    restbtn.addEventListener("click", resetGame);
}
   


function resetGame() {
    boxes.forEach((box) => {
        winner.innerHTML = "";
        box.innerHTML = "";
        box.disabled = false;
        box.color = "white";
        
    });
}

function checkWinner() {

    let winner = document.querySelector('.winner');
    for (let pattern of winPattern) {
        //remember: pattern[0] indicates an element at position 0(index 0). and so on.
        let position1Symbol = boxes[pattern[0]].innerHTML;
        let position2Symbol = boxes[pattern[1]].innerHTML;
        let position3Symbol = boxes[pattern[2]].innerHTML;
        if (position1Symbol != "" && position2Symbol != "" && position3Symbol != "") {
            if (position1Symbol === position2Symbol && position2Symbol === position3Symbol) {
                winner.innerHTML = `Winner is player: ${position1Symbol}`;
                Array.from(boxes).every(box => box.disabled = true);
                return;
            }

            // Check for a draw if no winner and all boxes are filled
            const allFilled = Array.from(boxes).every(box => box.innerHTML !== "");
            if (allFilled) {
                winner.innerHTML = 'No winner: Game Is Draw!';
            }
        }
    }
};
