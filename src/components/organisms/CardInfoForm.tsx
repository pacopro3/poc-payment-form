import React from 'react';
import FormField from '../molecules/FormField';

interface CardInfoFormProps {
  formData: {
    cardholderName: string;
    card: string;
    cvv: string;
    expirationDate: string;
  };
  errors: {
    cardholderName: string;
    card: string;
    cvv: string;
    expirationDate: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardInfoForm: React.FC<CardInfoFormProps> = ({ formData, errors, onChange }) => {
  return (
    <div className="form-group card-info">
      <h2>Card Information</h2>
      <FormField
        label="Cardholder Name"
        type="text"
        name="cardholderName"
        placeholder="John Doe"
        value={formData.cardholderName}
        onChange={onChange}
        error={errors.cardholderName}
      />
      <FormField
        label="Card Number"
        type="text"
        name="card"
        placeholder="1234 5678 9012 3456"
        value={formData.card}
        onChange={onChange}
        error={errors.card}
      />
      <div className="row">
        <FormField
          label="CVV"
          type="text"
          name="cvv"
          placeholder="123"
          value={formData.cvv}
          onChange={onChange}
          error={errors.cvv}
        />
        <FormField
          label="Expiration Date"
          type="text"
          name="expirationDate"
          placeholder="MM/YY"
          value={formData.expirationDate}
          onChange={onChange}
          error={errors.expirationDate}
        />
      </div>
    </div>
  );
};

export default CardInfoForm;