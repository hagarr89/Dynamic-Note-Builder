import { useEffect } from "react";
import { IFiled, FieldType } from ".";
import Field from "./Field";
import AddIcon from "@mui/icons-material/Add";
import { useFieldArray, useFormContext } from "react-hook-form";

export type FormValues = {
  fields: IFiled[];
};
function Fields() {
  const { control } = useFormContext<FormValues>();

  const { fields, remove, append } = useFieldArray({
    name: "fields",
    control,
  });

  return (
    <div className={"Fields"}>
      {fields?.length
        ? fields?.map((field, index) => (
            <Field
              key={field.id}
              field={field}
              indexField={index}
              onRemove={() => remove(index)}
            />
          ))
        : null}
      <div
        onClick={() =>
          append({ key: null, title: null, type: FieldType.TextArea })
        }
        className="add"
      >
        <AddIcon /> Add Field
      </div>
    </div>
  );
}

export default Fields;
