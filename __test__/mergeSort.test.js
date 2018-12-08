const mergeSort = require("../mergeSort");

test("[1,3,2,0,12,55] should be [0,1,2,3,12,55]", () => {
  expect(mergeSort([1, 3, 2, 0, 12, 55])).toEqual([0, 1, 2, 3, 12, 55]);
});
