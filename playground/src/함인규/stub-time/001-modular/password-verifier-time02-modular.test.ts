import { WeekDay, Verifier } from "./password-verifier-time02-modular"

test('constructor function: on weekends, throws exception', () => {
    const alwaysSunday = () => WeekDay.SUNDAY;
    const verifier = new Verifier([], alwaysSunday);
    expect(() => verifier.verify('anything')).toThrow("It's the weekend!");
})