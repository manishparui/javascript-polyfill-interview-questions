/**
 * @author Manish Parui
 *
 * This code defines a function named arrayFilter that takes an array and a filtering
 * function as arguments and returns a new array that contains only the elements from
 * the input array that pass the filtering function's test.
 */

const arrayFilter = (array, filterFunction) => {
  const result = [];
  for (const element of array) {
    if (filterFunction(element)) {
      result.push(element);
    }
  }
  return result;
};

const array = [1, 2, 3, 4, 5, 6, 6, 6, 9];
const isEven = (number) => number % 2 === 0;
console.log(arrayFilter(array, isEven));
