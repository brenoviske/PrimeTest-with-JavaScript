// getting elements by their ID

const submit = document.getElementById('checkbutton')


// Making the backend logic

submit.onclick = function (){
    const number = Number(document.getElementById('number').value)
    const result = document.getElementById('resultdisplay')
    
    if ( number >= 1){
        let divisor = 0
        for ( let i = 1; i <= number ; i++){
            if ( number % i == 0 ){
                divisor ++
            }
        }
        if( divisor == 2 || divisor == 1){
            result.textContent = `The number ${number} is prime`
        }
        else{
            result.textContent = `The number ${number} is not prime`
        }
    }
    else {
        result.textContent = `Invalid input, please try it again`
    }
}

