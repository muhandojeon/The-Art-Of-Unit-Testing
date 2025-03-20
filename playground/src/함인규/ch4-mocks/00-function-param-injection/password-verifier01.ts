export const verifyPassword = (input: string, rules: ((input: string) => boolean)[], log: {info: (text: string) => void}) => {
    const failed = rules
    .map(rule => rule(input))
    .filter(result => result === false);
    if (failed.length === 0) {
    // 기존 의존성 주입 방식으로는 테스트할 수 없다.
    log.info('PASSED'); // -----종료점
    return true;
    }
    // 기존 의존성 주입 방식으로는 테스트할 수 없다.
    log.info('FAIL'); // -----종료점
    return false;
};
