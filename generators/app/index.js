'use strict';

var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);

    this.argument('appname', { type: String, required: true });
  }

  createFolderStructure() {
    var done = this.async();
    this.log('Generating project file structure');

    this.fs.copy(
      this.templatePath('**'),
      this.destinationPath(this.options.appname),
      { onlyFiles: false, deep: true, dot: true }
    );

    done();
  }

  copyMiscFiles() {
    var done = this.async();
    this.log('Copying miscellaneous files');

    this.fs.copy(
      this.templatePath('.**'),
      this.destinationPath(this.options.appname),
      { onlyFiles: false, deep: true, dot: true }
    );

    done();
  }

};
