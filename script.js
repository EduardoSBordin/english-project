const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');

const btnResult = document.querySelector('#btnResult');

const result = document.querySelector('#result');

btnResult.addEventListener('click', (e) => {

    if(a1.checked){
        result.innerHTML = 'Errado';
    } else if(a2.checked){
        result.innerHTML = 'Errado';
    }
     else if(a3.checked){
        result.innerHTML = 'Certo';

        
    }
  
});

