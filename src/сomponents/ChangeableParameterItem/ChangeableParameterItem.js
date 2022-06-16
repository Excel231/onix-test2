import React from 'react';
import PropType from 'prop-types';
import './styles.css';

function ChangeableParameterItem({
  parameter,
  parameterName,
  currentEditedValue,
  currentEditedField,
  onFieldBlur,
  onKeyPressed,
  onEditClick,
  onFieldChange,
}) {
  return (
    <li
      className="biography-li"
      onClick={() => onEditClick(parameterName, parameter)}
    >
      {
        currentEditedField === parameterName ? (
          <input
            className="biography-text-input"
            type="number"
            autoFocus
            value={currentEditedValue}
            onChange={onFieldChange}
            onBlur={onFieldBlur}
            onKeyPress={onKeyPressed}
          />
        ) : <p>{parameter}</p>
            }
    </li>
  );
}

ChangeableParameterItem.propTypes = {
  parameter: PropType.number.isRequired,
  parameterName: PropType.string.isRequired,
  currentEditedValue: PropType.number,
  currentEditedField: PropType.string,
  onEditClick: PropType.func.isRequired,
  onFieldChange: PropType.func.isRequired,
  onFieldBlur: PropType.func.isRequired,
  onKeyPressed: PropType.func.isRequired
};

ChangeableParameterItem.defaultProps = {
  currentEditedField: null,
  currentEditedValue: null
};

export default ChangeableParameterItem;
