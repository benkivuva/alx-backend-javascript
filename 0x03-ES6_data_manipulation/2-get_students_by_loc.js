export default function getStudentsByLocation(students, city) {
  // Use filter to select students located in the specified city
  const studentsInCity = students.filter(student => student.location === city);
  return studentsInCity;
}
