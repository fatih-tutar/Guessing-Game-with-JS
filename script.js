'use strict';

let secretNumber = Math.trunc(Math.random() * 5) + 1
let score = 20
let highscore = 0

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess,typeof guess)
    console.log(secretNumber, typeof secretNumber)
    
    // if input blank
    if(!guess){
        displayMessage('Enter a number please!')
    }

    // if the numbers match
    else if(guess === secretNumber){
        displayMessage('Right Guess!!!')
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').style.width = '30rem'
    
        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = 'The Highest Score : ' + highscore
        }
    }

    // if the numbers do not match
    else if(guess != secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Very High' : 'Too Low')
            score--;
            document.querySelector('.score').textContent = 'Score : ' + score
        }
        else{
            displayMessage('You Loss!!!')
            document.querySelector('.score').textContent = 0
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    let secretNumber = Math.trunc(Math.random() * 5) + 1

    displayMessage('Guessing...')
    document.querySelector('.score').textContent = 'Score : ' + score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('.highscore').textContent = 'The Highest Score : ' + highscore

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})