let students = [
  {
    name: 'Maurício Augusto',
    av1: 6,
    av2: 5
  },
  {
    name: 'Ary Augusto',
    av1: 9,
    av2: 9
  },
  {
    name: 'Edna Augusto',
    av1: 10,
    av2: 7
  },
  {
    name: 'André Augusto',
    av1: 8,
    av2: 7
  },
  {
    name: 'Quelita Augusto',
    av1: 10,
    av2: 10
  },

];

function average(av1, av2){
  return ((av1 + av2) / 2).toFixed(1)
}

function finalAverage(student){

  if(average >= 7){
    return `
      Parabéns ${student.name}. Sua nota foi ${average(student.av1, student.av2)} e você passou!
    `
  }else{
    return `
      ${student.name}, infelizmente sua nota foi ${average(student.av1, student.av2)} e você não passou.
    `
  };
};

for(let student of students){
  let message = finalAverage(student);
  alert(message);
};







