import { IFiled } from ".";
import CreateField from "./CretaeField";
import AddIcon from "@mui/icons-material/Add";
import { FielddActionKind, Dispatch } from "../../reducers/fields";

function CreateFields({
  fields,
  dispatch,
}: {
  fields: IFiled[] | [];
  dispatch: Dispatch;
}) {
  const addEmptyField = () => {
    dispatch({ type: FielddActionKind.ADD_FIELD });
  };

  return (
    <div className={"createField"}>
      {fields?.length
        ? fields?.map((field) => (
            <CreateField key={field?.uuid} field={field} dispatch={dispatch} />
          ))
        : null}
      <div onClick={addEmptyField} className="add">
        <AddIcon /> Add Field
      </div>
    </div>
  );
}

export default CreateFields;
