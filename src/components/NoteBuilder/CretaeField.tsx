import { MenuItem, Select, TextField } from "@mui/material";
import { FieldType, IFiled, IOption } from ".";
import { useState } from "react";
import CreateOption from "./CreateOption";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function CreateField({
  field,
  fieldIndex,
  onChaneField,
  onRemoveField,
}: {
  field: IFiled;
  fieldIndex: number;
  onChaneField: (newField: IFiled, index: number) => void;
  onRemoveField: (fieldIndex: number) => void;
}) {
  const [options, setOptions] = useState<IOption[] | []>(field?.options ?? []);

  const handleChange = (e: any) => {
    const newField = { ...field, [e.target.name]: e.target.value };
    onChaneField(newField, fieldIndex);
  };

  const addOption = () => {
    const newOption = {
      label: "",
      value: "",
    };
    setOptions([...options, newOption]);
  };

  const handelChangeOptions = (newOption: IOption, optionIndex: number) => {
    options[optionIndex] = newOption;
    setOptions(options);

    const newField = { ...field, options };
    onChaneField(newField, fieldIndex);
  };

  const handelRemoveField = () => {
    onRemoveField(fieldIndex);
  };
  const handelRemoveOption = (optionIndex: number) => {
    const updateField = { ...field };
    updateField?.options?.splice(optionIndex, 1);
    if (updateField?.options) setOptions(updateField?.options);
    onChaneField(updateField, fieldIndex);
  };

  return (
    <div>
      <div className="addField">
        <TextField
          required
          defaultValue={field.key !== "" ? field.key : null}
          placeholder={field.key}
          label={"key"}
          variant="outlined"
          name={"key"}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          required
          defaultValue={field.title !== "" ? field.title : null}
          placeholder={field.title}
          label={"title"}
          variant="outlined"
          name={"title"}
          onChange={(e) => handleChange(e)}
        />
        <Select
          required
          defaultValue={field.type}
          placeholder={field.type}
          value={field.type}
          label="Type"
          name={"type"}
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value={FieldType["TextArea"]}>
            {FieldType["TextArea"]}
          </MenuItem>
          <MenuItem value={FieldType["Radio"]}>{FieldType["Radio"]}</MenuItem>
          <MenuItem value={FieldType["DropDown"]}>
            {FieldType["DropDown"]}
          </MenuItem>
        </Select>
        <div className="remove" onClick={handelRemoveField}>
          <DeleteOutlineOutlinedIcon />
        </div>
      </div>

      {field.type !== FieldType.TextArea ? (
        <div className="options">
          <div>
            {options?.map((option, optionIndex) => (
              <CreateOption
                key={optionIndex}
                option={option}
                optionIndex={optionIndex}
                onChaneOption={handelChangeOptions}
                onRemoveOption={handelRemoveOption}
              />
            ))}
          </div>
          <div className="add" onClick={addOption}>
            <AddIcon /> Add option
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CreateField;
