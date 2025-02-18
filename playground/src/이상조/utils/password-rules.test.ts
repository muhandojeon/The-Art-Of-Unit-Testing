import oneUpperCaseRule from "./password-rules";

describe("oneUpperCaseRule", () => {
  test("대문자가 없는 경우 실패한다.", () => {
    expect(oneUpperCaseRule("password")).toBe(false);
  });

  test("대문자가 있는 경우 성공한다.", () => {
    expect(oneUpperCaseRule("Password")).toBe(true);
  });

  test("또다른 대문자가 있는 경우 성공한다.", () => {
    expect(oneUpperCaseRule("PASSWORD")).toBe(true);
  });
});
