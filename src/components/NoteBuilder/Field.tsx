import { FieldType, IFiled, optionsFileType } from ".";
import Options from "./Options";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useFormContext, useWatch, Controller } from "react-hook-form";
import TextArea from "../Inputes/TextArea";
import SeclectField from "../Inputes/SeclectField";

function Field({
  indexField,
  onRemove,
}: {
  field: IFiled;
  indexField: number;
  onRemove: () => void;
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  const fieldChnged = useWatch({
    control,
    name: `fields.${indexField}.type`,
  });

  const handelRemoveField = () => {
    onRemove();
  };

  return (
    <div>
      <div className="Field">
        <Controller
          control={control}
          rules={{
            required: { value: true, message: "This field is requierd" },
          }}
          render={({ field }) => (
            <TextArea field={field} errors={errors} label="Key" />
          )}
          name={`fields.${indexField}.key`}
        />
        <Controller
          control={control}
          rules={{
            required: { value: true, message: "This field is requierd" },
          }}
          render={({ field }) => (
            <TextArea field={field} errors={errors} label="Title" />
          )}
          name={`fields.${indexField}.title`}
        />
        <Controller
          name={`fields.${indexField}.type`}
          control={control}
          rules={{ required: "This field is requierd" }}
          render={({ field }) => (
            <SeclectField
              field={field}
              errors={errors}
              label="Select"
              options={optionsFileType}
            />
          )}
          defaultValue="" // make sure to set up defaultValue
        />

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
