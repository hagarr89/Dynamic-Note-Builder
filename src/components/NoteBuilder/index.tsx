import Note from "./Note";
import "./index.scss";
export interface INote {
  name: string | null;
  fields: IFiled[];
}

export interface IFiled {
  key: string | null;
  title: string | null;
  type: FieldType;
  options?: IOption[];
}

export interface IOption {
  label: string | null;
  value: string | null;
}

export enum FieldType {
  TextArea = "textarea",
  DropDown = "dropdown",
  Radio = "radio",
}

export default Note;
