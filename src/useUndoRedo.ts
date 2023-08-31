import { useState } from "react";

function useUndoRedo(initialState: any, saveStatetoLocalStorage: any) {
  const [past, setPast] = useState<any[]>([]);
  const [present, setPresent] = useState(initialState);
  const [future, setFuture] = useState<any[]>([]);

  const undo = () => {
    if (past.length === 0) {
      console.log("no past");
      return;
    }
    const newPast = [...past];
    const newPresent = newPast.pop();

    setPast(newPast);
    setFuture([present, ...future]);
    setPresent(newPresent);
    saveStatetoLocalStorage(newPresent);
  };

  const redo = () => {
    if (future.length === 0) {
      console.log("no future");
      return;
    }

    const newFuture = [...future];
    const newPresent = newFuture.shift();

    setPast([...past, present]);
    setFuture(newFuture);
    setPresent(newPresent);
    saveStatetoLocalStorage(newPresent);
  };

  const updatePresent = (newState: any) => {
    console.log("new");

    setPast([...past, present]);
    setPresent(newState);
    setFuture([]);
    saveStatetoLocalStorage(newState);
  };

  return { state: present, undo, redo, updatePresent };
}

export default useUndoRedo;