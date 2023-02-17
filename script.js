const container = document.querySelector('.container');

for (i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
};

const squares = document.querySelectorAll('.square')

squares.forEach(square => {
    square.addEventListener('mouseover', function (e) {
        square.classList.add('hover');
    })
})