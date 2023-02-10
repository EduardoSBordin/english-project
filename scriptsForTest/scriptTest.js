const checkbox1 = document.querySelector('#a_1');
const checkbox2 = document.querySelector('#a_2');
const checkbox3 = document.querySelector('#a_3');
const btnResult = document.querySelector('#btnResult');

btnResult.addEventListener('click', () => {


    if(checkbox1.checked && checkbox2.checked){
        
        alert('Choose just 1 option');
    }
    else if(checkbox1.checked){
        alert('Check 1');
    }else if(checkbox2.checked){
        alert('check 2');
    }else if(checkbox3.checked){
        alert('check 3');
    }

});

let i = 0;
checkbox1.addEventListener('click', () => {

    i++;
    if(i <= 1){
        checkbox2.disabled = true;
        checkbox3.disabled = true;
    }else{
        i = 0;
        checkbox2.disabled = false;
        checkbox3.disabled = false;
    }
    console.log(i);
})

checkbox2.addEventListener('click', () => {

    i++;
    if(i <= 1){
        checkbox1.disabled = true;
        checkbox3.disabled = true;
    }else{
        i = 0;
        checkbox1.disabled = false;
        checkbox3.disabled = false;
    }
    console.log(i);
});

checkbox3.addEventListener('click', () => {

    i++;
    if(i <= 1){
        checkbox1.disabled = true;
        checkbox2.disabled = true;
    }else{
        i = 0;
        checkbox1.disabled = false;
        checkbox2.disabled = false;
    }
    console.log(i);
});