export type Rule = (input: string) => {
  passed: boolean;
  reason: string;
};

class PasswordVerifier1 {
  private rules: Rule[] = [];

  constructor() {
    this.rules = [];
  }

  addRule(rule: Rule) {
    this.rules.push(rule);
  }

  verify(input: string) {
    if (this.rules.length === 0) {
      throw new Error("룰이 없습니다.");
    }

    const errors: string[] = [];

    this.rules.forEach((rule) => {
      const result = rule(input);
      if (!result.passed) {
        errors.push(result.reason);
      }
    });
    return errors;
  }
}

export default PasswordVerifier1;
