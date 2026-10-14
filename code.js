const allDivs = document.querySelector("#gridContainer");
const button = document.querySelector("button");

function createSquares(grid){
    for(let i = 0 ; i < grid*grid ; i++){
        const square = document.createElement("div");
        square.id = "squareDivs";
        setSize(square,grid);
        allDivs.appendChild(square);
    }
    hoover();
}

function setSize(square,UserIn){
    let calcHeight = 800 / UserIn;
    let calcWidth = calcHeight;
    const squareHeight = square.style.setProperty("--squareHeight", calcHeight + "px");
    const squareWidth = square.style.setProperty("--squareWidth", calcWidth + "px");
}

function hoover(){
    for(let i = 0 ; i < allDivs.children.length ; i++){
        let opacity = 0.0;

        function allDivsEnter(){
            let color = randColor();
            allDivs.children[i].style.backgroundColor = color.replace("rgb","rgba").replace(")",`,${opacity})`);
            opacity += 0.1;
            if(opacity >= 1){
                allDivs.children[i].style.backgroundColor = "black";
                allDivs.children[i].removeEventListener("mouseenter",allDivsEnter);
                allDivs.children[i].removeEventListener("mouseleave",allDivsLeave);
            }
        }

        allDivs.children[i].addEventListener("mouseenter", allDivsEnter);

        function allDivsLeave(){
            allDivs.children[i].style.backgroundColor = "gray";
        }

        allDivs.children[i].addEventListener("mouseleave", allDivsLeave);
    }
}

function randColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}

const newGrid = button.addEventListener("click",() =>{
    let eingabe = prompt("Enter a number smaller then 100 for your new grid", 8);
    if(eingabe > 100){
        alert("Invalid input, try again with a number smaller then 100.");
        eingabe = 16;
    }
    allDivs.replaceChildren();
    createSquares(eingabe);
})