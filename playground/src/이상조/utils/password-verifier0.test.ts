import verifyPassword from "./password-verifier0";

test("잘못된 이름이 붙은 테스트", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const 잘못된_룰 = (_: string) => {
    return { passed: false, reason: "그냥 실패함" };
  };

  const errors = verifyPassword("아무 값이나 넣음", [잘못된_룰]);

  expect(errors[0]).toMatch("그냥 실패함");
});

test("verifyPassword, 잘못된 룰을 입력할 경우 에러를 반환한다.", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const 잘못된_룰 = (_: string) => {
    return { passed: false, reason: "그냥 실패함" };
  };

  const errors = verifyPassword("아무 값이나 넣음", [잘못된_룰]);

  expect(errors[0]).toContain("그냥 실패함");
});

describe("verifyPassword", () => {
  test("잘못된 룰을 입력할 경우 에러를 반환한다.", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const 잘못된_룰 = (_: string) => {
      return { passed: false, reason: "그냥 실패함" };
    };

    const errors = verifyPassword("아무 값이나 넣음", [잘못된_룰]);

    expect(errors[0]).toContain("그냥 실패함");
  });
});
