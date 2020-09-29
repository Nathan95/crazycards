import React from "react";
import PropTypes from "prop-types";

const Inputfield = ({
  label,
  name,
  handleChange,
  value,
  placeholder,
  className,
  type
}) => {
  return (
    <React.Fragment>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        id={label}
        aria-label={label}
        aria-required="true"
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </React.Fragment>
  );
};

Inputfield.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string
};

Inputfield.defaultProps = {
  className: ""
};

export default Inputfield;
