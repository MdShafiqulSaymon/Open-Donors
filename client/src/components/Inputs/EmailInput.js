import React, { useState } from "react";
import validator from "validator";

const EmailInput = ({ label, placeholder, name, value,  setValue }) => {
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setValue(value);
        setIsValid(validator.isEmail(value));
      };

    return (
        <div>
            <label htmlFor="Email">{label}</label>
            <input
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
                type="email"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleInputChange}
            />
             {!isValid && <p className="text-red-500 text-xs italic">This is not a valid email.</p>}
        </div>
    );
};

export default EmailInput;
