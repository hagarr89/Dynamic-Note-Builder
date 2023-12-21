import CreateNote from "./CreateNote";

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

export interface IOption {
  label: string;
  value: string;
}

export enum FieldType {
  TextArea = "textarea",
  DropDown = "dropdown",
  Radio = "radio",
}

export default CreateNote;
