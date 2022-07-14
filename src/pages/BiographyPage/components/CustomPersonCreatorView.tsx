import React from 'react';
import { useTranslation } from 'react-i18next';
import BigRedSubmitButton from '../../../сomponents/buttons/BigRedSubmitButton/BigRedSubmitButton';
import '../sass/CustomPersonCreator.scss';
import BiographyImage from './BiographyImage';
import CustomPersonParameter from './CustomPersonParameter';
import { Person } from '../../../types/Interfaces';

interface Props {
  addCustomPerson: (customPerson: Person) => void;
  customPerson: Person;
  setFullName: (fullName: string) => void;
  setWeight: (birthYear: string | number) => void;
  setBirthYear: (weight: string | number) => void;
  setBelt: (beltString: string) => void;
}

const CustomPersonCreatorView: React.FC<Props> = ({
  addCustomPerson,
  customPerson,
  setFullName,
  setWeight,
  setBirthYear,
  setBelt
}) => {
  const { t } = useTranslation('', { keyPrefix: 'biographyPage' });
  return (
    <div className="custom-person-section">
      <h2>
        <em>{t('callToAddCustomPerson')}</em>
      </h2>
      <form>
        <ul>
          <li>
            <BiographyImage fullName="Default Image" photo="defaultImage" />
          </li>
          <CustomPersonParameter setParameter={setFullName}>{t('fullName')}</CustomPersonParameter>
          <CustomPersonParameter setParameter={setBirthYear}>{t('birthYear')}</CustomPersonParameter>
          <CustomPersonParameter setParameter={setWeight}>{t('weight')}</CustomPersonParameter>
          <CustomPersonParameter setParameter={setBelt}>{t('belt')}</CustomPersonParameter>
        </ul>
      </form>
      <BigRedSubmitButton onClick={() => addCustomPerson(customPerson)}>
        {t('addCustomPersonButton')}
      </BigRedSubmitButton>
    </div>
  );
};

export default CustomPersonCreatorView;
