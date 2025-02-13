import { add } from "./add";

describe("반환값 테스트", () => {
  it("a와 b를 더한 값을 반환한다.", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("타입 테스트", () => {
  it("number 타입을 반환한다.", () => {
    expectTypeOf<typeof add>().returns.toBeNumber();
  });
});
