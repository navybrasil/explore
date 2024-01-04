/*

💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;



Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const listStudents = [
  {
    name: "Patricia",
    firtNote: 8,
    secondNote: 9.5,
  },
  {
    name: "Pedro",
    firtNote: 10,
    secondNote: 2,
  },
  {
    name: "Gabriel",
    firtNote: 4.2,
    secondNote: 5.4,
  },
  {
    name: "Eliéser",
    firtNote: 10,
    secondNote: 9.5,
  },
]
let msgResult
calcAverage = (name, n1, n2) => {
  average = ((n1 + n2) / 2).toFixed(2)

  if (average >= 7) {
    msgResult = `Parabéns, ${name} Você foi aprovado(a) no concurso!`
  } else {
    msgResult = `Não foi dessa vez, ${name}! Tente novamente!`
  }

  return average, msgResult
}

let msg = []

for (calc of listStudents) {
  calcAverage(calc.name, calc.firtNote, calc.secondNote)
  msg.push(
    `\n  - A média do(a) aluno(a) ${calc.name} é: ${average}\n${msgResult}`
  )
}
alert(msg)
