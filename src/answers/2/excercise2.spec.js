const { findLongestWord } = require("./excercise2");

describe("findLongestWord", () => {
  it("should return longest word in the sentense", () => {
    expect(findLongestWord("test")).toBe("test");
    expect(findLongestWord("test test")).toBe("test");
    expect(findLongestWord("Web Development Tutorial")).toBe("Development");
  });
});
