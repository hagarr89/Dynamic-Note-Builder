import { Button } from "@mui/material";
import React from "react";
import { INote } from ".";
import Fileds from "./Fields";
import { useForm, FormProvider, Controller } from "react-hook-form";
import TextArea from "../Inputes/TextArea";

function Note({
  initialValue,
  onSaveToLocal,
}: {
  initialValue: INote;
  onSaveToLocal?: (note: INote) => void;
}) {
  const methods = useForm<INote>({
    defaultValues: initialValue,
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods;

  const onSubmit = handleSubmit((data, e) => {
    e?.preventDefault();
    onSaveToLocal && onSaveToLocal(data);
  });

  return (
    <div className={"Note"}>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <h1>Create Note Fields</h1>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: "This field is requierd" },
              minLength: { value: 3, message: "Please enter 3 chars minmum" },
            }}
            render={({ field }) => (
              <TextArea field={field} errors={errors} label={"Name"} />
            )}
            name="name"
          />

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
