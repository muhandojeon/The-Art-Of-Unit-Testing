import { verifyPassword, type ValidationRule } from "./password-verifier0"

test('badly named test', () => {
    const fakeRule: ValidationRule = (input) => ({
        passed: false,
        reason: 'fake reason'
    })
    const errors = verifyPassword('any value', [fakeRule])
    expect(errors[0]).toMatch('fake reason')
})

// USE 전략을 사용한 이름 짓기
test('verifyPassword, given a failing rule, returns errors', () => {
    const fakeRule: ValidationRule = (input) => ({
        passed: false,
        reason: 'fake reason'
    })
    const errors = verifyPassword('any value', [fakeRule])
    expect(errors[0]).toContain('fake reason')
})

// decribe 전략을 사용한 이름 짓기
describe('verifyPassword', () => {
    test('given a failing rule, returns errors', () => {
        const fakeRule: ValidationRule = (input) => ({
            passed: false,
            reason: 'fake reason'
        })
        const errors = verifyPassword('any value', [fakeRule])
        expect(errors[0]).toContain('fake reason')
    })
});

// describe 중첩 사용
describe('verifyPassword', () => {
    describe('given a failing rule', () => {
        test('returns errors', () => {  
            const fakeRule: ValidationRule = (input) => ({
                passed: false,
                reason: 'fake reason'
            })

            const errors = verifyPassword('any value', [fakeRule])
            
            expect(errors[0]).toContain('fake reason')
        })
    })
})

// it 전략을 사용한 이름 짓기
describe('verifyPassword', () => {
    describe('given a failing rule', () => {
        it('returns errors', () => {  
            const fakeRule: ValidationRule = (input) => ({
                passed: false,
                reason: 'fake reason'
            })

            const errors = verifyPassword('any value', [fakeRule])
            
            expect(errors[0]).toContain('fake reason')
        })
    })
})
