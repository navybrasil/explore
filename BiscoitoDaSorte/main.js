const screenFortuneCookie = document.querySelector(".screenFortuneCookie")
const screenOpenedCookie = document.querySelector(".screenOpenedCookie")
const clickCookie = document.querySelector("#clickCookie")
const btnCloseCookie = document.querySelector("#btnCloseCookie")
const msgFortuneCookie = document.querySelector("#msgFortuneCookie")
const fortuneCookie = [
  "Seja paciente, a vida trará coisas boas.",
  "Demonstre amor e alegria, a paz nasce dentro de si.",
  "Não compense a ira com falta de razão.",
  "Defeitos e virtudes são faces da mesma moeda.",
  "A maior torre começa no solo.",
  "Seja flexível, não forte.",
  "Organize o coração, assim como os cabelos.",
  "Tres coisas nunca voltam: flecha lançada, palavra dita, oportunidade perdida.",
  "Juventude é estado de espírito.",
  "Colhemos o que plantamos.",
  "Forme os filhos com bons exemplos.",
  "Siga os bons, aprenda com eles.",
  "Montanha não tapa o sol.",
  "Bom-senso vale mais.",
  "Quem quer rosas, aceita espinhos.",
  "Amigos ensinam lições.",
  "Quem se importa, não é tolo.",
  "Adversidade reflete o verdadeiro eu.",
  "Lamentar o que não temos, desperdiçamos o que temos.",
  "Flor é incompleta sem folhas.",
  "Entusiasmo é vitória.",
  "Riso é distância entre duas pessoas.",
  "Defeitos são fortes sem amor.",
  "Amizade e amor se unem num piscar.",
  "Surpreenda e seja surpreendido.",
  "Faça pequenas coisas, coisas maiores lhe serão confiadas.",
  "Paciência na adversidade é coração sensível.",
  "Sorte favorece mente preparada.",
  "Visão clara vem do coração.",
  "Olhe para dentro, acorde.",
  "As pessoas lembram como se sentiram.",
  "Espere pelo mais sábio conselho: o tempo.",
  "Todas as coisas são difíceis antes de serem fáceis.",
  "Se sente só, construiu muros.",
  "Vencer é suor e engenho.",
  "Amor está perto, imagine.",
  "Você é do tamanho do seu sonho.",
  "Felicidade está ao lado.",
  "Conhecimento é virtude, ignorância é vício.",
  "Amor-próprio é primeiro e último amor.",
  "Deixe de lado as preocupações, seja feliz.",
  "Vontade das pessoas é melhor lei.",
  "Pensamento é o que somos.",
  "Medo do fracasso é maior barreira para o sucesso.",
  "Pessimista vê dificuldade, otimista vê oportunidade.",
  "Grandes realizações foram feitas por cansados e desanimados.",
  "Insucesso é oportunidade para recomeçar com experiência.",
  "Coragem é resistência ao medo, domínio do medo.",
  "Verdadeiro homem mede sua força no obstáculo.",
  "Vencer obstáculo é ter força do leão e prudência da serpente.",
  "Adversidade desperta capacidades.",
  "Motivação não é transformação, mas passo na direção.",
  "Falta de fé, motivação e criatividade empobrece o ser humano.",
  "Inspiração vem dos outros, motivação vem de dentro.",
  "Não acredite em pessoas especiais, mas em momentos especiais com pessoas normais.",
  "A vida tem 4 sentidos: amar, sofrer, lutar e vencer.",
  "Nada é por acaso, acredite em seus sonhos e potenciais.",
  "Acredite em milagres, mas não dependa deles.",
  "Você sempre será sua melhor companhia.",
  "Realize o óbvio, pense no improvável e conquiste o impossível.",
]

clickCookie.addEventListener("click", handleTryClick)
btnCloseCookie.addEventListener("click", toggleScreen)
document.addEventListener("keydown", eventEnter)

function handleTryClick() {
  let index = random()
  msgFortuneCookie.innerHTML = fortuneCookie[index]
  toggleScreen()
}

function toggleScreen() {
  screenFortuneCookie.classList.toggle("hide")
  screenOpenedCookie.classList.toggle("hide")
}

function random(index) {
  index = Math.round(Math.random() * 47)
  console.log(index)
  return index
}

function eventEnter(e) {
  if (e.key == "Enter" && screenFortuneCookie.classList.contains("hide")) {
    handleTryClick()
  } else if (
    e.key == "Enter" &&
    screenOpenedCookie.classList.contains("hide")
  ) {
    toggleScreen()
  }
}
