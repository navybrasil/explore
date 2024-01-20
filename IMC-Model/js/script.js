import { Modal } from "./modal.js"

// variáveis - variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const screen1 = document.querySelector(".modal-wrapper")

document.addEventListener("keydown", eventEnter)
function eventEnter(e) {
  if (e.key == "Enter" && screen1.classList.contains("open")) {
    Modal.close()
    console.log("Teclado aqui")
  }
}

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
