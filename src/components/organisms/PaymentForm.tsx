import React, { useState } from 'react';
import CardInfoForm from './CardInfoForm';
import ContactInfoForm from './ContactInfoForm';

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    cardholderName: '',
    card: '',
    cvv: '',
    expirationDate: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    cardholderName: '',
    card: '',
    cvv: '',
    expirationDate: '',
    email: '',
    phone: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.cardholderName.trim()) {
      newErrors.cardholderName = 'Cardholder name is required';
      isValid = false;
    } else {
      newErrors.cardholderName = '';
    }

    if (!formData.card.trim()) {
      newErrors.card = 'Card number is required';
      isValid = false;
    } else if (!/^\d{16}$/.test(formData.card)) {
      newErrors.card = 'Invalid card number';
      isValid = false;
    } else {
      newErrors.card = '';
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
      isValid = false;
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'Invalid CVV';
      isValid = false;
    } else {
      newErrors.cvv = '';
    }

    if (!formData.expirationDate.trim()) {
      newErrors.expirationDate = 'Expiration date is required';
      isValid = false;
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expirationDate)) {
      newErrors.expirationDate = 'Invalid expiration date (MM/YY)';
      isValid = false;
    } else {
      newErrors.expirationDate = '';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
      isValid = false;
    } else {
      newErrors.phone = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your payment processor
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <CardInfoForm formData={formData} errors={errors} onChange={handleChange} />
      <ContactInfoForm formData={formData} errors={errors} onChange={handleChange} />
      <button type="submit" className="submit-button">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;