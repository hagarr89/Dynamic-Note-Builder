import { useState } from "react";
import { IFiled, IOption } from "../components/NoteBuilder";

const useFields = () => {
  const [fields, setFields] = useState<IFiled[] | []>([]);

  const addField = (newField: IFiled) => {
    setFields([...fields, newField]);
  };
  const removeField = (index: number) => {
    const updateFields = [...fields];
    updateFields.splice(index, 1);
    setFields(updateFields);
  };

  const editField = (updateField: IFiled, index: number) => {
    const updatedFields = [...fields];
    updatedFields[index] = updateField;

    setFields(updatedFields);
  };

  const addOptionToField = (newOption: IOption, fieldIndex: number) => {
    const updatedFields = [...fields];
    let currentField = updatedFields[fieldIndex];
    if (currentField.options && currentField.options?.length > 0) {
      currentField = {
        ...currentField,
        options: [...currentField?.options, newOption],
      };
    } else {
      currentField = {
        ...currentField,
        options: [newOption],
      };
    }
    editField(currentField, fieldIndex);
  };

  const removeOptionFromField = (fieldIndex: number, optionIndex: number) => {
    const updatedFields = [...fields];
    updatedFields[fieldIndex]?.options?.splice(optionIndex, 1);

    setFields(updatedFields);
  };
  // const editOptionInField = (
  //   updateOption: IOption,
  //   fieldIndex: number,
  //   optionIndex: number
  // ) => {
  //   const updatedFields = [...fields];
  //   if (updatedFields[fieldIndex]?.options) {
  //     updatedFields[fieldIndex].options[optionIndex] = updateOption;
  //   }
  //   setFields(updatedFields);
  // };
  return {
    fields,
    setFields,
    addField,
    removeField,
    editField,
    addOptionToField,
    removeOptionFromField,
  };
};

export default useFields;
