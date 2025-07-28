const random=parseInt(Math.random()*100+1);
const submit=document.querySelector('#submit')
const userInput=document.querySelector('#guessNo')
const guesses=document.querySelector('.guesses')
const remaining=document.querySelector('.remainingGuess')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.result')
const message=document.querySelector('.message');
const displayAttempts=document.querySelector('.attempts')
const displaymaxAttempts=document.querySelector('.maxAttempts')



submit.addEventListener('click',checkGuess);
let attempts=0;
let maxAttempts=10;


function checkGuess(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);

    if(guess===random){
        message.innerHTML=`<span>Correct Guess </span>`
    }
    else if(guess<random){
        message.innerHTML=`<span>Go higher</span>`
    }
    else if (guess>random){
        message.innerHTML=`<span>Go lower</span>`
    }
    else if(isNaN(guess)){
        message.innerHTML=`<span>Enter a valid Number</span>`
    }
    
    attempts++;
    displayAttempts.innerHTML=`<span>No of attempts ${attempts}</span>`
    if(attempts===maxAttempts){
        message.innerHTML=`Game Over  The Number was ${random}`

        userInput.disabled=true;
        submit.disabled=true;
    }



}


