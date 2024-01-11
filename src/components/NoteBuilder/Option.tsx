import { useFormContext, Controller } from "react-hook-form";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import TextArea from "../Inputes/TextArea";

function CreateOption({
  optionIndex,
  indexField,
  onRemove,
}: {
  optionIndex: number;
  indexField: number;
  onRemove: () => void;
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  const handelRemoveOption = () => {
    onRemove();
  };

  return (
    <div className="option">
      <>
        <Controller
          control={control}
          rules={{
            required: { value: true, message: "This field is requierd" },
          }}
          render={({ field }) => (
            <TextArea field={field} errors={errors} label="Key" />
          )}
          name={`fields.${indexField}.options.${optionIndex}.label`}
        />
        <Controller
          control={control}
          rules={{
            required: { value: true, message: "This field is requierd" },
          }}
          render={({ field }) => (
            <TextArea field={field} errors={errors} label="Value" />
          )}
          name={`fields.${indexField}.options.${optionIndex}.value`}
        />
      </>
      <div className="remove" onClick={handelRemoveOption}>
        <DeleteOutlineOutlinedIcon />
      </div>
    </div>
  );
}

export default CreateOption;
