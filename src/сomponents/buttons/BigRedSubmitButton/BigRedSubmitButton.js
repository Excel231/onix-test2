import React from 'react';
import PropType from 'prop-types';
import './BigRedSubmitButton.scss';

const BigRedButton = ({
  children,
  onClick
}) => {
  return (
    <div className="input-container">
      <input
        type="submit"
        value={children}
        className="big-red-input-btn"
        onClick={onClick}
      />
    </div>
  );
};

BigRedButton.propTypes = {
  children: PropType.node.isRequired,
  onClick: PropType.func.isRequired
};

export default BigRedButton;
