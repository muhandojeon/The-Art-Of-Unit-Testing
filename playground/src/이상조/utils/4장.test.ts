import { verifyPassword, injectDependencies, resetDependencies } from "./4장";

describe("verifyPassword", () => {
  afterEach(resetDependencies);

  describe("given logger and passing scenario", () => {
    it("calls the logger with PASS", () => {
      let logged = "";

      const mockLog = {
        info: (text: string) => {
          logged = text;
        },
      };
      injectDependencies({ log: mockLog });

      verifyPassword("anything", []);

      expect(logged).toMatch(/PASSED/);
    });
  });
});
