export interface ValidationResult {
    passed: boolean;
    reason?: string;
}

export type ValidationRule = (input: string) => ValidationResult;

export const verifyPassword = (input: string, rules: ValidationRule[]): string[] => {
    const errors: string[] = [];
    rules.forEach((rule: ValidationRule) => {
        const result = rule(input);
        if (!result.passed) {
            errors.push(`error ${result.reason}`);
        }
    });
    return errors;
};