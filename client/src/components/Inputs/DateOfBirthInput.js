import React, { useState } from 'react';

const DobInput = ({dob,setDob, onAgeChange }) => {
    

    const handleInputChange = (event) => {
        const { value } = event.target;
        setDob(value);

        const age = calculateAge(value);
        onAgeChange(age);
    };

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const m = currentDate.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <div>
            <label htmlFor="Date of Birth">Date of Birth</label>
            <input className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
                type="date"
                id="dateOfBirth"
                placeholder="Date of Birth"
                name="dob"
                required
                value={dob}
                onChange={handleInputChange} />
        </div>
    );
};

export default DobInput;
