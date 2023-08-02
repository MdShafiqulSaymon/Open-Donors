// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// export default function PasswordInput({ label, value, setValue, placeholder, otherValue }) {
//   const [isMatch, setIsMatch] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     setValue(value);
//     setIsMatch(value === otherValue);
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="relative">
//       <label htmlFor="Password">{label}</label>
//       <input
//         className="w-full border border-gray-300 rounded px-4 py-2 mb-4 pr-10"
//         type={showPassword ? "text" : "password"}
//         placeholder={placeholder}
//         name={label}
//         required
//         value={value}
//         onChange={handleInputChange}
//       />
//       <button 
//         type="button" 
//         onClick={toggleShowPassword} 
//         className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
//       >
//         <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//       </button>
//       {label === 'Confirm Password' && !isMatch && <p className="text-red-500 text-xs italic">Passwords do not match.</p>}
//     </div>
//   )
// }
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function PasswordInput({ label, value, setValue, placeholder, otherValue }) {
  const [isMatch, setIsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setValue(value);
    setIsMatch(value === otherValue);
    evaluatePasswordStrength(value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const evaluatePasswordStrength = (password) => {
    if (password.length < 9) {
      setPasswordStrength('Password must contain 9 characters');
      return;
    } else if (/^\d+$/.test(password)) {
      setPasswordStrength('Very weak');
    } else if (/^[a-z]+$/.test(password)) {
      setPasswordStrength('Weak');
    } else if (/^[A-Z]+$/.test(password) || /^[a-z0-9]+$/.test(password)) {
      setPasswordStrength('Medium');
    } else if (/^[a-zA-Z0-9!@#$%^&*]+$/.test(password)) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('');
    }
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 'Password must contain 9 characters':
        return 'text-red-600';
      case 'Very weak':
        return 'text-red-500';
      case 'Weak':
        return 'text-red-400';
      case 'Medium':
        return 'text-yellow-500';
      case 'Strong':
        return 'text-green-500';
      default:
        return '';
    }
  };

  return (
    <div className="relative">
      <label htmlFor="Password">{label}</label>
      <input
        className="w-full border border-gray-300 rounded px-4 py-2 mb-4 pr-10"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        name={label}
        required
        value={value}
        onChange={handleInputChange}
      />
      <button 
        type="button" 
        onClick={toggleShowPassword} 
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </button>
      {label === 'Password' || label === 'Enter new password' && passwordStrength && <p className={`text-xs italic ${getPasswordStrengthColor()}`}>{passwordStrength}</p>}
      {label === 'Confirm Password'|| label === 'Confirm new password' && !isMatch && <p className="text-red-500 text-xs italic">Passwords do not match.</p>}
    </div>
  )
}

