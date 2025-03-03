import moment from 'moment';

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

const originalDependencies = {
    moment,
};

type Dependencies = typeof originalDependencies;
let dependencies: Dependencies = { ...originalDependencies };

export const inject = (fakes: Dependencies) => {
    Object.assign(dependencies, fakes);
    return function reset() {
        dependencies = { ...originalDependencies };
    } 
}

export const verifyPassword = (input: string, rules: ValidationRule[]) => {
    const dayOfWeek = dependencies.moment().day();
    if ([WeekDay.SATURDAY, WeekDay.SUNDAY].includes(dayOfWeek)) {
        throw Error("It's the weekend!")
    }
    // 이곳에 다른 코드를 작성한다.
    // 발견한 오류를 반환한다.
    return [];
}