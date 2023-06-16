//grid creation + hover
let gridSize=0;
let numSquares = 0;

const body = document.getElementById("container");
body.style.display = "flex";
body.style.justifyContent= "center";
body.style.alignItems = "center"
body.style.flexDirection = "column";
const container =document.getElementById("gridFrame");
container.style.border = "1px solid black"
const square = document.createElement("div");

const startBtn = document.querySelector(".start");
startBtn.addEventListener("click", function(){
    clearGrid();
    gridSize = parseInt(prompt("How many squares do you want per side from 2-100?"))
    while (gridSize>100 || gridSize<2){
        gridSize =  parseInt(prompt("How many squares do you want per side from 2-100?"))
    }
    numSquares = gridSize*gridSize
    createGrid()
    makeResetBtn()
})

const reset = document.createElement("button")
function makeResetBtn(){
    const buttonField = document.querySelector(".buttons")
    reset.innerText = "Reset Drawing"
    reset.classList.add ("reset")
    buttonField.appendChild(reset)
}
    reset.addEventListener("click", function(){
        clearGrid()
    })

function createGrid(){
    const container =document.getElementById("gridFrame");
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows =  `repeat(${gridSize}, 1fr)`;
    container.style.border = "1px solid black";
    
    for (let i=0; i<numSquares; i++){
        const square = document.createElement("div");
        square.style.border = "1px dashed black";
        square.addEventListener("mouseenter", function(){
            square.style.backgroundColor = "black"
        })
        square.addEventListener("mousedown", function(){
            square.style.backgroundColor = "white"
        })
        container.insertAdjacentElement("beforeend", square)
    };
}

//grid clear
function clearGrid(){
    const container =document.getElementById("gridFrame");
    let squares = container.querySelectorAll("div")
    squares.forEach((div) => div.remove());
};

