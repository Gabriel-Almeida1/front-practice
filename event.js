// Comment all the lines to review all the code and understand it better

const inputs = document.getElementsByClassName('inputs')
document.addEventListener("DOMContentLoaded", recoverValues) // The line of code add an event listener to the "DOMContentLoaded" event of a web page

function saveLocalStorage(event){ // Save the inputs in the local storage
    const keyInput = event.target.getAttribute('name')
    const valueInput = event.target.value
    window.localStorage.setItem(keyInput, valueInput)
}

function recoverValues(){ // Revocer the inputs in the input camp 
    const inputs = document.querySelectorAll(".inputs")

    inputs.forEach((input) => {  // perguntar a Luiz
        const key = input.getAttribute("name");
        const value = localStorage.getItem(key);
        if (value !== null) {
            input.value = value;
        }
    });
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', event => {
        event.target.style.border = '5px solid purple'
    })
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('blur', event => {
        event.target.style.border = ''
        saveLocalStorage(event)
    })
}

const btnSubmit = document.getElementById('button')

btnSubmit.addEventListener('click', () => {
    console.log("Preparando para enviar")
})

