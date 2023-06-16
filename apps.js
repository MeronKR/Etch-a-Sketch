//grid creation

const body = document.getElementById("container");
body.style.display = "flex";
body.style.justifyContent= "center";
body.style.alignItems = "center"
body.style.flexDirection = "column"

const container =document.getElementById("gridFrame");
container.style.gridTemplateColumns = "repeat(16, 1fr)"
container.style.gridTemplateRows = "repeat(16, 1fr)"
container.style.border = "1px solid black";

for (let i=0; i<256; i++){
    let div = document.createElement("div");
    div.style.backgroundColor = "white";
    container.insertAdjacentElement("beforeend", div)
};
