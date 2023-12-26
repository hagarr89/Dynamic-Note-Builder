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
  const [fields, setFields] = useState<IFiled[] | []>(note?.fields ?? []);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSaveToLocal && onSaveToLocal({ ...note, ["fields"]: fields });
  };
  const handleChange = (e: { target: HTMLInputElement }) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handelChangeFields = (fields: IFiled[]) => {
    setFields(fields);
  };

  useEffect(() => {
    setNote(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setFields(note?.fields);
  }, [note]);

  return (
    <div className={"createNote"}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          value={note?.name !== "" ? note.name : ""}
          label={"name"}
          variant="outlined"
          name={"name"}
          onChange={(e) => handleChange}
        />

        <SchemaClient key={note?.fields?.length} fields={note?.fields} />
        {fields?.length > 0 && (
          <CreateFields fields={fields} onChangeFields={handelChangeFields} />
        )}
        <Button type="submit" variant="text">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CreateNote;
