import React, { useState } from 'react';
import PropType from 'prop-types';
import ParameterListView from './ParameterListView';

const ParameterList = ({
  id,
  fullName,
  photo,
  birthYear,
  weight,
  belts,
  onSaveChanges,
  listStyle,
  handleParameterIsEdited,
}) => {
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
    onSaveChanges(currentEditedField, currentEditedValue, id);
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
};

ParameterList.propTypes = {
  id: PropType.node.isRequired,
  fullName: PropType.node.isRequired,
  photo: PropType.node.isRequired,
  birthYear: PropType.node.isRequired,
  weight: PropType.node.isRequired,
  belts: PropType.arrayOf(PropType.shape({})).isRequired,
  onSaveChanges: PropType.func.isRequired,
  listStyle: PropType.node.isRequired,
  handleParameterIsEdited: PropType.func.isRequired,
};

export default ParameterList;
