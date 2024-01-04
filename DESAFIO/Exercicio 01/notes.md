calc = (firstNumber, secondNumber) => {
let sum, sub, mul, div, rest
sum = firstNumber + secondNumber
sub = firstNumber - secondNumber
mul = firstNumber \* secondNumber
div = firstNumber / secondNumber
rest = firstNumber % secondNumber

calculations = [sum, sub, mul, div, rest]
console.log(calculations)
return calculations
}
calc(firstNumber, secondNumber))

let msgCalc = []

for (index of calculations) {
msgCalc.push(`\nA ${rest} dos dois números é: ${calculations[index]}`)
}
