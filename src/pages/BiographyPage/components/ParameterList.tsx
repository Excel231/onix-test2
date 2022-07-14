import React, { ChangeEvent, useState } from 'react';
import ParameterListView from './ParameterListView';
import { Belt } from '../../../types/Interfaces';

interface Props {
  id: string | number;
  fullName: string;
  photo: string;
  birthYear: string | number;
  weight: string | number;
  belts: Belt[];
  onSaveChanges: (field: string, value: string | number, id: string | number) => void;
  listStyle: string
  handleParameterIsEdited: () => void;
}

const ParameterList: React.FC<Props> = ({
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
  const [currentEditedField, setCurrentEditedField] = useState<string | null>(null);
  const [currentEditedValue, setCurrentEditedValue] = useState<string | number | null>(null);

  const onEditClick = (field: string, value: string | number) => {
    setCurrentEditedField(field);
    setCurrentEditedValue(value);
    handleParameterIsEdited();
  };

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrentEditedValue(value);
  };

  const onFieldBlur = () => {
    onSaveChanges(currentEditedField!, currentEditedValue!, id);
    setCurrentEditedField(null);
    setCurrentEditedValue(null);
    handleParameterIsEdited();
  };

  const onKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
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

export default ParameterList;
