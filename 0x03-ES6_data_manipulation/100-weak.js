export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const nQuery = weakMap.get(endpoint);
    if (nQuery >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, nQuery + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
