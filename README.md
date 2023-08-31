# Remotion player with interactive text

Welcome to my Remotion project!

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
- known issues: 
    - text jump:
        - description: when we move the text box during playing of the video, text will jump after mouse release. 
        - possible cause: maybe it's because that draggable component access dom component via findDom