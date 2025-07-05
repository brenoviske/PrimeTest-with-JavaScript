// Changing the code of JavaScript to typeScript

// Starting by gettiong the elements by their ID

const submit = document.getElementById('checkbutton') as HTMLButtonElement
submit.onclick = ()=>{
    const user_input = Number((document.getElementById('number') as HTMLInputElement).value)
    const result = document.getElementById('resultdisplay') as HTMLParagraphElement
    // Setting a condition to assure that the number inserted is positive
    if ( user_input < 0){
        result.textContent = `The number ${user_input} is negative, please insert a positive integer`
    }
    else{
        let divisor: number = 0 // Introducing the divider counter rigth here
        for ( let i = 1; i<=user_input; i++){ // iterating through the loop to count how many dividers the number inputed by the user really has
            if ( user_input % i == 0 ){
                divisor++
            }
        }
        // Displaying the result
        if ( divisor == 2){
            result.textContent = `The number ${user_input} is prime`
        }
        else{
            result.textContent = `The number ${user_input} is not prime`
        }
    }
}