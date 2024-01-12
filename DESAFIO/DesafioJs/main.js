let arrayMsg = []
//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
let contentArray = "Hello World!"
arrayMsg.push(contentArray)

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let firtNumber, secondNumber, result
firtNumber = Number(prompt("Informe o primeiro numero:"))
secondNumber = Number(prompt("Informe o segundo numero:"))
arrayMsg.push(
  `\nO resultado da soma entre ${firtNumber} e ${secondNumber} é: ${
    firtNumber + secondNumber
  }`
)

/*3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

💡 Para saber o tipo de dado você pode usar o operador `typeof`
*/

const resultValue = (typeValue, valueNumber) => {
  let check = typeof valueNumber
  let checkNumber = check == "number" ? true : false
  let sum = firtNumber + secondNumber
  let sub = firtNumber - secondNumber
  let mul = firtNumber * secondNumber
  let div = firtNumber / secondNumber

  switch (typeValue) {
    case "caseNumber":
      n1 = checkNumber == true ? "é um número" : "não é um número"
      arrayMsg.push(`\nO Valor ${valueNumber} fornecido ${n1}`)
      break
    case "caseString":
      n1 = checkNumber == false ? "é uma String" : "não é uma String"
      arrayMsg.push(`\nO Valor ${valueNumber} fornecido ${n1}`)
      break
    case "caseBoolean":
      n1 = check == "boolean" ? "é um booleano" : "não é uma booleano"
      arrayMsg.push(`\nO Valor ${valueNumber} fornecido ${n1}`)
      break
    case "caseCalc":
      arrayMsg.push(
        `\nO resultado da subtração entre ${firtNumber} e ${secondNumber} é: ${sub}\nO resultado da multiplicação entre ${firtNumber} e ${secondNumber} é: ${mul}\nO resultado da divisão entre ${firtNumber} e ${secondNumber} é: ${div}`
      )
      break
    case "parOuImpar":
      let parOuImpar = sum % 2 == 0 ? "É um número par" : "Não é um número par"
      arrayMsg.push(`\nA soma é ${sum} e ${parOuImpar}`)
      break
    case "ImparOupar":
      let ImparOupar =
        sum % 2 !== 0 ? "É um número ímpar" : "Não é um número ímpar"
      arrayMsg.push(`\nA soma é ${sum} e ${ImparOupar}`)

      break
    default:
      break
  }
}
resultValue("caseNumber", 1)
resultValue("caseNumber", "A")

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

resultValue("caseString", "A")
resultValue("caseString", 1)

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
resultValue("caseBoolean", true)
resultValue("caseBoolean", 1)

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
resultValue("caseCalc")
//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
resultValue("parOuImpar")
// alert(parOuImpar)
//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
resultValue("ImparOupar")
alert(arrayMsg)
