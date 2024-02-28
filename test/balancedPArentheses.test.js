const balancedParentheses = require("../Balanced-Parentheses/balancedParentheses.js");

describe("balancedParentheses function", () => {
  test("should return true for balanced parentheses", () => {
    expect(balancedParentheses("(Hello (,) world (!))")).toBe(true);
    expect(balancedParentheses("Random text (as this) is ok().")).toBe(true);
    expect(balancedParentheses("(hello, world)")).toBe(true);
  });
  test("should return false for unbalanced parentheses", () => {
    expect(balancedParentheses("())(()")).toBe(false);
    expect(balancedParentheses(")(()")).toBe(false);
    expect(balancedParentheses("())(()")).toBe(false);
  });
});
