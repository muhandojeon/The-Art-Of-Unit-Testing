const info = (text: string) => {
  console.log("진짜 의존성", text);
};

const log = { info };

/* ---------------------------- */

interface Dependencies {
  log: { info: (text: string) => void };
}

const originalDependencies: Dependencies = {
  log: log,
};

let dependencies = { ...originalDependencies };

const resetDependencies = () => {
  dependencies = { ...originalDependencies };
};

const injectDependencies = (fakes: Dependencies) => {
  Object.assign(dependencies, fakes);
};

const verifyPassword = (
  input: string,
  rules: ((input: string) => boolean)[]
) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.length === 0) {
    dependencies.log.info("PASSED"); //종료점
    return true; //종료점
  }

  dependencies.log.info("FAIL"); //종료점
  return false; //종료점
};

export { verifyPassword, injectDependencies, resetDependencies };
