import React from 'react';
import "./selectCountries.css"

const SelectCountries = ({name, onChange, number, state, countries, onDelete}) => {
  return (
    <div>

    <select name={name} onChange={(e) => onChange(e, number)} value={state.idCountry[number]} className='mi-select-countries'>
      {countries?.map((country) => (
        <option key={country.id} value={country.id}>
          {country.name}
        </option>
      ))}
    </select>

    {state.idCountry[number] && number > 0 && (
      <button onClick={() => onDelete(number)} type='button'>X</button>
    )}
  </div>
  );
};

export default SelectCountries;