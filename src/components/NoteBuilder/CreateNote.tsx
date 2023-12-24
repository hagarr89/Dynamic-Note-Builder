import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { IFiled, INote } from ".";
import CreateFields from "./CretaeFields";
import SchemaClient from "./SchemaClient";
function CreateNote({
  initialValue,
  onSaveToLocal,
}: {
  initialValue: INote;
  onSaveToLocal?: (note: INote) => void;
}) {
  const [note, setNote] = useState<INote>(initialValue);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSaveToLocal && onSaveToLocal(note);
  };
  const handleChange = (e: any) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handelChangeFields = (fields: IFiled[]) => {
    setNote({ ...note, fields: fields });
  };

  useEffect(() => {
    setNote(initialValue);
  }, [initialValue]);

  return (
    <div className={"createNote"}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          value={note?.name !== "" ? note.name : ""}
          label={"name"}
          variant="outlined"
          name={"name"}
          onChange={(e) => handleChange(e)}
        />

        <SchemaClient fields={note?.fields} />

        <CreateFields
          fields={note?.fields ?? []}
          onChangeFields={handelChangeFields}
        />
        <Button type="submit" variant="text">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CreateNote;
