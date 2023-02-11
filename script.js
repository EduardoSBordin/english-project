const checkbox1 = document.querySelector('#a_1');
checkbox1.style.color = 'grey';
const checkbox2 = document.querySelector('#a_2');
checkbox2.style.color = 'grey';
const checkbox3 = document.querySelector('#a_3');
checkbox3.style.color = 'grey';

const btnResult = document.querySelector('#btnResult');
const btnRemoveScore = document.querySelector('#btnRemoveScore');

let result = document.querySelector('#result');
const scoreTxt = document.querySelector('#score');

let score = 0;
let i = 0;
let time = 10;


function displayRight(){

    const tag = document.createElement('h1');
    tag.innerHTML = '+1';
    tag.style.color = 'grey';

    result.append(tag);

    const getInterval = setInterval(() => {
        time--;
        if(time <= 0){

            console.log('OK');
            clearInterval(getInterval);
            time = 10;
            tag.remove();
            btnResult.disabled = false;

        }
        console.log(time);
    }, 100);
}

function displayTryAgain(){

    const tag = document.createElement('h1');
    tag.innerHTML = '-1';
    tag.style.color = 'grey';

    result.append(tag);

    const getInterval = setInterval(() => {
        time--;
        if(time <= 0){

            console.log('OK');
            clearInterval(getInterval);
            time = 10;
            tag.remove();
            btnResult.disabled = false;

        }
        console.log(time);
    }, 100);
}

function localS(){

    localStorage.setItem('getScore', score);
    scoreTxt.innerHTML = localStorage.getItem('getScore');
}

checkbox1.addEventListener('click', () => {

    i++;
    if(i <= 1){

        checkbox1.style.background = 'rgb(45, 212, 162)';

        checkbox2.disabled = true;
        checkbox2.style.background = '#f2f2f2';
        checkbox2.style.color = 'white';
        checkbox2.style.border = 'none';

        checkbox3.disabled = true;
        checkbox3.style.background = '#f2f2f2';
        checkbox3.style.color = 'white';
        checkbox3.style.border = 'none';
    }else{
        i = 0;

        checkbox1.style.background = 'rgb(45, 212, 162, 0)';

        checkbox2.disabled = false;
        checkbox2.style.background = 'rgba(0, 0, 0, 0)';
        checkbox2.style.color = 'grey';
        checkbox2.style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
        checkbox2.style.border = 'none';

        checkbox3.disabled = false;
        checkbox3.style.background = 'rgba(0, 0, 0, 0)';
        checkbox3.style.color = 'grey';
        checkbox3.style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
        checkbox3.style.border = 'none';
    }
    console.log(i);
})

checkbox2.addEventListener('click', () => {

    i++;
    if(i <= 1){

        checkbox2.style.background = 'rgb(45, 212, 162)';

        checkbox1.disabled = true;
        checkbox1.style.background = '#f2f2f2';
        checkbox1.style.color = 'white';
        checkbox1.style.border = 'none';

        checkbox3.disabled = true;
        checkbox3.style.background = '#f2f2f2';
        checkbox3.style.color = 'white';
        checkbox3.style.border = 'none';
        
    }else{
        i = 0;

        checkbox2.style.background = 'rgb(45, 212, 0, 0)';

        checkbox1.disabled = false;
        checkbox1.style.background = 'rgba(0, 0, 0, 0)';
        checkbox1.style.color = 'grey';
        checkbox1.style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
        checkbox1.style.border = 'none';

        checkbox3.disabled = false;
        checkbox3.style.background = 'rgba(0, 0, 0, 0)';
        checkbox3.style.color = 'grey';
        checkbox3.style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
        checkbox3.style.border = 'none';
    }
    console.log(i);
});

checkbox3.addEventListener('click', () => {

    i++;
    if(i <= 1){

        checkbox3.style.background = 'rgb(45, 212, 162)';

        checkbox1.disabled = true;
        checkbox1.style.background = '#f2f2f2';
        checkbox1.style.color = 'white';
        checkbox1.style.border = 'none';

        checkbox2.disabled = true;
        checkbox2.style.background = '#f2f2f2';
        checkbox2.style.color = 'white';
        checkbox2.style.border = 'none';
    }else{
        i = 0;
        checkbox3.style.background = 'rgb(45, 212, 0, 0)';

        checkbox1.disabled = false;
        checkbox1.style.background = 'rgba(0, 0, 0, 0)';
        checkbox1.style.color = 'grey';
        checkbox1.style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
        checkbox1.style.border = 'none';

        checkbox2.disabled = false;
        checkbox2.style.background = 'rgba(0, 0, 0, 0)';
        checkbox2.style.color = 'grey';
        checkbox2.style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
        checkbox2.style.border = 'none';
    }
    console.log(i);
});

btnResult.addEventListener('click', () => {
    btnResult.disabled = true;
    
        if(checkbox1.checked){
            score--;
            displayTryAgain();
            localS();
        }else if(checkbox2.checked){
            score--;
            displayTryAgain();
            localS();
        }else if(checkbox3.checked){
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