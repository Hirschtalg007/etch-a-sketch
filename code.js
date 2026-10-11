const allDivs = document.querySelector("#gridContainer");

function createSquares(grid){
    for(let i = 0 ; i < grid*grid ; i++){
        const square = document.createElement("div");
        square.id = "squareDivs";
        setSize(square);
        allDivs.appendChild(square);
    }
}

function setSize(square){
    let calcBorder = 2;
    let calcHeight = 800 / eingabe - calcBorder * 2;
    let calcWidth = calcHeight;
    const squareHeight = square.style.setProperty("--squareHeight", calcHeight + "px");
    const squareWidth = square.style.setProperty("--squareWidth", calcWidth + "px");
    const squareBorder = square.style.setProperty("--squareBorder", calcBorder + "px");
}

let eingabe = 16;

createSquares(eingabe);