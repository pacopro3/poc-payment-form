import React from 'react';
import FormField from '../molecules/FormField';

interface ContactInfoFormProps {
  formData: {
    email: string;
    phone: string;
  };
  errors: {
    email: string;
    phone: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactInfoForm: React.FC<ContactInfoFormProps> = ({ formData, errors, onChange }) => {
  return (
    <div className="form-group contact-info">
      <h2>Contact Information</h2>
      <FormField
        label="Email"
        type="email"
        name="email"
        placeholder="johndoe@example.com"
        value={formData.email}
        onChange={onChange}
        error={errors.email}
      />
      <FormField
        label="Phone"
        type="tel"
        name="phone"
        placeholder="1234567890"
        value={formData.phone}
        onChange={onChange}
        error={errors.phone}
      />
    </div>
  );
};

export default ContactInfoForm;