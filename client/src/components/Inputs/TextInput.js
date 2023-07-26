import React from "react"
const TextInput = ({ label, value, setValue, placeholder }) => (
    <div>
      <label>{label}</label>
      <input className="w-full border border-gray-300 rounded px-4 py-2 mb-4" 
      type="text"
      placeholder={placeholder} 
      value={value} 
      onChange={e => setValue(e.target.value)} 
      required/>
    </div>
  );
  export default TextInput;