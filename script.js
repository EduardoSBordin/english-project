const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');

const btnResult = document.querySelector('#btnResult');

const result = document.querySelector('#result');
const scoreTxt = document.querySelector('#score');

let time = 10;
let score = 0;

function displayTryAgain(){


        const tag = document.createElement('h1');
            tag.innerHTML = 'Try Again';
            
            result.append(tag);

       const getInterval = setInterval(() => {
            time--;
            if(time <= 0){

                console.log('OK');
                clearInterval(getInterval);
                time = 10;
                tag.remove();
                btnResult.disabled = false;
                btnResult.style.background = 'white';
                btnResult.style.color = 'black';

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
                btnResult.style.background = 'white';
                btnResult.style.color = 'black';
            }
            console.log(time);
        }, 100);
}

btnResult.addEventListener('click', (e) => {

    btnResult.disabled = true;
    btnResult.style.background = 'grey';
    btnResult.style.color = 'white';

    
    if(a1.checked){
        
        displayTryAgain();
        score--;
        scoreTxt.innerHTML = score;

    } else if(a2.checked){

        displayTryAgain();
        score--;
        scoreTxt.innerHTML = score;
    }
     else if(a3.checked){

        displayRight();
        score++;
        scoreTxt.innerHTML = score;

    }

    if(score <= 0){
        score = 0;
        scoreTxt.innerHTML = score;
    }
  
});

