const { toUppercase } = require("./excercise1");

describe("test", () => {
  it("should return sentence with all uppercase words", () => {
    expect(toUppercase("test")).toBe("Test");
    expect(toUppercase("test test")).toBe("Test Test");
    expect(toUppercase("123 456")).toBe("123 456");
    expect(toUppercase("TEST TEST")).toBe("TEST TEST");
    expect(toUppercase("tEST tEST")).toBe("TEST TEST");
    expect(toUppercase("Test Test")).toBe("Test Test");
  });
});
