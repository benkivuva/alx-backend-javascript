export default function hasValuesFromArray(set, array) {
  // Check if all elements in the array exist within the set
  const allElementsExist = array.every(element => set.has(element));

  return allElementsExist;
}
