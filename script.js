const checkbox1 = document.querySelector('#a_1');
const checkbox2 = document.querySelector('#a_2');
const checkbox3 = document.querySelector('#a_3');

const btnResult = document.querySelector('#btnResult');
const btnRemoveScore = document.querySelector('#btnRemoveScore');

let result = document.querySelector('#result');
const scoreTxt = document.querySelector('#score');

let score = 0;
let i = 0;
let time = 10;


function displayRight(){

    const tag = document.createElement('h1');
    tag.innerHTML = 'Right';
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
    tag.innerHTML = 'Try Again';
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
        checkbox2.disabled = true;
        checkbox2.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
        checkbox2.style.border = 'none';

        checkbox3.disabled = true;
        checkbox3.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
        checkbox3.style.border = 'none';
    }else{
        i = 0;
        checkbox2.disabled = false;
        checkbox2.style.boxShadow = '-10px -10px 15px rgba(255, 255, 255, 0.5), 10px 10px 15px rgba(70, 70, 70, 0.12)';
        checkbox2.style.border = '8px solid #ececec';

        checkbox3.disabled = false;
        checkbox3.style.boxShadow = '-10px -10px 15px rgba(255, 255, 255, 0.5), 10px 10px 15px rgba(70, 70, 70, 0.12)';
        checkbox3.style.border = '8px solid #ececec';
    }
    console.log(i);
})

checkbox2.addEventListener('click', () => {

    i++;
    if(i <= 1){
        checkbox1.disabled = true;
        checkbox1.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
        checkbox1.style.border = 'none';

        checkbox3.disabled = true;
        checkbox3.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
        checkbox3.style.border = 'none';
        
    }else{
        i = 0;
        checkbox1.disabled = false;
        checkbox1.style.boxShadow = '-10px -10px 15px rgba(255, 255, 255, 0.5),10px 10px 15px rgba(70, 70, 70, 0.12)';
        checkbox1.style.border = '8px solid #ececec';

        checkbox3.disabled = false;
        checkbox3.style.boxShadow = '-10px -10px 15px rgba(255, 255, 255, 0.5),10px 10px 15px rgba(70, 70, 70, 0.12)';
        checkbox3.style.border = '8px solid #ececec';
    }
    console.log(i);
});

checkbox3.addEventListener('click', () => {

    i++;
    if(i <= 1){
        checkbox1.disabled = true;
        checkbox1.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
        checkbox1.style.border = 'none';

        checkbox2.disabled = true;
        checkbox2.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
        checkbox2.style.border = 'none';
    }else{
        i = 0;
        checkbox1.disabled = false;
        checkbox1.style.boxShadow = '-10px -10px 15px rgba(255, 255, 255, 0.5),10px 10px 15px rgba(70, 70, 70, 0.12)';
        checkbox1.style.border = '8px solid #ececec';

        checkbox2.disabled = false;
        checkbox2.style.boxShadow = '-10px -10px 15px rgba(255, 255, 255, 0.5),10px 10px 15px rgba(70, 70, 70, 0.12)';
        checkbox2.style.border = '8px solid #ececec';
    }
    console.log(i);
});

btnResult.addEventListener('click', () => {
    btnResult.disabled = true;
    
        if(checkbox1.checked && checkbox2.checked){
            
            alert('Choose just 1 option');
        }
        else if(checkbox1.checked){
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