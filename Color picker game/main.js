let displayColor = document.querySelector(".jumbotron");
let squares = document.querySelectorAll(".square");
let show = document.querySelector("h1");
let status = document.querySelector(".status");
let newColor = document.querySelector(".newColor");
let easy = document.querySelector(".easy");
let hard = document.querySelector(".hard");

// let arr = [];

let colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 255, 255)",
    "rgb(0, 0, 0)",
]

let pickedColor = colors[3];
show.textContent = pickedColor;

displayColor.style.backgroundColor = pickedColor;


for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        // alert("Clicked");
        if (this.style.backgroundColor == pickedColor) {
            // console.log(1);
            changeAll(this.style.backgroundColor);
            status.classList.remove("status");
            status.textContent = "Correct";
            displayColor.style.backgroundColor = pickedColor;
        }
        else {
            this.style.backgroundColor = "#222222";
            status.classList.remove("status");
            status.textContent = "Try Again";
        }
    });
}

function changeAll(color) {
    squares.forEach(sq => sq.style.backgroundColor = color);
}

// sq.addEventListener("click",()=>{ NOT WORKING BECAUSE WE CANT APPLY EVENT LISTENER ON MULTIPLE OBJECTS AT ONCE
//     colorPicker();
// });

// displayColor.addEventListener("click",()=>{
//     colorPicker();
// });
newColor.addEventListener("click", () => {
    displayColor.style.backgroundColor = "lightblue";
    hard.classList.add("selected");
    easy.classList.remove("selected");
    for(let i=0;i<squares.length;i++){
        squares[i].style.display = "block";
    }

    status.classList.add("status");
    for (let i = 0; i < squares.length; i++) {
        let col = colorPicker();
        colors[i] = col;
        squares[i].style.backgroundColor = col;
    }
    pickedColor = randomColor();
    show.textContent = pickedColor;
    // displayColor.style.backgroundColor = pickedColor;

});

easy.addEventListener("click", () => {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    for(let i=0;i<4;i++){
        if(squares[i].style.backgroundColor != pickedColor){
            squares[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", () => {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    for(let i=0;i<4;i++){
        if(squares[i].style.backgroundColor != pickedColor){
            squares[i].style.display = "block";
        }
    }
});

function colorPicker() {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    return `rgb(${color1}, ${color2}, ${color3})`;
}

function randomColor() {
    let a = Math.floor(Math.random() * colors.length);
    return colors[a];
}


