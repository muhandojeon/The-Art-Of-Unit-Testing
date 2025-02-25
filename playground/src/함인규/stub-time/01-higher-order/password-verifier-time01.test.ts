import { makeVerifier, WeekDay } from "./password-verifier-time01";

describe('verifier', () => {
    test('factory method: on weekends, throws exceptions', () => {
        const alwaysSunday = () => WeekDay.SUNDAY;
        const verifier = makeVerifier([], alwaysSunday);
        expect(() => verifier('anything')).toThrow("It's the weekend!")
    })
})