const { getWovelCount } = require("./excercise3");

describe("getWovelCount", () => {
  it("should return wovel count", () => {
    expect(getWovelCount("tdd")).toBe(0);
    expect(getWovelCount("123")).toBe(0);
    expect(getWovelCount("test")).toBe(1);
    expect(getWovelCount("test test")).toBe(2);
    expect(getWovelCount("Web Development Tutorial")).toBe(9);
  });
});
