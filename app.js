const p1button = document.querySelector('#p1-button');
const p2button = document.querySelector('#p2-button');

const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetButton = document.querySelector('#reset');

const winpointOption = document.querySelector('#win-point');

let p1Score = 0;
let p2Score = 0;
let winpoint = 2;
let isGameOver = false;

function reset() {
    isGameOver = false;
    
    p1Score = 0;
    p2Score = 0;

    p1Display.textContent = 0;
    p2Display.textContent = 0;

}

p1button.addEventListener('click',()=>{
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winpoint) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})
p2button.addEventListener('click',()=>{
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winpoint) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener('click',reset);

winpointOption.addEventListener('change',function() {
    winpoint = parseInt(this.value)
    reset()
})