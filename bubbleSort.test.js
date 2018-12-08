const bubbleSort = require("./bubbleSort");

test("bubbleSort should sort [3,2,5,1,0,19] to [0,1,2,3,5,19]", () => {
  expect(bubbleSort([3, 2, 5, 1, 0, 19])).toEqual([0, 1, 2, 3, 5, 19]);
});
