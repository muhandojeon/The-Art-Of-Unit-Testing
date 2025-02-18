export interface ValidationResult {
    passed: boolean;
    reason?: string;
}

export type ValidationRule = (input: string) => ValidationResult;

// password-verifier0의 verifyPassword 함수를 stateful한 클래스로 변환
export class PasswordVerifier1 {
    private rules: ValidationRule[];
    constructor() {
        this.rules = [];
    }

    addRule(rule: ValidationRule) {
        this.rules.push(rule);
    }

    verify(input: string) {
        if (this.rules.length === 0) {
            throw new Error('There are no rules configured');
        }
        const errors: string[] = [];
        this.rules.forEach((rule: ValidationRule) => {
            const result = rule(input);
            if (!result.passed) {
                errors.push(`error ${result.reason}`);
            }
        });
        return errors;
    }
}