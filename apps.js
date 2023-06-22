//styling
let gridSize=0;
let numSquares = 0;

const container =document.getElementById("gridFrame");
container.style.border = "1px solid white"
const square = document.createElement("div");
const squares = container.querySelectorAll(".innerSq")
const slider = document.querySelector("#boxRange")
const sliderLabel = document.querySelector(".label")


slider.addEventListener("change", function(){
    clearGrid();
    gridSize = parseInt(slider.value)
    numSquares = gridSize*gridSize
    createGrid()
    makeResetBtn()
    sliderLabel.textContent = `${slider.value} x ${slider.value}`
    
})

    //grid creation + hover
function createGrid(){
    const container =document.getElementById("gridFrame");
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows =  `repeat(${gridSize}, 1fr)`;
    container.style.borderColor = "white"
    container.style.borderWidth = "thin"
    
    for (let i=0; i<numSquares; i++){
        const square = document.createElement("div");
        square.classList.add("innerSq")
        square.style.border = "1px solid white";
        square.addEventListener("mouseenter", function(){
            square.style.backgroundColor = `${color}`
            square.style.borderColor=`${color}`
            
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
let color = "rgb(255,255,255)"
const colorVal = document.querySelector(".color")
colorVal.addEventListener("change", function(){
    color = this.value
    console.log(color)
    rainbowMode = false
})


// randomColor
let rgb = "rgb(0,0,0)";
let rainbowMode = false
if(rainbowMode == false){
    function colRandom (){
        const r = Math.floor(Math.random()*255)
        const g = Math.floor(Math.random()*255)
        const b = Math.floor(Math.random()*255)
        rgb = `rgb(${r},${g},${b})` 
        color = rgb
        rainbowBtn.style.color = `${color}`
}  
}

const rainbowBtn= document.querySelector(".rainbow")
rainbowBtn.addEventListener("click", function(){
            rainbowMode = true
            setInterval(colRandom, 250)
        })
