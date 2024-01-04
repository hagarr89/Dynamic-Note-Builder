import "./App.scss";
import { INote } from "./components/NoteBuilder";
import NoteBuilder from "./components/NoteBuilder";
import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [initialValue, setInitialValue] = useState<INote>({
    name: null,
    fields: [],
  });
  const [storedValue, setValue] = useLocalStorage<INote>("note", initialValue);

  useEffect(() => {
    setInitialValue(storedValue);
  }, [storedValue]);

  const handelSaveToLocal = (note: INote) => {
    setValue(note);
  };

  return (
    <div className="App">
      <NoteBuilder
        initialValue={initialValue}
        onSaveToLocal={handelSaveToLocal}
      />
    </div>
  );
}

export default App;
