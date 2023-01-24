for (let i = 1; i <= 256; i++){
    let grid = document.querySelector('#grid');
    let square = document.createElement('div');
    let br = document.createElement('div');
    br.className = "break";
    let squareWidth = 1000 / 16;
    if ((i % 16) === 1){
        grid.appendChild(br);
    }
    grid.appendChild(square);
    square.className = 'square';
    square.style.width = squareWidth.toString() + "px";
    square.style.height = squareWidth.toString() + "px";
}