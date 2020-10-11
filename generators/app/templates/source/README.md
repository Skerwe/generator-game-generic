# Source

The source folder will keep the game's source code. You will need to save/create your game project in this folder.

## Unity

Create your Unity game inside the source folder.

1. Replace the root `.editorconfig` with the `Unity.editorconfig` _(delete current .editorconfig and rename Unity.editorconfig to .editorconfig)_
2. Move the `Unity.gitignore` and the `Unity.gitattributes` inside your Unity project `source/<Unity-Project-Name>/` and rename the files by removing Unity from the name
3. Delete the `UnrealEngine.editorconfig`, `UnrealEngine.gitignore` and the `UnrealEngine.gitattributes`

## Unreal Engine

Create your Unreal Engine game inside the source folder.

1. Replace the root `.editorconfig` with the `UnrealEngine.editorconfig` _(delete current .editorconfig and rename UnrealEngine.editorconfig to .editorconfig)_
2. Move the `UnrealEngine.gitignore` and the `UnrealEngine.gitattributes` inside your Unreal Engine project `source/<Unreal-Engine-Project-Name>/` and rename the files by removing UnrealEngine from the name
3. Delete the `Unity.editorconfig`, `Unity.gitignore` and the `Unity.gitattributes`
