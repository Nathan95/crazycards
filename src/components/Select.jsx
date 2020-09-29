import React from "react";
import PropTypes from "prop-types";

function Select({
  label,
  value,
  handleChange,
  name,
  options,
  selectTestId,
  optionTestId
}) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select
        data-testid={selectTestId}
        name={name}
        onChange={handleChange}
        value={value}
      >
        <option value="" defaultValue disabled hidden>
          Choose here
        </option>
        {options.map(({ label: optionLabel, value: optionValue }) => (
          <option
            data-testid={optionTestId}
            key={optionValue}
            value={optionValue}
          >
            {optionLabel}
          </option>
        ))}
      </select>
    </>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  selectTestId: PropTypes.string,
  optionTestId: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
};

Select.defaultProps = {
  selectTestId: "",
  optionTestId: ""
};
export default Select;
