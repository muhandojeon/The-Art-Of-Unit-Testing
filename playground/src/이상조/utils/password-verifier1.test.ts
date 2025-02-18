import PasswordVerifier1 from "./password-verifier1";

describe("PasswordVerifier1", () => {
  describe("실패하는 룰을 입력할 경우", () => {
    it("rule.reason에 기반한 에러를 반환한다.", () => {
      const verifier = new PasswordVerifier1();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const 실패하는_룰 = (_: string) => {
        return { passed: false, reason: "그냥 실패함" };
      };

      verifier.addRule(실패하는_룰);

      const errors = verifier.verify("아무 값이나 넣음");
      expect(errors.length).toBe(1);
      expect(errors[0]).toContain("그냥 실패함");
    });
  });
});
