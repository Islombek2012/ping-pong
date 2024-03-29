const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const select = document.querySelector('.select')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const reset = document.querySelector('.reset')
let score1 = 0;
let score2 = 0;
let gameLevel = select.value;
let gameOver = true;
btn1.addEventListener('click', ()=>{
      score1 += 1
      if(gameOver){
            if(score1 == gameLevel){
                  gameOver = false
                  player1.style.color = 'lime';
                  player2.style.color = 'red';
            }
            player1.textContent = score1
      }
})
btn2.addEventListener('click', ()=>{
      score2 += 1
      if(gameOver){
            if(score2 == gameLevel){
                  gameOver = false
                  player2.style.color = 'lime';
                  player1.style.color = 'red';
            }
            player2.textContent = score2
      }
})
select.addEventListener('change', ()=>{
      gameLevel = select.value;
      refresh()
})
reset.addEventListener('click', refresh)
function refresh(){
      score1 = 0;
      score2 = 0;
      gameLevel = select.value;
      gameOver = true;
      player1.textContent = 0;
      player1.style.color = 'black';
      player2.textContent = 0;
      player2.style.color = 'black';
}