const oneUpperCaseRule = (input: string) => {
  return {
    passed: input.toUpperCase() !== input,
    reason: "대문자가 하나 이상 포함되어야 합니다.",
  };
};

export default oneUpperCaseRule;
