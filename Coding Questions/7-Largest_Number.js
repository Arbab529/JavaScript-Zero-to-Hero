function largestNumber(arr) {
  let largestNumber = arr[0];
  for (const number of arr) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  return largestNumber;
}
console.log(largestNumber([10, 2, 3, 4, 5, 6, 7, 8]));
