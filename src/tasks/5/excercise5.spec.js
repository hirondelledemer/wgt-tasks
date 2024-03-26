const { getFizzBuzz } = require("./excercise5");

describe("getFizzBuzz", () => {
  it("should return array with 3 and 5 multiples  marked", () => {
    expect(getFizzBuzz([0, 1, 2, 3, 4, 5, 6, 6, 15, 40])).toStrictEqual([
      "0 FizzBuzz",
      1,
      2,
      "3 Fizz",
      4,
      "5 Buzz",
      "6 Fizz",
      "6 Fizz",
      "15 FizzBuzz",
      40,
    ]);
  });
});
