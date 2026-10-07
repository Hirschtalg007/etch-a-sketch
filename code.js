const allDivs = document.querySelector("#gridContainer");

function createSquares(){
    for(let i = 0 ; i < 16 ; i++){
    const squareDivs = document.createElement("div");
    squareDivs.id = "squareDivs";

    allDivs.appendChild(squareDivs);
}}

createSquares();