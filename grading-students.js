// https://www.hackerrank.com/challenges/grading/problem

const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  const finalGrades = [];

  grades.map(grade => {
    if(grade >= 38) {
      const nextMultiple = Math.ceil(grade / 5) * 5;
      const logicRound = nextMultiple - grade;
      if(logicRound >= 3) {
        finalGrades.push(grade);
      } else {
        finalGrades.push(nextMultiple);
      }
    } else {
      finalGrades.push(grade);
    }
  });

  return finalGrades;
}

gradingStudents(grades);