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
      const errors = verifier.verify("아무 값이나 넣음");
      expect(errors.length).toBe(1);
    });

    it("에러는 실패하는 룰의 에러를 반환한다.", () => {
      const verifier = makeVerifierWith성공Rules();
      const errors = verifier.verify("아무 값이나 넣음");
      expect(errors[0]).toContain("그냥 실패함");
    });
  });
});
