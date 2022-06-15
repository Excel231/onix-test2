import React, { useState } from 'react';
import PropType from 'prop-types';
import ParameterListView from './ParameterListView';

function ParameterList({
  id,
  fullName,
  photo,
  birthYear,
  weight,
  belts,
  onSaveChanges,
  listStyle,
  handleParameterIsEdited
}) {
  const [currentEditedField, setCurrentEditedField] = useState(null);
  const [currentEditedValue, setCurrentEditedValue] = useState(null);

  const onEditClick = (field, value) => {
    setCurrentEditedField(field);
    setCurrentEditedValue(value);
    handleParameterIsEdited();
  };

  const onFieldChange = (e) => {
    const { value } = e.target;
    setCurrentEditedValue(value);
  };

  const onFieldBlur = () => {
    onSaveChanges(currentEditedField, Number(currentEditedValue), id);
    setCurrentEditedField(null);
    setCurrentEditedValue(null);
    handleParameterIsEdited();
  };

  const onKeyPressed = (e) => {
    if (e.key === 'Enter') {
      onFieldBlur();
    }
  };

  return (
    <ParameterListView
      fullName={fullName}
      birthYear={birthYear}
      photo={photo}
      weight={weight}
      belts={belts}
      currentEditedField={currentEditedField}
      currentEditedValue={currentEditedValue}
      onEditClick={onEditClick}
      onFieldChange={onFieldChange}
      onFieldBlur={onFieldBlur}
      onKeyPressed={onKeyPressed}
      listStyle={listStyle}
    />
  );
}

ParameterList.propTypes = {
  id: PropType.number,
  fullName: PropType.string,
  age: PropType.number,
  birthYear: PropType.number,
  weight: PropType.number,
  belts: PropType.array,
  onSaveChanges: PropType.func
};

export default ParameterList;
