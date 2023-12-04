export default function updateUniqueItems(inputMap) {
  // Check if the input is a Map
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through each entry in the map
  for (const [item, quantity] of inputMap) {
    // Check if the quantity is 1, and update it to 100
    if (quantity === 1) {
      inputMap.set(item, 100);
    }
  }

  return inputMap;
}
