export enum WeekDay {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6
}

export interface ValidationResult {
    passed: boolean;
    reason?: string;
}

export type ValidationRule = (input: string) => ValidationResult;

export class PasswordVerifier {
    private rules: ValidationRule[];
    private dayOfWeekFn: () => WeekDay;

    constructor(rules: ValidationRule[], dayOfWeekFn: () => WeekDay) {
        this.rules = rules;
        this.dayOfWeekFn = dayOfWeekFn;
    }

    verify(input: string) {
        if ([WeekDay.SATURDAY, WeekDay.SUNDAY].includes(this.dayOfWeekFn())) {
            throw Error("It's the weekend!")
        }
        // 이곳에 다른 코드를 작성한다.
        return []
    }
}