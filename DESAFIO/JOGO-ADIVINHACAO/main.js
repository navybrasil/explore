// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber
let xAttempts = 1
random()
//Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", eventEnter)
// funções callback
function handleTryClick(event) {
  event.preventDefault() // Não execute o padrão. Não faça o envio do formaulario
  const inputNumber = document.querySelector("#inputNumber")

  // if (inputNumber.value === "") {
  //   errorMessage.innerText = "Informe um número"
  //   return
  // }

  if (
    isNaN(inputNumber.value) ||
    inputNumber.value == "" ||
    inputNumber.value < 0 ||
    inputNumber.value > 10
  ) {
    errorMessage.innerText = "Informe um número entre 0 e 10"
    return
  }
  errorMessage.innerText = ""

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
  }
  inputNumber.value = ""
  xAttempts++
  console.log(randomNumber)
}

function handleResetClick() {
  toggleScreen()
  random()
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function eventEnter(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}

function random() {
  randomNumber = Math.round(Math.random() * 10)
}
