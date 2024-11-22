import React from 'react';

export default function InputRadioGroup({ label, name, options, value, onChange }) {
  return (
    <div className="form__input-container">
      <label className="form__label dark">{label}</label>
      <div className="form__radio-group">
        {options.map((option) => (
          <label key={option.value} className="form__radio-label dark">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="form__radio-input"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}
