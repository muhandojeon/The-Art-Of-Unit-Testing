import { PasswordVerifier, WeekDay } from "./password-verifier-time01";

describe('verifier', () => {
    test('class constructor: on weekends, throws exception', () => {
        const alwaysSunday = () => WeekDay.SUNDAY;
        const verifier = new PasswordVerifier([], alwaysSunday);
        expect(() => verifier.verify('anything')).toThrow("It's the weekend!");
    })
})