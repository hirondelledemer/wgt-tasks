const { GetSecondGreatestLowestNumbers } = require("./excercise4");

describe("GetSecondGreatestLowestNumbers", () => {
  it("should return array of 2nd greatest and 2nd lowest numbers", () => {
    expect(GetSecondGreatestLowestNumbers([])).toStrictEqual([]);
    expect(GetSecondGreatestLowestNumbers([1])).toStrictEqual([]);
    expect(GetSecondGreatestLowestNumbers([1, 1])).toStrictEqual([1, 1]);
    expect(GetSecondGreatestLowestNumbers([1, 2, 3, 4, 5])).toStrictEqual([
      2, 4,
    ]);
    expect(
      GetSecondGreatestLowestNumbers([-5, -4, -3, -2, 1, 0, 1, 2, 3, 4, 5])
    ).toStrictEqual([-4, 4]);
  });
});
