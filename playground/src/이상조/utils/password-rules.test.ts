import oneUpperCaseRule from "./password-rules";

describe("oneUpperCaseRule", () => {
  test("대문자가 없는 경우 실패한다.", () => {
    const result = oneUpperCaseRule("password");
    expect(result.passed).toEqual(false);
  });

  test("대문자가 있는 경우 성공한다.", () => {
    const result = oneUpperCaseRule("Password");
    expect(result.passed).toEqual(true);
  });

  test("또다른 대문자가 있는 경우 성공한다.", () => {
    const result = oneUpperCaseRule("PASSWORD");
    expect(result.passed).toEqual(true);
  });

  test.each(["Password", "PASSWORD"])(
    "대문자가 있는 경우 성공한다.",
    (password) => {
      const result = oneUpperCaseRule(password);
      expect(result.passed).toEqual(true);
    }
  );

  test.each([
    ["Password", true],
    ["PASSWORD", true],
    ["password", false],
  ])("%s 가 입력되면 %s 반환한다.", (password, expected) => {
    const result = oneUpperCaseRule(password);
    expect(result.passed).toEqual(expected);
  });
});

describe("oneUpperCaseRule with vanilla js for", () => {
  const tests = {
    Password: true,
    PASSWORD: true,
    password: false,
  };

  for (const [password, expected] of Object.entries(tests)) {
    test(`${password} 가 입력되면 ${expected} 반환한다.`, () => {
      const result = oneUpperCaseRule(password);
      expect(result.passed).toEqual(expected);
    });
  }
});
