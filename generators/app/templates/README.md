# Game Development Project Structure

A practical folder structure for your next game development project. These folders organize your game project in a logical structure based on resource type.

## About

Root folders should be further divided to fit your project needs. Each folder contains examples on how it can be structured.

- Assets - all art assets, sounds and music files
- Docs - project documentation and manual
- Game - playable demo, tests builds and final distribution
- Source - the game source code

```folders
.
└── <Project-Codename>/
    ├── assets
    ├── docs
    ├── game
    └── source
```

### .editorconfig

The `.editorconfig` file encourage and help to maintain consistent coding styles between different editors and IDEs. For more details, please refer to the [EditorConfig project](http://editorconfig.org/).

### .gitignore

Comprehensive set of ignores on GitHub: [https://github.com/github/gitignore](https://github.com/github/gitignore)

### Versioning large files

Large files such as audio, videos, graphics, and binary files doesn't change as often as the game source code files.  
Use [Git Large File Storage](https://git-lfs.github.com/)(LFS) to version these files.

### LICENCE

An open source license protects contributors and users. Businesses and savvy developers won’t touch a project without this protection. [Choose a license](https://choosealicense.com/) for your project.

### VERSION

Learn about [Semantic Versioning](https://semver.org/) and how to use it in your project.

## Getting Started

Clone repository with the codename for your new game project:  
`git clone https://Skerwe@bitbucket.org/indiesagtewerke/codename-project-structure.git Codename`

OR

Use the Yeoman [generator-game-generic](https://github.com/Skerwe/generator-game-generic) as a scaffold for your new game project.
