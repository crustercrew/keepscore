const p1button = document.querySelector('#p1-button');
const p2button = document.querySelector('#p2-button');

const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');

let p1Score = 0;
let p2Score = 0;
let winpoint = 6;
let isGameOver = false;

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