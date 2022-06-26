import React from 'react';
import PropType from 'prop-types';
import '../sass/ChangeableParameterItem.scss';

const ChangeableParameterItem = ({
  parameter,
  parameterName,
  currentEditedValue,
  currentEditedField,
  onFieldBlur,
  onKeyPressed,
  onEditClick,
  onFieldChange,
}) => {
  return (
    <li
      aria-hidden="true"
      className="biography-li"
      onClick={() => onEditClick(parameterName, parameter)}
    >
      {
        currentEditedField === parameterName ? (
          <input
            className="biography-text-input"
            autoFocus
            value={currentEditedValue}
            onChange={onFieldChange}
            onBlur={onFieldBlur}
            onKeyDown={onKeyPressed}
          />
        ) : <p>{parameter}</p>
      }
    </li>
  );
};

ChangeableParameterItem.propTypes = {
  parameter: PropType.node.isRequired,
  parameterName: PropType.node.isRequired,
  currentEditedValue: PropType.node,
  currentEditedField: PropType.node,
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
