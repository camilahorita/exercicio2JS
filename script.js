let students = [
  {
    name: "Paula",
    firstGrade: 9,
    secondGrade: 8.5
  },
  {
    name: "João",
    firstGrade: 6,
    secondGrade: 7
  },
  {
    name: "Maria",
    firstGrade: 9,
    secondGrade: 10
  }
]

function finalGrade (firstGrade, secondGrade) {
  let finalGrade = (firstGrade + secondGrade)/2;
  return finalGrade;
}

for( let student of students) {
  let myGrade = finalGrade(student.firstGrade, student.secondGrade);
  if (myGrade>=7){
    alert(` A média do(a) aluno(a) ${student.name} é: ${myGrade} 

    Parabéns ${student.name}, você foi aprovado(a)!`);
  } else {
    alert(` A média do(a) aluno(a) ${student.name} é: ${myGrade} 

    Não foi dessa vez ${student.name}, tente novamente!`);
  }
}
