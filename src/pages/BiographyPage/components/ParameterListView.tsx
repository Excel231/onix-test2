import React, { ChangeEvent } from 'react';
import bubbleSort from '../../../helper/bubbleSort';
import ChangeableParameterItem from './ChangeableParameterItem';
import '../sass/ParameterList.scss';
import BiographyImage from './BiographyImage';
import { Belt } from '../../../types/Interfaces';

interface Props {
    fullName: string;
    birthYear: string | number;
    photo: string;
    weight: string | number;
    belts: Belt[];
    currentEditedField: string | null;
    currentEditedValue: string | number | null;
    onEditClick: (field: string, value: string | number) => void;
    onFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFieldBlur: () => void;
    onKeyPressed: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    listStyle: string;
}

const ParameterListView: React.FC<Props> = ({
  fullName,
  birthYear,
  photo,
  weight,
  belts,
  currentEditedField,
  currentEditedValue,
  onEditClick,
  onFieldChange,
  onFieldBlur,
  onKeyPressed,
  listStyle,
}) => {
  return (
    <ul className={listStyle}>

      <li className="biography-li">
        <BiographyImage fullName={fullName} photo={photo} />
      </li>

      <ChangeableParameterItem
        parameter={fullName}
        parameterName="fullName"
        currentEditedValue={currentEditedValue}
        currentEditedField={currentEditedField}
        onFieldBlur={onFieldBlur}
        onKeyPressed={onKeyPressed}
        onEditClick={onEditClick}
        onFieldChange={onFieldChange}
      />

      <ChangeableParameterItem
        parameter={birthYear}
        parameterName="birthYear"
        currentEditedValue={currentEditedValue}
        currentEditedField={currentEditedField}
        onFieldBlur={onFieldBlur}
        onKeyPressed={onKeyPressed}
        onEditClick={onEditClick}
        onFieldChange={onFieldChange}
      />

      <ChangeableParameterItem
        parameter={weight}
        parameterName="weight"
        currentEditedValue={currentEditedValue}
        currentEditedField={currentEditedField}
        onFieldBlur={onFieldBlur}
        onKeyPressed={onKeyPressed}
        onEditClick={onEditClick}
        onFieldChange={onFieldChange}
      />

      <li className="biography-li">
        <ul>
          {
            bubbleSort(belts)
              .map(({ beltName, year }) => (
                <li className="belt" key={beltName + year}>
                  {`${year} - ${beltName}`}
                </li>
              ))
          }
        </ul>
      </li>
    </ul>
  );
};

export default ParameterListView;
