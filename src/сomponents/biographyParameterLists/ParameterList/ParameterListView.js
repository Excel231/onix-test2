import React from 'react';
import * as PropType from 'prop-types';
import bubbleSort from '../../../helper/sorters/bubbleSort';
import ChangeableParameterItem from '../../ChangeableParameterItem/ChangeableParameterItem';
import './styles.css';

function ParameterListView({
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
}) {
  return (
    <ul className={listStyle}>

      <li className="biography-li">
        <img
          className="boxer-photo"
          alt={fullName}
          src={photo}
          /* eslint-disable-next-line no-console */
          onLoad={() => console.log(`Photo of ${fullName} has loaded successfully!`)}
          /* eslint-disable-next-line no-console */
          onError={() => console.log(`Error occurred with the photo of ${fullName}!`)}
        />
      </li>

      <li className="biography-li"><p>{fullName}</p></li>

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
              bubbleSort(belts).map(({ beltName, year }) => (
                <li className="belt" key={beltName + year}>
                  {year}
                  {' '}
                  -
                  {' '}
                  {beltName}
                </li>
              ))
          }
        </ul>
      </li>
    </ul>
  );
}

ParameterListView.propTypes = {
  fullName: PropType.string.isRequired,
  birthYear: PropType.number.isRequired,
  photo: PropType.string.isRequired,
  weight: PropType.number.isRequired,
  belts: PropType.arrayOf(PropType.shape({})).isRequired,
  currentEditedField: PropType.string,
  currentEditedValue: PropType.oneOfType(
    [PropType.number, PropType.string]
  ),
  onEditClick: PropType.func.isRequired,
  onFieldChange: PropType.func.isRequired,
  onFieldBlur: PropType.func.isRequired,
  onKeyPressed: PropType.func.isRequired,
  listStyle: PropType.string.isRequired,
};

ParameterListView.defaultProps = {
  currentEditedField: null,
  currentEditedValue: null,
};

export default ParameterListView;
