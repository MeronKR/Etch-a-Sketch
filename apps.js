//styling
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
const squares = container.querySelectorAll(".innerSq")


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

    //grid creation + hover
function createGrid(){
    const container =document.getElementById("gridFrame");
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows =  `repeat(${gridSize}, 1fr)`;
    container.style.border = "1px solid black";
    
    for (let i=0; i<numSquares; i++){
        const square = document.createElement("div");
        square.classList.add("innerSq")
        square.style.border = "1px dashed black";
        square.addEventListener("mouseenter", function(){
            square.style.backgroundColor = `${color}`
            
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
    const squares = container.querySelectorAll(".innerSq")
    squares.forEach((div) => div.remove());
};

const reset = document.createElement("button")
const buttonField = document.querySelector(".buttons")
function makeResetBtn(){
    const buttonField = document.querySelector(".buttons")
    reset.innerText = "Reset Drawing"
    reset.classList.add ("reset")
    buttonField.appendChild(reset)
}
    reset.addEventListener("click", function(){
        clearGrid()
    })

//defaultColor
let color = "rgb(0,0,0)"
const colorVal = document.querySelector(".color")
colorVal.addEventListener("change", function(){
    color = this.value
    console.log(color)
})


// randomColor
let rgb = "rgb(0,0,0)";
function colRandom (){
        const r = Math.floor(Math.random()*255)
        const g = Math.floor(Math.random()*255)
        const b = Math.floor(Math.random()*255)
        rgb = `rgb(${r},${g},${b})` 
        color = rgb
}

const rainbowBtn= document.querySelector(".rainbow")
    rainbowBtn.addEventListener("click", function(){
            console.log("rainbowMode")
            setInterval(colRandom, 10)
        }) 