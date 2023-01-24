let square = document.createElement('div');
square.className = 'square';
square.id = 'square';
function createGrid() {
    for (let i = 1; i <= 256; i++){
        let grid = document.querySelector('#grid');
        let br = document.createElement('div');
        square = document.createElement('div');
        square.className = 'square';
        square.id = 'square';
        br.className = "break";
        let squareWidth = 1000 / 16;
        if ((i % 16) === 1){
            grid.appendChild(br);
        }
        grid.appendChild(square);
        square.style.width = squareWidth.toString() + "px";
        square.style.height = squareWidth.toString() + "px";
    }
}

createGrid();

let squares = document.getElementsByClassName('square');
for (const square of squares) {
    square.addEventListener('mouseover', function () {
        square.style.background = 'black';
    });
}