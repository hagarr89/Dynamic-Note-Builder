import { TextField } from "@mui/material";
import { IOption } from ".";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function CreateOption({
  option,
  optionIndex,
  onChaneOption,
  onRemoveOption,
}: {
  option: IOption;
  optionIndex: number;
  onChaneOption(newOption: IOption, optionIndex: number): void;
  onRemoveOption(optionIndex: number): void;
}) {
  const handleChange = (e: any) => {
    const newOption = { ...option, [e.target.name]: e.target.value };
    onChaneOption(newOption, optionIndex);
  };
  const handelRemoveOption = () => {
    onRemoveOption(optionIndex);
  };

  return (
    <div className="option">
      <>
        <TextField
          defaultValue={option.label !== "" ? option.label : null}
          placeholder={option.label}
          variant="outlined"
          name="label"
          label={"label"}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          defaultValue={option.value !== "" ? option.value : null}
          placeholder={option.value}
          variant="outlined"
          name="value"
          label={"value"}
          onChange={(e) => handleChange(e)}
        />
      </>
      <div className="remove" onClick={handelRemoveOption}>
        <DeleteOutlineOutlinedIcon />
      </div>
    </div>
  );
}

export default CreateOption;
