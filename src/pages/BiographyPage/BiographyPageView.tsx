import React from 'react';
import { useTranslation } from 'react-i18next';
import TitleListOfParameters from './components/TitleParameterList';
import DraggableList from './components/DraggableList';
import BigRedButton from '../../сomponents/buttons/BigRedButton/BigRedButton';
import './BiographyPage.scss';
import CustomPersonCreator from './components/CustomPersonCreator';
import { Person } from '../../types/Interfaces';

interface Props {
    personsOnScreen: Person[];
    emptyIdValue: number;
    sortOnClick: (componentToCompare: string) => void;
    addPerson: () => void;
    addCustomPerson: (customPerson: Person) => void;
    removePerson: () => void;
    onSaveChanges: (field: string, value: string | number, id: string | number) => void;
    changePersonsOnScreen: (newPersonsArray: Person[]) => void;
}

const BiographyPageView: React.FC<Props> = ({
  personsOnScreen,
  emptyIdValue,
  sortOnClick,
  addPerson,
  addCustomPerson,
  removePerson,
  onSaveChanges,
  changePersonsOnScreen
}) => {
  const { t } = useTranslation('', { keyPrefix: 'biographyPage' });
  return (
    <div className="biography-section">
      <TitleListOfParameters sortOnClick={sortOnClick} />

      <DraggableList
        personsOnScreen={personsOnScreen}
        onSaveChanges={onSaveChanges}
        changePersonsOnScreen={changePersonsOnScreen}
      />
      <div>
        <BigRedButton onClick={addPerson}>{t('addPersonButton')}</BigRedButton>
        <BigRedButton onClick={removePerson}>{t('removePersonButton')}</BigRedButton>
      </div>
      <CustomPersonCreator addCustomPerson={addCustomPerson} emptyIdValue={emptyIdValue} />
    </div>
  );
};

export default BiographyPageView;
