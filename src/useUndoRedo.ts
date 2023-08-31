import { useState } from "react";

// @ts-ignore
function useUndoRedo(initialState, saveStatetoLocalStorage) {
  const [past, setPast] = useState([]);
  const [present, setPresent] = useState(initialState);
  const [future, setFuture] = useState([]);

  const undo = () => {
    if (past.length === 0) {
      console.log("no past")
      return;
    }
    const newPast = [...past];
    const newPresent = newPast.pop();
    // console.log(newPresent)
    // console.log(future)

    setPast(newPast);
    // @ts-ignore
    setFuture([present, ...future]);
    setPresent(newPresent);
    saveStatetoLocalStorage(newPresent)
  };

  const redo = () => {
    if (future.length === 0) {
      console.log("no future")
      return;
    }

    const newFuture = [...future];
    const newPresent = newFuture.shift();

    // @ts-ignore
    setPast([...past, present]);
    setFuture(newFuture);
    setPresent(newPresent);
    saveStatetoLocalStorage(newPresent)
  };

  // @ts-ignore
  const updatePresent = (newState) => {
    console.log("new")
    // @ts-ignore
    setPast([...past, present]);
    setPresent(newState);
    setFuture([]);
    saveStatetoLocalStorage(newState)
  };

  return { state: present, undo, redo, updatePresent };
}

export default useUndoRedo;