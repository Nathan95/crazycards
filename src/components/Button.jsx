import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, className, id }) => {
  return (
    <React.Fragment>
      <button className={className} onClick={onClick} id={id}>
        {children}
      </button>
    </React.Fragment>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number,
  children: PropTypes.any
};

export default Button;
