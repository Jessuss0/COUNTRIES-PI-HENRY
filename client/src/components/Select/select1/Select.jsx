import React from 'react';
import "./Select.css"

const Select = ({ name, options, handleChange, state }) => {
  return (
      <select name={name} onChange={handleChange} value={state || ""} className='mi-select'>
        <option value="" disabled hidden>{name}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
  );
};

export default Select;