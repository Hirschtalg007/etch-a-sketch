const allDivs = document.querySelector("#gridContainer");

function createSquares(grid){
    for(let i = 0 ; i < grid*grid ; i++){
        const square = document.createElement("div");
        square.id = "squareDivs";
        setSize(square);
        allDivs.appendChild(square);
    }
    hoover();
}

function setSize(square){
    let calcHeight = 800 / eingabe;
    let calcWidth = calcHeight;
    const squareHeight = square.style.setProperty("--squareHeight", calcHeight + "px");
    const squareWidth = square.style.setProperty("--squareWidth", calcWidth + "px");
}

function hoover(){
    for(let i = 0 ; i < allDivs.children.length ; i++){
        const allDivsEnter = allDivs.children[i].addEventListener("mouseenter",() => {
            allDivs.children[i].style.backgroundColor = "red";
        })
        const allDivsLeave = allDivs.children[i].addEventListener("mouseleave",() => {
        allDivs.children[i].style.backgroundColor = "gray";
        })
    }
}

let eingabe = 16;

createSquares(eingabe);