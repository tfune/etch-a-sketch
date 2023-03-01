const container = document.querySelector('.container');
let sideLength = 16

function createGrid () {
    for (i = 0; i < (sideLength * sideLength); i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    }
}
createGrid();

let squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', getShade));
    
function color (e) {
    //square.classList.add('hover');
    //square.style.backgroundColor = getRandomColor();
    }

const button = document.querySelector('.button');

button.addEventListener('click', function (e) {
    getSideLength (e);
    resetGrid(container);
    container.style.setProperty('--container-columns', sideLength);
    container.style.setProperty('--container-rows', sideLength);
    createGrid();
    squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', getShade));
})

function resetGrid (container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getSideLength (e) {
    sideLength = parseInt(prompt("How many squares per side? (max 100)", 16));
    if (sideLength >= 1 && sideLength <= 100) {
        return sideLength;
    }
    else {
        getSideLength();
    }
}

function getRandomColor () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + red + ', ' + green + ', ' + blue + ")";
    return randomColor;
}

function getShade () {
    let currentShade = Number(this.style.backgroundColor.slice(14, 17));
    if (this.style.backgroundColor === 'rgb(0, 0, 0)') {
        return;
    } else if (currentShade <= 0.9) {
        currentShade = currentShade + 0.1
        this.style.backgroundColor = `rgba(0, 0, 0, ${currentShade})`;
    } else {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    }
}