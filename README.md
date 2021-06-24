# Generic Game Folder Structure Generator

[![NPM version][npm-image]][npm-url]
[![Node.js Package](https://github.com/Skerwe/generator-game-generic/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Skerwe/generator-game-generic/actions/workflows/npm-publish.yml)
[![Node.js CI](https://github.com/Skerwe/generator-game-generic/actions/workflows/node.js.yml/badge.svg)](https://github.com/Skerwe/generator-game-generic/actions/workflows/node.js.yml)
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

> A practical folder structure for your next game development project. These folders organize your game project in a logical structure based on resource type.

```folders
.
├── assets/
├── docs/
├── game/
│   ├── cordova/
│   ├── html5/
│   ├── linux/
│   ├── nwjs/
│   ├── scirra-arcade/
│   └── windows/
├── source/
├── .editorconfig
├── .gitattributes
├── .gitignore
├── README.md
└── LICENSE

```

## Installation

First, install [Yeoman](http://yeoman.io) and generator-game-generic using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-game-generic
```

Then generate your new project:

```bash
yo game-generic
```

or

```bash
yo game-generic my-game-codename
```

## Versioning configuration

After creating your game project folder structure, you will need to [configure version control for your preferred game engine or framework](generators/app/templates/source/README.md)

Currently included are `.gitignore` and `.gitattribute` files for **Unity**, **Unreal Engine** and **Construct 2/3**.

## This project was built with

* [Yeoman](http://yeoman.io/): The web's scaffolding tool
* [Game Development Project Structure](https://bitbucket.org/indiesagtewerke/codename-project-structure/src/master/)

## License

MIT © [Quintin Henn](http://skerwe.web.za)

[npm-image]: https://badge.fury.io/js/generator-game-generic.svg
[npm-url]: https://npmjs.org/package/generator-game-generic
[daviddm-image]: https://david-dm.org/Skerwe/generator-game-generic.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Skerwe/generator-game-generic
[coveralls-image]: https://coveralls.io/repos/Skerwe/generator-game-generic/badge.svg
[coveralls-url]: https://coveralls.io/r/Skerwe/generator-game-generic
[snyk-image]: https://snyk.io/test/github/Skerwe/generator-game-generic/badge.svg
[snyk-url]: https://snyk.io/test/github/Skerwe/generator-game-generic
