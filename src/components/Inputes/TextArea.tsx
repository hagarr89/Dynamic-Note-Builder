import React from "react";
import { TextField } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import {
  FieldValues,
  FieldErrors,
  // useForm, // don't need this import
} from "react-hook-form";

type InputProps = {
  label: string;
  errors?: FieldErrors;
  placeholder?: string;
  field: FieldValues;
};
export default function TextArea({
  label,
  errors,
  field,
  placeholder,
}: InputProps) {
  const { name } = field;
  return (
    <div>
      <TextField
        label={label}
        placeholder={placeholder}
        variant="outlined"
        {...field}
      />
      <div className="error">
        <ErrorMessage errors={errors} name={name} />
      </div>
    </div>
  );
}
