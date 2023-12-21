import { IFiled, FieldType } from ".";
import CreateField from "./CretaeField";
import AddIcon from "@mui/icons-material/Add";

function CreateFields({
  fields,
  onChangeFields,
}: {
  fields: IFiled[] | [];
  onChangeFields: (fields: IFiled[]) => void;
}) {
  const addEmptyField = () => {
    const emptyField = createEmptyField() as IFiled;
    onChangeFields([...fields, emptyField]);
  };
  const createEmptyField = () => {
    return {
      key: "",
      title: "",
      type: FieldType.TextArea,
    };
  };

  const handelChaneField = (newield: IFiled, index: number) => {
    const updateFields = [...fields];
    updateFields[index] = newield;
    onChangeFields(updateFields);
  };

  const handelRemoveField = (fieldIndex: number) => {
    const updateFields = [...fields];
    updateFields.splice(fieldIndex, 1);
    onChangeFields(updateFields);
  };

  return (
    <div className={"createField"}>
      {fields?.map((field, fieldIndex) => (
        <CreateField
          key={fieldIndex}
          fieldIndex={fieldIndex}
          field={field}
          onChaneField={handelChaneField}
          onRemoveField={handelRemoveField}
        />
      ))}
      <div onClick={addEmptyField} className="add">
        <AddIcon /> Add Field
      </div>
    </div>
  );
}

export default CreateFields;
