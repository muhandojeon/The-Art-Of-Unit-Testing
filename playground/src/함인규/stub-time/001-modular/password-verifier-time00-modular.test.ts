import { inject, WeekDay, verifyPassword } from "./password-verifier-time00-modular";
import moment from 'moment';

const injectDate = (newDay: WeekDay) => {
    const reset = inject({
        moment: function() {
            return {
                day: () => newDay
            }
        } as typeof moment
    })
    return reset;
}

describe('verifyPassword', () => {
    describe('when it is the weekend', () => {
        it('throws an error', () => {
            const reset = injectDate(WeekDay.SATURDAY);
            expect(() => verifyPassword('any input', [])).toThrow("It's the weekend!");
            reset();
        });
    });
});