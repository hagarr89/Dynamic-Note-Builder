import Option from "./Option";
import AddIcon from "@mui/icons-material/Add";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FormValues } from "./Fields";

function Options({ indexField }: { indexField: number }) {
  const { control } = useFormContext<FormValues>();

  const { fields, remove, append } = useFieldArray({
    name: `fields.${indexField}.options`,
    shouldUnregister: true,
    control,
  });

  return (
    <div className={"options"}>
      {fields?.length
        ? fields?.map((option, index) => (
            <Option
              key={option.id}
              optionIndex={index}
              indexField={indexField}
              onRemove={() => remove(index)}
            />
          ))
        : null}
      <div onClick={() => append({ label: "", value: "" })} className="add">
        <AddIcon /> Add Option
      </div>
    </div>
  );
}

export default Options;
