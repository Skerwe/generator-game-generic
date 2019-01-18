'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the kryptonian ${chalk.red('generator-game-generic')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'appname',
        message: 'What is the project name?',
        default: 'generic-game'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.appname;
      this.props = props;
    });
  }

  writing() {
    this.log('Generating project structure ...');

    this.options.onlyFiles = false;
    this.options.deep = true;
    this.options.dot = true;

    this.fs.copy(
      this.templatePath(),
      this.destinationPath(this.props.appname),
      this.options
    );

    this.fs.copy(
      this.templatePath('**/.*'),
      this.destinationPath(this.props.appname),
      this.options
    );
  }

  // install() {
  //   this.installDependencies();
  // }

  end() {

    this.options.onlyFiles = true;
    this.options.deep = true;
    this.options.dot = true;

    this.fs.delete(
      this.destinationPath(this.props.appname + '/**/.*'),
      this.options
    );

    this.log(`Project ${chalk.red(this.props.appname)} completed. Thank you for using this generator. Good bye :)`);
  }

};
