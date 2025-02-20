import { PasswordVerifier1, type ValidationRule } from "./password-verifier1";

// 검증 룰렛 발생할 수도 있는 상황
describe('PasswordVerifier', () => {
    describe('with a failing rule', () => {
        it('has an error message based on the rule.reason', () => {
            const verifier = new PasswordVerifier1();
            const fakeRule: ValidationRule = (input) => ({
                passed: false,
                reason: 'fake reason'
            })

            verifier.addRule(fakeRule);
            const errors = verifier.verify('any value');
            expect(errors.length).toBe(1);
            expect(errors[0]).toContain('fake reason');
        })
    })
})

// 검증 룰렛 발생 상황 개선
describe('PasswordVerifier', () => {
    describe('with a failing rule', () => {
        it('has an error message based on the rule.reason', () => {
            const verifier = new PasswordVerifier1();
            const fakeRule: ValidationRule = (input) => ({
                passed: false,
                reason: 'fake reason'
            })

            verifier.addRule(fakeRule);
            const errors = verifier.verify('any value');
            expect(errors[0]).toContain('fake reason');
        })

        it('has exactly one error', () => {
            const verifier = new PasswordVerifier1();
            const fakeRule: ValidationRule = (input) => ({
                passed: false,
                reason: 'fake reason'
            })

            verifier.addRule(fakeRule);
            const errors = verifier.verify('any value');
            
            expect(errors.length).toBe(1);
        })
    })
})

// beforeEach 전략 사용
describe('PasswordVerifier', () => {
    let verifier: PasswordVerifier1;

    beforeEach(() => {
        verifier = new PasswordVerifier1();
    })

    describe('with a failing rule', () => {
        let fakeRule: ValidationRule;
        let errors: string[];
        
        beforeEach(() => {
            fakeRule = (input) => ({
                passed: false,
                reason: 'fake reason'
            })

            verifier.addRule(fakeRule);
        });

        it('has an error message based on the rule.reason', () => {
            const errors = verifier.verify('any value');
            expect(errors[0]).toContain('fake reason');
        })

        it('has exactly one error', () => {
            const errors = verifier.verify('any value');
            expect(errors.length).toBe(1);
        })
    })
})

// 스크롤 피로감 줄이기 위한 방법
describe('PasswordVerifier', () => {
    let verifier: PasswordVerifier1;

    beforeEach(() => {
        verifier = new PasswordVerifier1();
    })

    describe('with a failing rule', () => {
        let fakeRule: ValidationRule;
        let errors: string[];
        
        beforeEach(() => {
            fakeRule = (input) => ({
                passed: false,
                reason: 'fake reason'
            })
            verifier.addRule(fakeRule);
            errors = verifier.verify('any value');
        });

        it('has an error message based on the rule.reason', () => { 
            expect(errors[0]).toContain('fake reason');
        })

        it('has exactly one error', () => {
            expect(errors.length).toBe(1);
        })
    })
})

// 테스트 시나리오 더 추가해보기
describe('PasswordVerifier', () => {
    let verifier: PasswordVerifier1;

    beforeEach(() => {
        verifier = new PasswordVerifier1();
    })

    describe('with a failing rule', () => {
        let fakeRule: ValidationRule;
        let errors: string[];
        
        beforeEach(() => {
            fakeRule = (input) => ({
                passed: false,
                reason: 'fake reason'
            })
            verifier.addRule(fakeRule);
            errors = verifier.verify('any value');
        });

        it('has an error message based on the rule.reason', () => { 
            expect(errors[0]).toContain('fake reason');
        })

        it('has exactly one error', () => {
            expect(errors.length).toBe(1);
        })
    })

    describe('with a passing rule', () => {
        let fakeRule: ValidationRule;
        let errors: string[];
        
        beforeEach(() => {
            fakeRule = (input) => ({
                passed: true,
                reason: ''
            })
            verifier.addRule(fakeRule);
            errors = verifier.verify('any value');
        })

        it('has no errors', () => {
            expect(errors.length).toBe(0);
        })
    })

    describe('with a failing and a passing rule', () => {
        let fakeRulePass: ValidationRule;
        let fakeRuleFail: ValidationRule;
        let errors: string[];

        beforeEach(() => {
            fakeRulePass = (input) => ({
                passed: true,
                reason: ''
            })
            fakeRuleFail = (input) => ({
                passed: false,
                reason: 'fake reason'
            })

            verifier.addRule(fakeRulePass);
            verifier.addRule(fakeRuleFail);
            errors = verifier.verify('any value');
        })

        it('has one error', () => {
            expect(errors.length).toBe(1);
        })

        it('error text belongs to failed rule', () => {
            expect(errors[0]).toContain('fake reason');
        })
    })
})

// 팩토리 함수 사용해보기
describe('PasswordVerifier', () => {
    let verifier: PasswordVerifier1;

    beforeEach(() => {
        verifier = new PasswordVerifier1();
    })

    describe('with a failing rule', () => {
        let fakeRule: ValidationRule;
        let errors: string[];
        
        beforeEach(() => {
            fakeRule = makeFailingRule('fake reason');
            verifier.addRule(fakeRule);
            errors = verifier.verify('any value');
        });

        it('has an error message based on the rule.reason', () => { 
            expect(errors[0]).toContain('fake reason');
        })

        it('has exactly one error', () => {
            expect(errors.length).toBe(1);
        })
    })

    describe('with a passing rule', () => {
        let fakeRule: ValidationRule;
        let errors: string[];
        
        beforeEach(() => {
            fakeRule = makePassingRule();
            verifier.addRule(fakeRule);
            errors = verifier.verify('any value');
        })

        it('has no errors', () => {
            expect(errors.length).toBe(0);
        })
    })

    describe('with a failing and a passing rule', () => {
        let fakeRulePass: ValidationRule;
        let fakeRuleFail: ValidationRule;
        let errors: string[];

        beforeEach(() => {
            fakeRulePass = makePassingRule();
            fakeRuleFail = makeFailingRule('fake reason');

            verifier.addRule(fakeRulePass);
            verifier.addRule(fakeRuleFail);
            errors = verifier.verify('any value');
        })

        it('has one error', () => {
            expect(errors.length).toBe(1);
        })

        it('error text belongs to failed rule', () => {
            expect(errors[0]).toContain('fake reason');
        })
    })

    const makeFailingRule = (reason: string): ValidationRule => {
        return (input: string) => ({
            passed: false,
            reason: reason
        })
    };

    const makePassingRule = (): ValidationRule => {
        return (input: string) => ({
            passed: true,
            reason: ''
        })
    };
    
})

// 팩토리 함수 사용해보기 (beforeEach 완전 대체)
const makeVerifier = () => new PasswordVerifier1();
const passingRule = () => ({
    passed: true,
    reason: ''
});

const makeVerifierWithPadssingRule = () => {
    const verifier = makeVerifier();
    verifier.addRule(passingRule);
    return verifier;
};
const makeVerifierWithFailingRule = (reason: string) => {
    const verifier = makeVerifier();
    const fakeRule = () => ({
        passed: false,
        reason: reason
    })
    verifier.addRule(fakeRule);
    return verifier;
};

describe('PasswordVerifier', () => {
    describe('with a failing rule', () => {
        it('has an error message based on the rule.reason', () => { 
            const verifier = makeVerifierWithFailingRule('fake reason');
            const errors = verifier.verify('any value');
            expect(errors[0]).toContain('fake reason');
        })

        it('has exactly one error', () => {
            const verifier = makeVerifierWithFailingRule('fake reason');
            const errors = verifier.verify('any value');
            expect(errors.length).toBe(1);
        })
    })

    describe('with a passing rule', () => {
        it('has no errors', () => {
            const verifier = makeVerifierWithPadssingRule();
            const errors = verifier.verify('any value');
            expect(errors.length).toBe(0);
        })
    })

    describe('with a failing and a passing rule', () => {
        it('has one error', () => {
            const verifier = makeVerifierWithFailingRule('fake reason');
            verifier.addRule(passingRule);
            const errors = verifier.verify('any value');
            expect(errors.length).toBe(1);
        })

        it('error text belongs to failed rule', () => {
            const verifier = makeVerifierWithFailingRule('fake reason');
            verifier.addRule(passingRule);
            const errors = verifier.verify('any value');
            expect(errors[0]).toContain('fake reason');
        })
    })
})

// 팩토리 함수 사용해보기 (describe 사용 안해보기)
test('pass verifier, with failed rule, has an error message based on the rule.reason', () => {
    const verifier = makeVerifierWithFailingRule('fake reason');
    const errors = verifier.verify('any value');
    expect(errors[0]).toContain('fake reason');
})

test('pass verifier, with failed rule, has exactly one error', () => {
    const verifier = makeVerifierWithFailingRule('fake reason');
    const errors = verifier.verify('any value');
    expect(errors.length).toBe(1);
})

test('pass verifier, with passing rule, has no errors', () => {
    const verifier = makeVerifierWithPadssingRule();
    const errors = verifier.verify('any value');
    expect(errors.length).toBe(0);
})

test('pass verifier, with failing and a passing rule, has one error', () => {
    const verifier = makeVerifierWithFailingRule('fake reason');
    verifier.addRule(passingRule);
    const errors = verifier.verify('any value');
    expect(errors.length).toBe(1);
})

test('pass verifier, with failing and a passing rule, error text belongs to failed rule', () => {
    const verifier = makeVerifierWithFailingRule('fake reason');
    verifier.addRule(passingRule);
    const errors = verifier.verify('any value');
    expect(errors[0]).toContain('fake reason');
})

// 오류 처리 테스트 추가
test('verify, with no rules, throws exception', () => {
    const verifier = makeVerifier();
    expect(() => verifier.verify('any value')).toThrow(/no rules configured/);
})