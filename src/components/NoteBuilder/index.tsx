import CreateNote from "./CreateNote";

export interface INote {
  name: string;
  fields: IFiled[];
}

export interface IFiled {
  uuid: string;
  key: string | null;
  title: string | null;
  type: FieldType;
  options?: IOption[];
}

export interface IOption {
  label: string | null;
  value: string | null;
  uuid: string;
}

export enum FieldType {
  TextArea = "textarea",
  DropDown = "dropdown",
  Radio = "radio",
}

export default CreateNote;
