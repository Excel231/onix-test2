import React, { ChangeEvent, ReactNode } from 'react';
import '../sass/ChangeableParameterItem.scss';

interface Props {
  parameter: string | number;
  parameterName: string;
  currentEditedValue: string | number | null;
  currentEditedField: ReactNode | null;
  onEditClick: (field: string, value: string | number) => void;
  onFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFieldBlur: () => void;
  onKeyPressed: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ChangeableParameterItem: React.FC<Props> = ({
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
            value={currentEditedValue!}
            onChange={onFieldChange}
            onBlur={onFieldBlur}
            onKeyDown={onKeyPressed}
          />
        ) : <p>{parameter}</p>
      }
    </li>
  );
};

export default ChangeableParameterItem;
