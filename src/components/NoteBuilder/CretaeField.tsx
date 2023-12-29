import { MenuItem, Select, TextField, SelectChangeEvent } from "@mui/material";
import { FieldType, IFiled, IOption } from ".";
import { FielddActionKind, Dispatch, addOption } from "../../reducers/fields";

import CreateOption from "./CreateOption";
import AddIcon from "@mui/icons-material/Add";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function CreateField({
  field,
  dispatch,
}: {
  field: IFiled;
  dispatch: Dispatch;
}) {
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | SelectChangeEvent
  ): void => {
    const updateField = { ...field, [e.target.name]: e.target.value } as IFiled;
    dispatch({
      type: FielddActionKind.EDIT_FIELD,
      payload: { updateField },
    });
  };

  const handelRemoveField = () => {
    dispatch({
      type: FielddActionKind?.DELETE_FIELD,
      payload: { uuid: field.uuid },
    });
  };

  const handelAddOptions = () => {
    const prevOptions = field?.options ?? [];
    const updateField = {
      ...field,
      options: [...prevOptions, addOption()],
    };
    dispatch({
      type: FielddActionKind.EDIT_FIELD,
      payload: { updateField },
    });
  };

  const handelChangeOptions = (updateOption: IOption) => {
    const updateOptions = handelUpdateOptions(updateOption);
    const updateField = { ...field, options: updateOptions };
    dispatch({
      type: FielddActionKind.EDIT_FIELD,
      payload: { updateField },
    });
  };
  const handelUpdateOptions = (updateOption: IOption) => {
    const options = field?.options ?? [];
    const updateOptions = options?.map((option) => {
      if (option?.uuid === updateOption?.uuid) {
        return updateOption;
      }
      return option;
    });
    return updateOptions;
  };

  const handelRemoveOption = (uuid: string) => {
    const options = field?.options ?? [];
    const updateOptions = options?.filter((option) => option?.uuid !== uuid);
    const updateField = { ...field, options: updateOptions };
    dispatch({
      type: FielddActionKind.EDIT_FIELD,
      payload: { updateField },
    });
  };

  return (
    <div>
      <div className="addField">
        <TextField
          required
          defaultValue={field?.key}
          label={"key"}
          variant="outlined"
          name="key"
          onChange={handleChange}
        />
        <TextField
          required
          defaultValue={field?.title}
          label={"title"}
          variant="outlined"
          name="title"
          onChange={handleChange}
        />
        <Select
          required
          defaultValue={field?.type}
          placeholder={field?.type}
          label="Type"
          name="type"
          onChange={handleChange}
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

      {field?.type !== FieldType.TextArea ? (
        <div className="options">
          <div>
            {field?.options
              ? field?.options?.map((option) => (
                  <CreateOption
                    key={option?.uuid}
                    option={option}
                    onChaneOption={handelChangeOptions}
                    onRemoveOption={handelRemoveOption}
                  />
                ))
              : null}
          </div>
          <div className="add" onClick={handelAddOptions}>
            <AddIcon /> Add option
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CreateField;
