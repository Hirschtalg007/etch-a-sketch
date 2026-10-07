const allDivs = document.querySelector("#gridContainer");

function createSquares(grid){
    for(let i = 0 ; i < grid*grid ; i++){
    const squareDivs = document.createElement("div");
    squareDivs.id = "squareDivs";

    allDivs.appendChild(squareDivs);
}}

let eingabe = 16;

createSquares(eingabe);