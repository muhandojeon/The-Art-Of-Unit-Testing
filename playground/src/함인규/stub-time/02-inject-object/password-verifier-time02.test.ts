import { PasswordVerifier, WeekDay, type ValidationRule } from "./password-verifier-time01";

describe('verifier', () => {
    test('class constructor: on weekends, throws exception', () => {
        const alwaysSunday = () => WeekDay.SUNDAY;
        const verifier = new PasswordVerifier([], alwaysSunday);
        expect(() => verifier.verify('anything')).toThrow("It's the weekend!");
    })
})

describe('refactored with constructor', () => {
    const makeVerifier = (rules: ValidationRule[], dayOfWeekFn: () => WeekDay) => {
        return new PasswordVerifier(rules, dayOfWeekFn);
    }

    test('class constructor: on weekends, throws exception', () => {
        const alwaysSunday = () => WeekDay.SUNDAY;
        const verifier = makeVerifier([], alwaysSunday);
        expect(() => verifier.verify('anything')).toThrow("It's the weekend!");
    })

    test('class constructor: on weekdays, with no rules, passes', () => {
        const alwaysMonday = () => WeekDay.MONDAY;
        const verifier = makeVerifier([], alwaysMonday);
        expect(() => verifier.verify('anything')).not.toThrow();
    })
})