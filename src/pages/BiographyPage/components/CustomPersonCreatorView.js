import React from 'react';
import PropType from 'prop-types';
import { useTranslation } from 'react-i18next';
import BigRedSubmitButton from '../../../сomponents/buttons/BigRedSubmitButton/BigRedSubmitButton';
import '../sass/CustomPersonCreator.scss';
import BiographyImage from './BiographyImage';
import CustomPersonParameter from './CustomPersonParameter';

const CustomPersonCreatorView = ({
  addCustomPerson,
  customPerson,
  setFullName,
  setWeight,
  setBirthYear,
  setBelt
}) => {
  const { t } = useTranslation();
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

CustomPersonCreatorView.propTypes = {
  addCustomPerson: PropType.func.isRequired,
  customPerson: PropType.shape({}).isRequired,
  setFullName: PropType.func.isRequired,
  setWeight: PropType.func.isRequired,
  setBirthYear: PropType.func.isRequired,
  setBelt: PropType.func.isRequired
};

export default CustomPersonCreatorView;
