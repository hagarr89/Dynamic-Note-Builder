import { Button, TextField } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import { INote } from ".";
import CreateFields from "./CretaeFields";
import SchemaClient from "./SchemaClient";
import { fieldsReducer, FielddActionKind } from "../../reducers/fields";

function CreateNote({
  initialValue,
  onSaveToLocal,
}: {
  initialValue: INote;
  onSaveToLocal?: (note: INote) => void;
}) {
  const [note, setNote] = useState<INote>(initialValue);
  const [fields, dispatch] = useReducer(fieldsReducer, {
    fields: note?.fields,
  });
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSaveToLocal && onSaveToLocal({ ...note, fields: fields?.fields });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setNote(initialValue);
  }, [initialValue]);

  useEffect(() => {
    dispatch({
      type: FielddActionKind.INIT_FIELDS,
      payload: { fields: note?.fields },
    });
  }, [note]);

  return (
    <div className={"createNote"}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          defaultValue={note?.name}
          label={"name"}
          variant="outlined"
          name={"name"}
          onChange={handleChange}
        />

        <SchemaClient key={note?.fields?.length} fields={note?.fields} />

        <CreateFields fields={fields?.fields ?? []} dispatch={dispatch} />

        <Button type="submit" variant="text">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CreateNote;
