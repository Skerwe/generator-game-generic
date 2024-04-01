import helpers from "yeoman-test";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("generator-game-generic test", () => {
  const componentName = "dummy-game";
  let runResult;

  describe("generator game: prompting for appname", () => {
    beforeEach(async () => {
      runResult = await helpers
        .create(path.join(__dirname, "../generators/app"), {}, {})
        .withAnswers({ appname: componentName })
        .run();
    });

    afterEach(() => {
      if (runResult) {
        runResult.restore();
      }
    });

    it("created base project files", () => {
      runResult.assertFile(`${componentName}/README.md`);
      runResult.assertFile(`${componentName}/UNLICENSE`);
      runResult.assertFile(`${componentName}/.editorconfig`);
      runResult.assertFile(`${componentName}/.gitignore`);
      runResult.assertFile(`${componentName}/.gitattributes`);
    });

    it("created game project files", () => {
      runResult.assertFile(`${componentName}/assets/README.md`);
      runResult.assertFile(`${componentName}/docs/README.md`);
      runResult.assertFile(`${componentName}/game/html5/README.md`);
      runResult.assertFile(`${componentName}/game/README.md`);
      runResult.assertFile(`${componentName}/source/README.md`);
    });
  });

  describe("generator game: give appname through arguments", () => {
    beforeEach(async () => {
      runResult = await helpers
        .create(path.join(__dirname, "../generators/app"), {}, {})
        .withArguments(componentName)
        .run();
    });

    afterEach(() => {
      if (runResult) {
        runResult.restore();
      }
    });

    it("created base project files", () => {
      runResult.assertFile(`${componentName}/README.md`);
      runResult.assertFile(`${componentName}/UNLICENSE`);
      runResult.assertFile(`${componentName}/.editorconfig`);
      runResult.assertFile(`${componentName}/.gitignore`);
      runResult.assertFile(`${componentName}/.gitattributes`);
    });

    it("created game project files", () => {
      runResult.assertFile(`${componentName}/assets/README.md`);
      runResult.assertFile(`${componentName}/docs/README.md`);
      runResult.assertFile(`${componentName}/game/html5/README.md`);
      runResult.assertFile(`${componentName}/game/README.md`);
      runResult.assertFile(`${componentName}/source/README.md`);
    });
  });
});
