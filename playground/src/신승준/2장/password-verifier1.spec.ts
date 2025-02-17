import { PasswordVerifier } from "./verify-password";

const makeVerifier = () => new PasswordVerifier();
const passingRule = () => () => ({ passed: true, reason: "" });
const failingRule = (reason: string) => () => ({ passed: false, reason });

const makeVerifierWithPassingRule = () => {
  const verifier = makeVerifier();
  verifier.addRule(passingRule());
  return verifier;
};

const makeVerifierWithFailingRule = (reason: string) => {
  const verifier = makeVerifier();
  verifier.addRule(failingRule(reason));
  return verifier;
};

describe("PasswordVerifier", () => {
  describe("with a failing rule", () => {
    it("has an error message based on the rule.reason", () => {
      const verifier = makeVerifierWithFailingRule("fake reason");
      const errors = verifier.verify("any value");
      expect(errors[0]).toContain("error fake reason");
    });

    it("has exactly one error", () => {
      const verifier = makeVerifierWithFailingRule("fake reason");
      const errors = verifier.verify("any value");
      expect(errors.length).toBe(1);
    });
  });

  describe("with a passing rule", () => {
    it("has no errors", () => {
      const verifier = makeVerifierWithPassingRule();
      const errors = verifier.verify("any value");
      expect(errors.length).toBe(0);
    });
  });

  it("has no errors", () => {
    const verifier = makeVerifierWithPassingRule();
    const errors = verifier.verify("any value");
    expect(errors.length).toBe(0);
  });
});

describe("with a failing and a passing rule", () => {
  it("has one error", () => {
    const verifier = makeVerifierWithFailingRule("fake reason");
    verifier.addRule(passingRule());
    const errors = verifier.verify("any value");
    expect(errors.length).toBe(1);
  });

  it("has an error message belongs to failed rule", () => {
    const verifier = makeVerifierWithFailingRule("fake reason");
    verifier.addRule(passingRule());
    const errors = verifier.verify("any value");
    expect(errors[0]).toContain("error fake reason");
  });
});

it("verify, with no rules, throws exception", () => {
  const verifier = makeVerifier();

  expect(() => verifier.verify("any value")).toThrowError(
    /no rules configured/
  );
});
