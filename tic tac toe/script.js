let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn-reset");
let turnO = true;

let newGameBtn = document.querySelector("#btn-newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//we have two players  1. PlayerX 2. PlayerO

const winPattern = [
  //winPattern[0][1],
  //winPattern[0][2],
  //winPattern[0][3],
  //winPattern[1][0],
  //winPattern[1][1],
  //winPattern[1][2],
  //winPattern[3][0],
  //winPattern[3][1],
  //winPattern[3][2],

  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");

  disabledBoxes();
  // winner.style.color = "red";
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;

    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value == pos2value && pos2value == pos3value) {
        console.log("winner");


        showWinner(pos1value);
        
      }
    }
  }
};

const restGame = () => {
  turnO = true;
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }

  msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", restGame);
newGameBtn.addEventListener("click", restGame);
