import React from "react";
import { MenuItem, Select } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import {
  FieldValues,
  FieldErrors,
  // useForm, // don't need this import
} from "react-hook-form";

export interface IOption {
  label: string;
  value: string;
}
type SelectProps = {
  label: string;
  errors?: FieldErrors;
  field: FieldValues;
  options: IOption[];
  placeholder?: string;
};
export default function SeclectField({
  label,
  errors,
  field,
  placeholder,
  options,
}: SelectProps) {
  const { name } = field;
  return (
    <div>
      <Select placeholder={placeholder} label={label} {...field}>
        {options?.map(({ value, label }, index) => (
          <MenuItem key={index} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <div className="error">
        <ErrorMessage errors={errors} name={name} />
      </div>
    </div>
  );
}
