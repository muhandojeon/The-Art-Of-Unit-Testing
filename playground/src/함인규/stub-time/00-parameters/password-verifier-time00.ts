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

export const verifyPassword2 = (input: string, rules: ValidationRule[], currentDay: WeekDay) => {
    if ([WeekDay.SATURDAY, WeekDay.SUNDAY].includes(currentDay)) {
        throw Error("It's the weekend!")
    }
    // 이곳에 다른 코드를 작성한다.
    // 발견한 오류를 반환한다.
    return [] ;
}

export const verifyPassword3 = (input: string, rules: ValidationRule[], getDayFn: () => WeekDay) => {
    const dayOfWeek = getDayFn();
    if ([WeekDay.SATURDAY, WeekDay.SUNDAY].includes(dayOfWeek)) {
        throw Error("It's the weekend!")
    }
    // 이곳에 다른 코드를 작성한다.
    // 발견한 오류를 반환한다.
    return [] ;
}