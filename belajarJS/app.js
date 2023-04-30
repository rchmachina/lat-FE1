// let thisIsFromJS = document.getElementById('thisIsFromJs')

// thisIsFromJS.innerHTML = "hello this is from js"

let P1Score  = document.getElementById('P1Score')
let P2Score = document.getElementById('P2Score')
let P1Plus = document.getElementById('p1Plus')
let P2Plus= document.getElementById('p2Plus')
let resetScore = document.getElementById('resetScore')
let whoWin = document.getElementById('whoWin')
var scoreP1= 0
var scoreP2= 0
let gameOver = false
let totalScore = 3
let maxScorePoint = document.getElementById('maxScore')

P1Plus.addEventListener('click',()=>{
    if(!gameOver){
        scoreP1 +=1
        P1Score.innerText = scoreP1 
        if (scoreP1 == totalScore){
            gameOver = true
            whoWin.innerText = 'player 1 wins'
        }
    }
})

P2Plus.addEventListener('click',()=>{
    if(!gameOver){
        scoreP2 +=1
        P2Score.innerText = scoreP2 
        if (scoreP2 == totalScore){
            gameOver = true
            whoWin.innerText = 'player 2 wins '
        }
    }
})
resetScore.addEventListener('click',reset )

maxScorePoint.addEventListener('change',()=>{

    totalScore = parseInt(maxScorePoint.value)
    console.log(totalScore)
    reset()

})


function reset(){
    
    P2Score.innerText = scoreP2 =0
    
    P1Score.innerText = scoreP1 =0

    gameOver =false
    whoWin.innerText = "" 

}

