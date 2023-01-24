for (let i = 1; i <= 256; i++){
    let grid = document.querySelector('#grid');
    let square = document.createElement('div');
    let br = document.createElement('div');
    br.className = "break";
    if ((i % 16) === 1){
        grid.appendChild(br);
    }
    grid.appendChild(square);
    square.className = "square";
}