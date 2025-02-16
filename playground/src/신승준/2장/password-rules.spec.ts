import { oneUpperCaseRule } from "./password-rules";

describe("one uppercase rule", () => {
  it.each([
    ["abc", false],
    ["ABC", true],
    ["aBc", true],
  ])("given %s, it returns %s", (input, expected) => {
    const result = oneUpperCaseRule(input);
    expect(result.passed).toEqual(expected);
  });
});
