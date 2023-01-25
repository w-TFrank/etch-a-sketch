let button = document.querySelector('button');
let square = document.createElement('div');
square.className = 'square';
square.id = 'square';
function createGrid(numberOfSquares) {
    for (let i = 1; i <= (numberOfSquares * numberOfSquares); i++){
        let grid = document.querySelector('#grid');
        let br = document.createElement('div');
        square = document.createElement('div');
        square.className = 'square';
        square.id = 'square';
        br.className = "break";
        let squareWidth = 1000 / numberOfSquares;
        if ((i % numberOfSquares) === 1){
            grid.appendChild(br);
        }
        grid.appendChild(square);
        square.style.width = squareWidth.toString() + "px";
        square.style.height = squareWidth.toString() + "px";
    }
}

createGrid(16);

let squares = document.getElementsByClassName('square');
for (const square of squares) {
    square.addEventListener('mouseover', function () {
        square.style.background = 'black';
    });
}

button.addEventListener('click', function() {
    let userChoice = prompt("How many squares wide would you like the grid to be?");
    if (userChoice > 100) {
        alert("Please enter a number less than 100");
    } else {
        let squaresToRemove = document.getElementsByClassName('square');
        let i = squaresToRemove.length - 1;
        while (0 < squaresToRemove.length){
            squaresToRemove[i].remove();
            i--;
        }
        createGrid(userChoice);
        for (const square of squares) {
            square.addEventListener('mouseover', function () {
                square.style.background = 'black';
            });
        }
    }
});