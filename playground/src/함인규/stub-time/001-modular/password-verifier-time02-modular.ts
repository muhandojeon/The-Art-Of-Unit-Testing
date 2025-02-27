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

export const Verifier = function(rules: ValidationRule[], dayOfWeekFn: () => WeekDay) {
   this.verify = function(input: string) {
    if ([WeekDay.SATURDAY, WeekDay.SUNDAY].includes(dayOfWeekFn())) {
        throw Error("It's the weekend!")
    }
    // 이곳에 다른 코드를 작성한다.
   }
}