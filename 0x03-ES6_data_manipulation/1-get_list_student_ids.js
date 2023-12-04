export default function getListStudentIds(students) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use map to extract ids from the array of objects
  const studentIds = students.map(student => student.id);
  return studentIds;
}
