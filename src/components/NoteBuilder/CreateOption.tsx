import { TextField } from "@mui/material";
import { IOption } from ".";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function CreateOption({
  option,
  onChaneOption,
  onRemoveOption,
}: {
  option: IOption;
  onChaneOption(updateOption: IOption): void;
  onRemoveOption(uuid: string): void;
}) {
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const updateOption = { ...option, [e.target.name]: e.target.value };
    onChaneOption(updateOption);
  };
  const handelRemoveOption = () => {
    onRemoveOption(option.uuid);
  };

  return (
    <div className="option">
      <>
        <TextField
          defaultValue={option?.label}
          variant="outlined"
          name="label"
          label={"label"}
          onChange={handleChange}
        />
        <TextField
          defaultValue={option?.value}
          variant="outlined"
          name="value"
          label={"value"}
          onChange={handleChange}
        />
      </>
      <div className="remove" onClick={handelRemoveOption}>
        <DeleteOutlineOutlinedIcon />
      </div>
    </div>
  );
}

export default CreateOption;
