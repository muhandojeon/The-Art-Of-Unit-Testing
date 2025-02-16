export const oneUpperCaseRule = (input: string) => ({
  passed: input.toLowerCase() !== input,
  reason: "at least one upper case needed",
});
