const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');

const btnResult = document.querySelector('#btnResult');
const btnRemoveScore = document.querySelector('#btnRemoveScore');

let result = document.querySelector('#result');

const scoreTxt = document.querySelector('#score');

let time = 10;
let score = 0;

function displayTryAgain(){


        const tag = document.createElement('h1');
            tag.innerHTML = 'Try Again';
            tag.style.color = 'grey';
            tag.style.transition = "0.3s";
            
            result.append(tag);

       const getInterval = setInterval(() => {
            time--;
            if(time <= 0){

                console.log('OK');
                clearInterval(getInterval);
                time = 10;
                tag.remove();
                btnResult.disabled = false;
                // btnResult.style.background = 'white';
                // btnResult.style.color = 'black';

            }
            console.log(time);
        }, 100);
}

function displayRight(){


    const tag = document.createElement('h1');
            tag.innerHTML = "That's right";
            
            result.append(tag);

        
       const getInterval = setInterval(() => {
            time--;
            if(time <= 0){

                console.log('OK');
                clearInterval(getInterval);
                time = 10;
                tag.remove();
                btnResult.disabled = false;
                // btnResult.style.background = 'white';
                // btnResult.style.color = 'black';
            }
            console.log(time);
        }, 100);
}
function localS(){

    localStorage.setItem('getScore', score);
    scoreTxt.innerHTML = localStorage.getItem('getScore');
}

btnResult.addEventListener('click', () => {

    btnResult.disabled = true;
    
    if(a1.checked){
        
        score--;
        displayTryAgain();
        localS();

    } else if(a2.checked){

        score--;
        displayTryAgain();
        localS();
    }
     else if(a3.checked){

         score++;
        displayRight();
        localS();

    }

    if(score <= 0){
        score = 0;
        scoreTxt.innerHTML = score;
    }
  
});

scoreTxt.innerHTML = localStorage.getItem('getScore');

btnRemoveScore.addEventListener('click', () => {

    localStorage.removeItem('getScore');
    scoreTxt.innerHTML = localStorage.getItem('getScore');
    score = 0;
});