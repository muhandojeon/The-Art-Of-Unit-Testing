import { PasswordVerifier } from "./password-verifier-time03";
import { type TimeProviderInterface, WeekDay } from "./time-provider-interface";

class FakeTimeProvider implements TimeProviderInterface {
    public fakeDay: WeekDay;

    getDay(): WeekDay {
        return this.fakeDay;
    }
}

describe('password verifier with interfaces', () => {
    test('on weekends, throws exceptions', () => {
        const stubTimeProvider = new FakeTimeProvider();
        stubTimeProvider.fakeDay = WeekDay.SUNDAY;
        const verifier = new PasswordVerifier([], stubTimeProvider);
        
        expect(() => verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });
});