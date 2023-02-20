
let gridSize = 16;

//Controls
let clearer = document.querySelector('#clearer');
clearer.addEventListener('click', (e) => {
    eraseGrid();
    createGrid(gridSize);

    //Button color flash
    e.target.style.backgroundColor = "#15ff00"
    e.target.style.color = 'rgb(72, 72, 78)';
    e.target.style.transition = 'background-color 1s';
    e.target.style.transiton = 'color 0.6s';
    setTimeout(function() {
        e.target.style.backgroundColor = 'rgb(72, 72, 78)';
        e.target.style.color = '#15ff00'
    }, 300);
    
    
});


//Create Rainbowizer Button
let rainbowizer = document.querySelector('#Rainbow');
let rainEffect = false;
rainbowizer.addEventListener('click', (e) => {
    if (rainEffect === false) {
        e.target.style.backgroundColor = "#15ff00";
        e.target.style.color = 'rgb(72, 72, 78)';
        e.target.style.transition = 'background-color 1s';
        e.target.style.transiton = 'color 0.6s';
        rainEffect = true;
    } else {
        e.target.style.backgroundColor = 'rgb(72, 72, 78)';
        e.target.style.color = "#15ff00";
        e.target.style.transition = 'background-color 1s';
        e.target.style.transiton = 'color 0.6s';
        rainEffect = false;
    }
});



//Get slider and value of slider for grid size
let slider = document.querySelector('#myRange');
let output = document.querySelector('#value');
slider.style.background = `linear-gradient(90deg, #15ff00 ${gridSize}%, rgb(179, 179, 179) ${gridSize}%)`;

output.innerHTML = "Grid size: " + slider.value + " x " + slider.value;

//Erases and creates new grid when size is changed.
slider.oninput = function() {
    output.innerHTML = "Grid size: " + this.value + " x " + this.value;
    gridSize = this.value;
    slider.style.background = `linear-gradient(90deg, #15ff00 ${this.value}%, rgb(179, 179, 179) ${this.value}%)`;
    eraseGrid();
    createGrid(this.value);
}

//Color picker
let colorList = document.querySelectorAll('.colorgrid > *');
let selectedColor = document.querySelector('.selectedcolor');
colorList.forEach((color) => {
    let paletteColor = color.getAttribute('id');
    color.style.backgroundColor = `${paletteColor}`;

    //displays the correct color on the colorpicker
    color.addEventListener('click', (e) => {
        let tempColor = e.target.getAttribute('id');
        selectedColor.style.backgroundColor = `${tempColor}`;
    });
})


//Create grid of size inputed by user
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
            e.target.style.backgroundColor = `${selectedColor.style.backgroundColor}`;
            if (rainEffect === true) {
                let random = randomRGB();
                e.target.classList.toggle('colored');
                e.target.style.backgroundColor = `${random}`;
            }
        });

        container.appendChild(div);
    }
}

//Generates a random color
function randomRGB() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}


//Resets the color of all cells to white
function eraseGrid() {
    const container = document.querySelector('.grid-container');
    let divs = document.querySelectorAll('.cell');
    divs.forEach((div) => {
        container.removeChild(div);
    });
}




createGrid(gridSize);



