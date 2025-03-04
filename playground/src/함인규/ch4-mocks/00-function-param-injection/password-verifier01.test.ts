import { verifyPassword } from "./password-verifier01";

describe('password verifier with logger', () => {
    describe('when all rules pass', () => {
        it('calls the logger with PASSED', () => {
            let written = '';
            const mockLog = {
                info: (text: string) => {
                    written = text;
                }
            }
            verifyPassword('anything', [], mockLog);
            expect(written).toMatch('PASSED');
        });
    });
});