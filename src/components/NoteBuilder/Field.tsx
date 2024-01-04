import { MenuItem, Select, TextField } from "@mui/material";
import { FieldType, IFiled, IOption } from ".";
import Options from "./Options";
import CreateOption from "./Option";
import AddIcon from "@mui/icons-material/Add";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useFormContext, useWatch } from "react-hook-form";

function Field({
  field,
  indexField,
  onRemove,
}: {
  field: IFiled;
  indexField: number;
  onRemove: () => void;
}) {
  const { register, control } = useFormContext(); // retrieve all hook methods

  const fieldChnged = useWatch({
    control,
    name: `fields.${indexField}.type`,
  });
  console.log("fieldChnged", fieldChnged, field?.key);

  const handelRemoveField = () => {
    onRemove();
  };

  return (
    <div>
      <div className="Field">
        <TextField
          variant="outlined"
          defaultValue={field?.key}
          label={"key"}
          {...register(`fields.${indexField}.key`, {
            required: { value: true, message: "This field is requierd" },
          })}
        />
        <TextField
          defaultValue={field?.title}
          label={"title"}
          variant="outlined"
          {...register(`fields.${indexField}.title`, {
            required: { value: true, message: "This field is requierd" },
          })}
        />
        <Select
          defaultValue={field?.type}
          placeholder={field?.type}
          label="Type"
          {...register(`fields.${indexField}.type`, {
            required: { value: true, message: "This field is requierd" },
          })}
        >
          <MenuItem value={FieldType["TextArea"]}>
            {FieldType["TextArea"]}
          </MenuItem>
          <MenuItem value={FieldType["Radio"]}>{FieldType["Radio"]}</MenuItem>
          <MenuItem value={FieldType["DropDown"]}>
            {FieldType["DropDown"]}
          </MenuItem>
        </Select>

        <button className="remove" onClick={handelRemoveField}>
          <DeleteOutlineOutlinedIcon />
        </button>
      </div>

      {fieldChnged !== FieldType.TextArea ? (
        <Options indexField={indexField} />
      ) : null}
    </div>
  );
}

export default Field;
