# Remotion player with interactive text

Welcome to my Remotion project! In this project, I created a remotion player, with a text that the user can interact with; e.g. drag or change the text.
This is part of me refreshing my knowledge about React / Remotion.

## Demo
Please checkout https://codesandbox.io/s/github/aphuongle95/my_remotion_app to have a preview 

## Commands

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm start
```


## Implementation Steps

- [x] create draggable and input text
- [x] implement undo/redo
    - [x] undoable text input
    - [x] undoable text position
- [x] add background video
- [x] use @remotion/player instead of composition
- [x] pause video on edit / move
- [x] save state locally 
- [x] show last state on browser refresh
- [x] avoid overlay text rerender when video paused
