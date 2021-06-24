"use strict";

const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator game: prompting for appname", () => {
  const componentName = "dummy-game";
  let tempPath;

  beforeAll((done) =>
    helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ appname: componentName })
      .on("end", done)
      .then((result) => {
        tempPath = result;
      })
  );

  it("created base project files", () => {
    assert.file([
      `${tempPath}/${componentName}/README.md`,
      `${tempPath}/${componentName}/UNLICENSE`
    ]);
  });

  it("created base dot files", () => {
    assert.file([
      `${tempPath}/${componentName}/.editorconfig`,
      `${tempPath}/${componentName}/.gitignore`,
      `${tempPath}/${componentName}/.gitattributes`
    ]);
  });

  it("created folder structure", () => {
    assert.file([
      `${tempPath}/${componentName}/assets/README.md`,
      `${tempPath}/${componentName}/docs/README.md`,
      `${tempPath}/${componentName}/game/Cordova/README.md`,
      `${tempPath}/${componentName}/game/README.md`,
      `${tempPath}/${componentName}/source/README.md`
    ]);
  });
});

describe("generator game: give appname through arguments", () => {
  const componentName = "dummy-game";
  let tempPath;

  beforeAll((done) =>
    helpers
      .run(path.join(__dirname, "../generators/app"))
      .withArguments(componentName)
      .on("end", done)
      .then((result) => {
        tempPath = result;
      })
  );

  it("created base project files", () => {
    assert.file([`${tempPath}/${componentName}/README.md`]);
  });

  it("created base dot files", () => {
    assert.file([
      `${tempPath}/${componentName}/.editorconfig`,
      `${tempPath}/${componentName}/.gitignore`,
      `${tempPath}/${componentName}/.gitattributes`
    ]);
  });

  it("created folder structure", () => {
    assert.file([
      `${tempPath}/${componentName}/assets/README.md`,
      `${tempPath}/${componentName}/docs/README.md`,
      `${tempPath}/${componentName}/game/README.md`,
      `${tempPath}/${componentName}/source/README.md`
    ]);
  });
});
