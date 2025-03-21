/* eslint-disable @typescript-eslint/no-unused-vars */
import PasswordVerifier1, { type Rule } from "./password-verifier1";

describe("PasswordVerifier1", () => {
  let verifier: PasswordVerifier1;

  beforeEach(() => {
    verifier = new PasswordVerifier1();
  });

  describe("실패하는 룰을 입력할 경우", () => {
    let 실패하는_룰: Rule;
    let errors: string[];

    beforeEach(() => {
      실패하는_룰 = (_: string) => {
        return { passed: false, reason: "그냥 실패함" };
      };
      verifier.addRule(실패하는_룰);
      errors = verifier.verify("아무 값이나 넣음");
    });

    it("rule.reason에 기반한 에러를 반환한다.", () => {
      expect(errors[0]).toContain("그냥 실패함");
    });

    it("에러는 하나만 존재한다.", () => {
      expect(errors.length).toBe(1);
    });
  });

  describe("성공하는 룰을 입력할 경우", () => {
    let 성공하는_룰: Rule;
    let errors: string[];

    beforeEach(() => {
      성공하는_룰 = (_: string) => {
        return { passed: true, reason: "성공함" };
      };
      verifier.addRule(성공하는_룰);
      errors = verifier.verify("아무 값이나 넣음");
    });

    it("에러는 하나도 존재하지 않는다.", () => {
      expect(errors.length).toBe(0);
    });
  });

  describe("성공하는 룰과 실패하는 룰을 입력할 경우", () => {
    let 성공하는_룰: Rule;
    let 실패하는_룰: Rule;
    let errors: string[];

    beforeEach(() => {
      성공하는_룰 = (_: string) => {
        return { passed: true, reason: "성공함" };
      };

      실패하는_룰 = (_: string) => {
        return { passed: false, reason: "그냥 실패함" };
      };

      verifier.addRule(성공하는_룰);
      verifier.addRule(실패하는_룰);

      errors = verifier.verify("아무 값이나 넣음");
    });

    it("에러는 하나만 존재한다.", () => {
      expect(errors.length).toBe(1);
    });

    it("에러는 실패하는 룰의 에러를 반환한다.", () => {
      expect(errors[0]).toContain("그냥 실패함");
    });
  });
});

const make_실패하는_룰 = (reason: string): Rule => {
  return (_: string) => {
    return { passed: false, reason };
  };
};

const make_성공하는_룰 = (reason: string): Rule => {
  return (_: string) => {
    return { passed: true, reason };
  };
};

describe("PasswordVerifier1", () => {
  let verifier: PasswordVerifier1;

  beforeEach(() => {
    verifier = new PasswordVerifier1();
  });

  describe("실패하는 룰을 입력할 경우", () => {
    let errors: string[];

    beforeEach(() => {
      verifier.addRule(make_실패하는_룰("그냥 실패함"));
      errors = verifier.verify("아무 값이나 넣음");
    });

    it("rule.reason에 기반한 에러를 반환한다.", () => {
      expect(errors[0]).toContain("그냥 실패함");
    });

    it("에러는 하나만 존재한다.", () => {
      expect(errors.length).toBe(1);
    });
  });

  describe("성공하는 룰을 입력할 경우", () => {
    let errors: string[];

    beforeEach(() => {
      verifier.addRule(make_성공하는_룰("성공함"));
      errors = verifier.verify("아무 값이나 넣음");
    });

    it("에러는 하나도 존재하지 않는다.", () => {
      expect(errors.length).toBe(0);
    });
  });

  describe("성공하는 룰과 실패하는 룰을 입력할 경우", () => {
    let errors: string[];

    beforeEach(() => {
      verifier.addRule(make_성공하는_룰("성공함"));
      verifier.addRule(make_실패하는_룰("그냥 실패함"));

      errors = verifier.verify("아무 값이나 넣음");
    });

    it("에러는 하나만 존재한다.", () => {
      expect(errors.length).toBe(1);
    });

    it("에러는 실패하는 룰의 에러를 반환한다.", () => {
      expect(errors[0]).toContain("그냥 실패함");
    });
  });
});

const makeVerifier = () => new PasswordVerifier1();

const makeVerifierWith성공Rules = () => {
  const verifier = makeVerifier();
  verifier.addRule(make_성공하는_룰("성공함"));
  return verifier;
};

const makeVerifierWith실패Rules = () => {
  const verifier = makeVerifier();
  verifier.addRule(make_실패하는_룰("그냥 실패함"));
  return verifier;
};

describe("PasswordVerifier1", () => {
  describe("실패하는 룰을 입력할 경우", () => {
    it("rule.reason에 기반한 에러를 반환한다.", () => {
      const verifier = makeVerifierWith실패Rules();
      const errors = verifier.verify("아무 값이나 넣음");
      expect(errors[0]).toContain("그냥 실패함");
    });

    it("에러는 하나만 존재한다.", () => {
      const verifier = makeVerifierWith실패Rules();
      const errors = verifier.verify("아무 값이나 넣음");
      expect(errors.length).toBe(1);
    });
  });

  describe("성공하는 룰을 입력할 경우", () => {
    it("에러는 하나도 존재하지 않는다.", () => {
      const verifier = makeVerifierWith성공Rules();
      const errors = verifier.verify("아무 값이나 넣음");
      expect(errors.length).toBe(0);
    });
  });

  describe("성공하는 룰과 실패하는 룰을 입력할 경우", () => {
    it("에러는 하나만 존재한다.", () => {
      const verifier = makeVerifierWith성공Rules();
      verifier.addRule(make_실패하는_룰("그냥 실패함"));
      const errors = verifier.verify("아무 값이나 넣음");
      expect(errors.length).toBe(1);
    });

    it("에러는 실패하는 룰의 에러를 반환한다.", () => {
      const verifier = makeVerifierWith성공Rules();
      verifier.addRule(make_실패하는_룰("그냥 실패함"));
      const errors = verifier.verify("아무 값이나 넣음");
      expect(errors[0]).toContain("그냥 실패함");
    });
  });
});

test("verifier에 실패하는 룰을 입력할 경우 rule.reason에 기반한 에러를 반환한다.", () => {
  const verifier = makeVerifierWith실패Rules();
  const errors = verifier.verify("아무 값이나 넣음");
  expect(errors[0]).toContain("그냥 실패함");
});

test("verifier에 실패하는 룰을 입력할 경우 에러는 하나만 존재한다.", () => {
  const verifier = makeVerifierWith실패Rules();
  const errors = verifier.verify("아무 값이나 넣음");
  expect(errors.length).toBe(1);
});

test("verifier에 성공하는 룰을 입력할 경우 에러는 하나도 존재하지 않는다.", () => {
  const verifier = makeVerifierWith성공Rules();
  const errors = verifier.verify("아무 값이나 넣음");
  expect(errors.length).toBe(0);
});

test("verifier에 성공하는 룰과 실패하는 룰을 입력할 경우 에러는 하나만 존재한다.", () => {
  const verifier = makeVerifierWith성공Rules();
  verifier.addRule(make_실패하는_룰("그냥 실패함"));
  const errors = verifier.verify("아무 값이나 넣음");
  expect(errors.length).toBe(1);
});

test("verifier에 성공하는 룰과 실패하는 룰을 입력할 경우 에러는 실패하는 룰의 에러를 반환한다.", () => {
  const verifier = makeVerifierWith성공Rules();
  verifier.addRule(make_실패하는_룰("그냥 실패함"));
  const errors = verifier.verify("아무 값이나 넣음");
  expect(errors[0]).toContain("그냥 실패함");
});

test("verify에 룰이 입력되지 않으면 에러를 반환한다.", () => {
  const verifier = makeVerifier();
  try {
    verifier.verify("아무 값이나 넣음");
  } catch (error) {
    if (error instanceof Error) {
      expect(error.message).toContain("룰이 없습니다.");
    }
  }
});

test("verify에 룰이 입력되지 않으면 에러를 반환한다.", () => {
  const verifier = makeVerifier();
  expect(() => verifier.verify("아무 값이나 넣음")).toThrowError(
    /룰이 없습니다./
  );
});
