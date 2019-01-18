'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-game-generic:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ appname: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
