import React from 'react';
import * as PropType from 'prop-types';
import bubbleSort from '../../../helper/bubbleSort';
import ChangeableParameterItem from '../../../pages/BiographyPage/components/ChangeableParameterItem';
import './ParameterList.scss';
import BiographyImage from '../../BiographyImage/BiographyImage';

const ParameterListView = ({
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

ParameterListView.propTypes = {
  fullName: PropType.node.isRequired,
  birthYear: PropType.node.isRequired,
  photo: PropType.node.isRequired,
  weight: PropType.node.isRequired,
  belts: PropType.arrayOf(PropType.shape({})).isRequired,
  currentEditedField: PropType.node,
  currentEditedValue: PropType.node,
  onEditClick: PropType.func.isRequired,
  onFieldChange: PropType.func.isRequired,
  onFieldBlur: PropType.func.isRequired,
  onKeyPressed: PropType.func.isRequired,
  listStyle: PropType.node.isRequired,
};

ParameterListView.defaultProps = {
  currentEditedField: null,
  currentEditedValue: null,
};

export default ParameterListView;
