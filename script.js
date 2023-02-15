const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.textContent = '.';
    container.appendChild(square);
};