//quiz de scream.
//para acertar quem era um assassino em cada filme.
//se acertar menos de 3, burro.
//se acertar entre 3 e 4, medio.
//se acertar 5, fã.

let score = 0;

const question1 = prompt("Quem era o assassino no primeiro filme de Scream? \na) Billy Loomis \nb) Stu Macher \nc) Randy Meeks \nd) Sidney Prescott");
if (question1.toLowerCase() === "a" || question1.toLowerCase() === "b") {
  score++;
}

const question2 = prompt("Quem era o assassino no segundo filme de Scream? \na) Mickey Altieri \nb) Roman Bridger \nc) Billy Loomis Jr. \nd) Stu Macher");
if (question2.toLowerCase() === "a" || question2.toLowerCase() === "b") {
  score++;
}

const question3 = prompt("Quem era o assassino no terceiro filme de Scream? \na) Roman Bridger \nb) Billy Loomis Jr. \nc) Mickey Altieri \nd) Stu Macher");
if (question3.toLowerCase() === "a" || question3.toLowerCase() === "b") {
  score++;
}

const question4 = prompt("Quem era o assassino no quarto filme de Scream? \na) Jill Roberts \nb) Charlie Walker \nc) Sidney Prescott \nd) Randy Meeks");
if (question4.toLowerCase() === "a" || question4.toLowerCase() === "b") {
  score++;
}

const question5 = prompt("Quem era o assassino no quinto filme de Scream? \na) Richie Kirsch \nb) Amber Freeman \nc) Sidney Prescott \nd) Randy Meeks");
if (question5.toLowerCase() === "a" || question5.toLowerCase() === "b") {
  score++;
}

if (score < 3) {
  alert(`Você acertou ${score} perguntas. Você é um burro!`);
} else if (score >= 3 && score < 5) {
  alert(`Você acertou ${score} perguntas. Você é médio!`);
} else if (score === 5) {
  alert(`Você acertou ${score} perguntas. Você é um fã de Scream!`);
} 