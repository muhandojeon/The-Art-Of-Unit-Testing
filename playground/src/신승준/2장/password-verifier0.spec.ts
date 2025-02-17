import { verifyPassword } from "./verify-password";

describe("verifyPassword", () => {
  describe("given a failing rule", () => {
    const fakeRule = () => ({ passed: false, reason: "fake reason" });
    it("returns errrs", () => {
      const errors = verifyPassword("any value", [fakeRule]);

      expect(errors[0]).toContain("error fake reason");
    });
  });
});
