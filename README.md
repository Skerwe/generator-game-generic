# generator-game-generic

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Known Vulnerabilities][snyk-image]][snyk-url]

> A game development project structure

```folders
.
├── assets/
├── docs/
├── game/
│   ├── amazon-appstore/
│   ├── chrome-web-store/
│   ├── cordova/
│   ├── html5-Website/
│   ├── kongregate/
│   ├── linux/
│   ├── nwjs/
│   ├── scirra-arcade/
│   └── windows/
├── source/
├── .editorconfig
├── .gitattributes
├── .gitignore
├── README.md
└── LICENSE.md

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

## Getting To Know Yeoman

* Yeoman has a heart of gold.
* Yeoman is a person with feelings and opinions, but is very easy to work with.
* Yeoman can be too opinionated at times but is easily convinced not to be.
* Feel free to [learn more about Yeoman](http://yeoman.io/).

## Game Engine Configuration

After creating a game project you will need to [configure version control for Unity and the Unreal Engine](source/README.md)

## License

MIT © [Quintin Henn](http://skerwe.web.za)

[npm-image]: https://badge.fury.io/js/generator-game-generic.svg
[npm-url]: https://npmjs.org/package/generator-game-generic
[travis-image]: https://travis-ci.com/Skerwe/generator-game-generic.svg?branch=master
[travis-url]: https://travis-ci.com/Skerwe/generator-game-generic
[daviddm-image]: https://david-dm.org/Skerwe/generator-game-generic.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Skerwe/generator-game-generic
[coveralls-image]: https://coveralls.io/repos/Skerwe/generator-game-generic/badge.svg
[coveralls-url]: https://coveralls.io/r/Skerwe/generator-game-generic
[snyk-image]: https://snyk.io/test/github/Skerwe/generator-game-generic/badge.svg
[snyk-url]: https://snyk.io/test/github/Skerwe/generator-game-generic
