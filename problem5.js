/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
    // result = arr[i] + 1
    // returnedArray.push(result)
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};
