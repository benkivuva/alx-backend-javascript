export default function updateStudentGradeByCity(students, city, newGrades) {
  // Use filter to select students in the specified city
  const studentsInCity = students.filter(student => student.location === city);

  // Use map to update grades for selected students
  const updatedStudents = studentsInCity.map(student => {
    // Find the grade object for the student in newGrades
    const studentGrade = newGrades.find(grade => grade.studentId === student.id);

    // Update the student object with the new grade or set it to 'N/A'
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });

  return updatedStudents;
}
