import Note from "./Note";
import "./index.scss";
import { IOption } from "../Inputes/SeclectField";
export interface INote {
  name: string;
  fields: IFiled[];
}

export interface IFiled {
  key: string;
  title: string;
  type: FieldType;
  options?: IOption[];
}

export enum FieldType {
  TextArea = "textarea",
  DropDown = "dropdown",
  Radio = "radio",
}
const FileType = Object.entries(FieldType);
export const optionsFileType = FileType?.map(([key, value]) => {
  return {
    label: key,
    value: value,
  };
});
console.log("optionsFileType", optionsFileType);

export default Note;
