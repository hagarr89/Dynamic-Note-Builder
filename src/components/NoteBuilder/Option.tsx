import { TextField } from "@mui/material";
import { IOption } from ".";
import { useFormContext } from "react-hook-form";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function CreateOption({
  option,
  optionIndex,
  indexField,
  onRemove,
}: {
  option: IOption;
  optionIndex: number;
  indexField: number;
  onRemove: () => void;
}) {
  const { register } = useFormContext(); // retrieve all hook methods

  const handelRemoveOption = () => {
    onRemove();
  };

  return (
    <div className="option">
      <>
        <TextField
          defaultValue={option?.label}
          variant="outlined"
          {...register(`fields.${indexField}.options.${optionIndex}.label`, {
            required: { value: true, message: "This field is requierd" },
          })}
        />
        <TextField
          defaultValue={option?.value}
          variant="outlined"
          label={"value"}
          {...register(`fields.${indexField}.options.${optionIndex}.value`, {
            required: { value: true, message: "This field is requierd" },
          })}
        />
      </>
      <div className="remove" onClick={handelRemoveOption}>
        <DeleteOutlineOutlinedIcon />
      </div>
    </div>
  );
}

export default CreateOption;
