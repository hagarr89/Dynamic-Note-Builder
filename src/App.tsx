import "./App.scss";
import { INote } from "./components/NoteBuilder";
import NoteBuilder from "./components/NoteBuilder";
import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const init = {
    name: "",
    fields: [],
  };
  const [storedValue, setValue] = useLocalStorage<INote>("note", init);

  const handelSaveToLocal = (note: INote) => {
    setValue(note);
  };

  return (
    <div className="App">
      {storedValue ? (
        <NoteBuilder
          initialValue={storedValue}
          onSaveToLocal={handelSaveToLocal}
        />
      ) : null}
    </div>
  );
}

export default App;
