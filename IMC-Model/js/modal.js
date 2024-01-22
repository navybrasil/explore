export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open")
  },
  close() {
    Modal.wrapper.classList.remove("open")
    document.getElementById(".modal-wrapper")
  },
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

// tecla esc
window.addEventListener("keydown", handKeydown)
function handKeydown(event) {
  // console.log(event.key) // MOSTRA A TECLA PRECIONADA
  if (event.key === "Escape") {
    Modal.close()
  }
}
