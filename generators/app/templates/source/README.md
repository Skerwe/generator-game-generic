# Source

The source folder will keep the game's source code. You will need to save/create your game project in this folder.

## Unity

Create your Unity game inside the source folder.

1. Move the `Unity.editorconfig`, `Unity.gitignore` and `Unity.gitattributes` files inside your Unreal Engine project
2. Rename the files by removing Unity from the file name
3. Delete the `UnrealEngine.editorconfig`, `UnrealEngine.gitignore` and the `UnrealEngine.gitattributes`

```folders
.
└─── source/
    └── <Unity-Project-Name>/
        ├── .editorconfig
        ├── .gitattributes
        └── .gitignore
```

## Unreal Engine

Create your Unreal Engine game inside the source folder.

1. Move the `UnrealEngine.editorconfig`, `UnrealEngine.gitignore` and `UnrealEngine.gitattributes` files inside your Unreal Engine project
2. Rename the files by removing UnrealEngine from the file name
3. Delete the `Unity.editorconfig`, `Unity.gitignore` and the `Unity.gitattributes`

```folders
.
└─── source/
    └── <Unreal-Engine-Project-Name>/
        ├── .editorconfig
        ├── .gitattributes
        └── .gitignore
```
