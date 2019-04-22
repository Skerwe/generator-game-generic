"use strict";

const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-game-generic:app", () => {
  const componentName = "dummy-game";
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ appname: componentName });
  });

  it("created files and folder structure", () => {
    assert.file(`${componentName}/README.md`);
    assert.file(`${componentName}/.editorconfig`);
    assert.file(`${componentName}/VERSION`);
    assert.file(`${componentName}/Assets/`);
    assert.file(`${componentName}/Source/.gitkeep`);
    assert.file(`${componentName}/Game/HTML5-Website/.gitkeep`);
  });
});
