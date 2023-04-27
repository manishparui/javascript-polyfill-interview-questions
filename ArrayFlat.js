/**
 * @author Manish Parui
 *
 * This code defines a function named arrayFlat that takes an array as an argument and returns
 * a new flattened array. It uses a recursive approach to flatten the array, meaning that it
 * calls itself with any nested arrays it encounters until all nested arrays have been flattened.
 */

const arrayFlat = (array) => {
  const result = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      result.push(...arrayFlat(element));
    } else {
      result.push(element);
    }
  }
  return result;
};

const array = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];
console.log(arrayFlat(array));
