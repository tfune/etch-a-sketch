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
squares.forEach(square => square.addEventListener('mouseover', black));

function black (e) {
    this.style.backgroundColor = 'black';
}

const sideLengthButton = document.querySelector('.sideLengthButton');

sideLengthButton.addEventListener('click', function (e) {
    getSideLength (e);
    resetGrid(container);
    container.style.setProperty('--container-columns', sideLength);
    container.style.setProperty('--container-rows', sideLength);
    createGrid();
    squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', black));
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

function color (e) {
    this.style.backgroundColor = getRandomColor();
    }

function getRandomColor () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + red + ', ' + green + ', ' + blue + ")";
    return randomColor;
}

function getShade (e) {
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

const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', function (e) {
    squares = document.querySelectorAll('.square');
    squares.forEach(square => square.removeEventListener('mouseover', color));
    squares.forEach(square => square.removeEventListener('mouseover', getShade));
    squares.forEach(square => square.addEventListener('mouseover', black));
})

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', function (e) {
    squares = document.querySelectorAll('.square');
    squares.forEach(square => square.removeEventListener('mouseover', black));
    squares.forEach(square => square.removeEventListener('mouseover', getShade));
    squares.forEach(square => square.addEventListener('mouseover', color));
})

const pencilButton = document.querySelector('#pencil');
pencilButton.addEventListener('click', function (e) {
    squares = document.querySelectorAll('.square');
    squares.forEach(square => square.removeEventListener('mouseover', black));
    squares.forEach(square => square.removeEventListener('mouseover', color));
    squares.forEach(square => square.addEventListener('mouseover', getShade));
})