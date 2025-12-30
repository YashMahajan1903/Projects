let Boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnText = document.getElementById("turn");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    count = 0;
    turnO = true;
    turnText.innerText = "O";
    enabledBoxes();
    msgContainer.classList.add("hide");
};

Boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        if (turnO) {
            Box.innerText = "O";
            turnO = false;
            turnText.innerText = "X";   // Update turn message
        } else {
            Box.innerText = "X";
            turnO = true;
            turnText.innerText = "O";   // Update turn message
        }
        Box.disabled = true;
        count++;

        checkWinner();

        if (count === 9) Draw();
    });
});

const Draw = () => {
    msg.innerText = "Game Draw!";
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const disabledBoxes = () => {
    Boxes.forEach((box) => box.disabled = true);
};

const enabledBoxes = () => {
    Boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Winner: ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
    turnText.innerText = "-";
};

const checkWinner = () => {
    winPatterns.forEach((pattern) => {
        let pos1 = Boxes[pattern[0]].innerText;
        let pos2 = Boxes[pattern[1]].innerText;
        let pos3 = Boxes[pattern[2]].innerText;

        if (pos1 && pos2 && pos3) {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    });
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
