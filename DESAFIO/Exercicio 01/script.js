/*
O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.



Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let firstNumber = Number(prompt("Informe o primeiro número."))
let secondNumber = Number(prompt("Informe o segundo número."))
const operatorsMathematical = [
  {
    name: "soma",
    operator: "+",
    article: "A",
  },
  {
    name: "subtração",
    operator: "-",
    article: "A",
  },
  {
    name: "multiplicação",
    operator: "*",
    article: "A",
  },
  {
    name: "divisão",
    operator: "/",
    article: "A",
  },
  {
    name: "resto da divisão",
    operator: "%",
    article: "O",
  },
]

const calculations = (n1, operators, n2) => {
  switch (operators) {
    case "+":
      return n1 + n2
    case "-":
      return n1 - n2
    case "*":
      return n1 * n2
    case "/":
      return n1 / n2
    case "%":
      return n1 % n2
    default:
      break
  }
}

const msgCalc = []
let calculator
let sum
let parImpar

for (calc of operatorsMathematical) {
  calculator = calculations(firstNumber, calc.operator, secondNumber)

  if (calc.operator == "+") {
    sum = calculator
  }
  if (sum / 2 == 0) {
    parImpar = "Par"
  } else {
    parImpar = "Impar"
  }
  msgCalc.push(
    `\n${calc.article} ${calc.name} dos dois números é: ${calculator}`
  )
}

msgCalc.push(`\nA soma dos dois números é ${parImpar}: ${sum}`)

if (firstNumber == secondNumber) {
  msgCalc.push(`\nOs números inseridos são iguais.`)
} else {
  msgCalc.push(`\n Os números inseridos são diferentes.`)
}

alert(msgCalc)
