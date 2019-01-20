"use strict";

const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const rimraf = require("rimraf");

describe("generator-game-generic:app", () => {
  const componentName = "dummy-game";
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ appname: componentName });
  });

  afterAll(() => {
    rimraf.sync(path.join(__dirname, componentName));
  });

  it("creates files", () => {
    assert.file(`${componentName}/README.md`);
  });
});
