import React from 'react';
import Input from '../atoms/Input';

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, ...inputProps }) => {
  return (
    <div className="form-field">
      <label htmlFor={inputProps.name}>{label}</label>
      <Input {...inputProps} />
    </div>
  );
};

export default FormField;