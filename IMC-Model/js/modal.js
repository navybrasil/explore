export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open")
  },
  close() {
    Modal.wrapper.classList.remove("open")
    console.log("CLOSE Teclado aqui")
    document.getElementById(".modal-wrapper")
  },
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

export function eventEnter(e) {
  if (e.key == "Enter" && Modal.wrapper.classList.contains("open")) {
    Modal.close()
    console.log("Teclado aqui")
  }
}
