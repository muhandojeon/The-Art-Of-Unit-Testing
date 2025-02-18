// 대문자 하나 이상을 포함해야 하는 간단한 규칙 함수
export const oneUpperCaseRule = (input: string) => {
    return {
        passed: (input.toLowerCase() !== input),
        reason: 'at least one uppercase needed'
    }
}