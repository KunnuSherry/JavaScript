let boxes = document.body.querySelectorAll(".box");
let resetbtn = document.body.querySelector(".resetbtn");
let usera = 'User 1';
let userb = 'user 2 ';
let winnerText = document.body.querySelector(".winnerText");
let element = document.createElement('img')
element.src = 'https://i.pinimg.com/originals/36/25/06/362506cb9062a7dfe31229c441c035d3.gif'
element.style.width = '500px'
element.style.height = '300px'
element.style.border = '2px solid white'
element.style.borderRadius = '20px'
let user1 = true;
let user2 = false;
let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      if (user1) {
        box.innerText = "O";
        user1 = false;
        user2 = true;
      } else {
        box.innerText = "X";
        user1 = true;
        user2 = false;
      }
      count += 1;
      box.disabled = true;
      let winner = checkWinner();
      if (!winner && count === 9) {
        gameDraw();
      }
    }
  });
});

const gameDraw = () => {
  winnerText.innerText = `Game was a Draw.`;
  winnerText.classList.remove("hide");
  disableBoxes();
};

resetbtn.addEventListener('click', () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.style.backgroundColor = 'black'
    box.style.color = 'white'
  });
  winnerText.classList.add('hide');
  user1 = true;
  user2 = false;
  count = 0;
});


const showWinner = (winner) => {
  if (winner === "X") {
    winnerText.innerHTML = `The Winner Is ${userb}`;
  } else {
    winnerText.innerHTML = `The Winner Is ${usera}`;
  }
  winnerText.classList.remove('hide')
  disableBoxes();
};

const checkWinner = () => {
  let winningList = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
  ];
  for (let pattern of winningList) {
    let a = boxes[pattern[0]].innerText;
    let b = boxes[pattern[1]].innerText;
    let c = boxes[pattern[2]].innerText;
    if (a !== "" && a === b && a === c) {
        boxes[pattern[0]].style.backgroundColor = 'yellow'
        boxes[pattern[1]].style.backgroundColor = 'yellow'
        boxes[pattern[2]].style.backgroundColor = 'yellow'
        boxes[pattern[0]].style.color = 'black'
        boxes[pattern[1]].style.color = 'black'
        boxes[pattern[2]].style.color = 'black'
        resetbtn.after(element);
        element.style.visibility = 'visible'
        setTimeout(()=>{
            element.style.visibility = 'hidden'
        },4000)
      showWinner(a);
      return true;
    }
  }
  return false;
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
