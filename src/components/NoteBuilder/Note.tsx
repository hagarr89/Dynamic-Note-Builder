import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { INote } from ".";
import Fileds from "./Fields";
import { useForm, FormProvider } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function Note({
  initialValue,
  onSaveToLocal,
}: {
  initialValue: INote;
  onSaveToLocal?: (note: INote) => void;
}) {
  const methods = useForm({
    defaultValues: initialValue,
    shouldUnregister: true,
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = methods;

  const [note, setNote] = useState<INote>(initialValue);
  const onSubmit = handleSubmit((data, e) => {
    e?.preventDefault();
    onSaveToLocal && onSaveToLocal(data);
  });

  useEffect(() => {
    setNote(initialValue);
  }, [initialValue]);

  useEffect(() => {
    reset(note);
  }, [note, reset]);

  return (
    <div className={"Note"}>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <h1>Create Note Fields</h1>
          <TextField
            variant="outlined"
            defaultValue={note?.name}
            label="name"
            {...register("name", {
              required: { value: true, message: "This field is requierd" },
              minLength: { value: 3, message: "Please enter 3 chars minmum" },
            })}
          />
          <div className="error">
            <ErrorMessage errors={errors} name="name" />
          </div>
          <Fileds />

          <Button type="submit" variant="text">
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default Note;
