import React from 'react';
import './BigRedSubmitButton.scss';

interface Props {
    children: number | string,
    onClick: () => void
}

const BigRedButton: React.FC<Props> = ({ children, onClick }) => {
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

export default BigRedButton;
