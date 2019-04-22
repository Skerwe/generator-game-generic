"use strict";

const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator game: prompting for appname", () => {
  const componentName = "dummy-game";
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ appname: componentName });
  });

  it("created base project files", () => {
    assert.file(`${componentName}/README.md`);
    assert.file(`${componentName}/VERSION`);
  });

  it("created base dot files", () => {
    assert.file(`${componentName}/.editorconfig`);
  });

  it("created folder structure", () => {
    assert.file(`${componentName}/Assets/`);
    assert.file(`${componentName}/Source/.gitkeep`);
    assert.file(`${componentName}/Game/HTML5-Website/.gitkeep`);
  });
});

describe("generator game: give appname through arguments", () => {
  const componentName = "dummy-game";
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withArguments(componentName);
  });

  it("created project files and folders", () => {
    assert.file(`${componentName}/UNLICENSE`);
    assert.file(`${componentName}/.gitignore`);
    assert.file(`${componentName}/Game/Kongregate`);
  });
});
