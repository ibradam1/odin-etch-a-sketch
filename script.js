function createGrid() {
    let div;
    const container = document.querySelector('.grid-container');
    for (let i = 0; i < 16 * 16; i++){
        div = document.createElement('div');
        div.classList.add('cell');
        div.style.backgroundColor = 'red';
        div.textContent = 1;

        
        container.appendChild(div);

    }
}

createGrid();