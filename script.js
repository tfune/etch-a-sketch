const container = document.querySelector('.container');
let sideLength = 16

function createGrid () {
    for (i = 0; i < (sideLength * sideLength); i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    };
};
createGrid();

let squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', function (e) {
        square.classList.add('hover');
    })
})

const button = document.querySelector('.button');

button.addEventListener('click', function (e) {
    sideLength = prompt("How many squares per side? (max 100)", 16);
    resetGrid(container);
    container.style.setProperty('--container-columns', sideLength);
    container.style.setProperty('--container-rows', sideLength);
    createGrid();
    squares = document.querySelectorAll('.square')
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