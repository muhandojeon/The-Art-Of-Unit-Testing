import { verifyPassword2, verifyPassword3, WeekDay } from "./password-verifier-time00";

describe('verifier2 - dummy  object', () => {
    test('on weekends, throws exceptioons', () => {
        expect(() => verifyPassword2('anything', [], WeekDay.SUNDAY)).toThrow("It's the weekend!")
    });
})


describe('verifier3 - dummy  function', () => {
    test('on weekends, throws exceptioons', () => {
        const alwaysSunday = () => WeekDay.SUNDAY
        expect(() => verifyPassword3('anything', [], alwaysSunday)).toThrow("It's the weekend!")
    });
})