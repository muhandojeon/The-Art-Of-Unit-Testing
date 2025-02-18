import PasswordVerifier1, { type Rule } from "./password-verifier1";

describe("PasswordVerifier1", () => {
  let verifier: PasswordVerifier1;

  beforeEach(() => {
    verifier = new PasswordVerifier1();
  });

  describe("실패하는 룰을 입력할 경우", () => {
    let 실패하는_룰: Rule;
    let errors: string[];

    beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      실패하는_룰 = (_: string) => {
        return { passed: false, reason: "그냥 실패함" };
      };
      verifier.addRule(실패하는_룰);
      errors = verifier.verify("아무 값이나 넣음");
    });

    it("rule.reason에 기반한 에러를 반환한다.", () => {
      expect(errors[0]).toContain("그냥 실패함");
    });

    it("에러는 하나만 존재한다.", () => {
      expect(errors.length).toBe(1);
    });
  });
});
