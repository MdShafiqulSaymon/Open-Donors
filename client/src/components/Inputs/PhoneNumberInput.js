
import React, { useState } from 'react';

const PhoneNumberInput = ({phone, setPhone}) => {
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  const validatePhoneNumber = (number) => {
    const regex = /^\+8801[3-9]\d{8}$/;
    return regex.test(number);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setPhone(value);
    setIsValid(validatePhoneNumber(value));
  };
  const handleBlur = () => {
    setIsTouched(true);
  };
  return (
    <div>
      <label>Phone Number</label>
      <input className="w-full border border-gray-300 rounded px-4 py-2 mb-4"  type="text" value={phone} onChange={handleInputChange} onBlur={handleBlur} placeholder="Start with +880" />
      {!isValid && isTouched && <p className="text-red-500 text-xs italic">Please enter a valid phone number with country code.</p>}
    </div>
  );
};

export default PhoneNumberInput;
