
let gridSize = 16;


function createGrid(gridSize) {
    let div;
    const container = document.querySelector('.grid-container');
    for (let i = 0; i < gridSize * gridSize; i++){
        div = document.createElement('div');
        div.classList.add('cell');
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;   

        div.addEventListener('mouseover', (e) => {
            e.target.classList.add('colored');
        });

        container.appendChild(div);
    }
}




const sizeButton = document.querySelector('.size');
sizeButton.addEventListener('click', () => {
    gridSize = prompt("Enter grid dimension between 1 - 100: ");
    while (gridSize > 100 || gridSize < 1) {
        alert("Invalid dimension.");
        gridSize = prompt("Enter grid dimension between 1 - 100:");
    }

    const container = document.querySelector('.grid-container');
    let divs = document.querySelectorAll('.cell');
    divs.forEach((div) => {
        container.removeChild(div);
    })

    createGrid(gridSize);
});

createGrid(gridSize);



