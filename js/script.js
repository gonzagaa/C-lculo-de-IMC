import { AlertError } from './alertError.js'
import { Modal } from './modal.js'
import { IMC, NotANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value

    const showAlertError = NotANumber(weight) || NotANumber(height)

    if(showAlertError) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerHTML = message
    Modal.open()
}

