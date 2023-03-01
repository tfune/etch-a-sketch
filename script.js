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
squares.forEach(square => {
    square.addEventListener('mouseover', function (e) {
        //square.classList.add('hover');
        square.style.backgroundColor = getRandomColor();
    })
})

const button = document.querySelector('.button');

button.addEventListener('click', function (e) {
    getSideLength (e);
    resetGrid(container);
    container.style.setProperty('--container-columns', sideLength);
    container.style.setProperty('--container-rows', sideLength);
    createGrid();
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function (e) {
            square.classList.add('hover');
        })
    })
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
    let alpha = 1;
    let randomColor = "rgba(" + red + ', ' + green + ', ' + blue + ', ' + alpha + ")";
    return randomColor;
}

