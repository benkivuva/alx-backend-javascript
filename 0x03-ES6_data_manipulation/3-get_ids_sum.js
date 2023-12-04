export default function getStudentIdsSum(students) {
  // Use reduce to calculate the sum of all student ids
  const idsSum = students.reduce((acc, student) => acc + student.id, 0);
  return idsSum;
}
