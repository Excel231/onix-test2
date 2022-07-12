import React from 'react';
import '../../../styles.scss';
import PropType from 'prop-types';
import '../sass/TitleParameterList.scss';
import { useTranslation } from 'react-i18next';
import BoxerParameterButton from '../../../сomponents/buttons/BoxerParameterButton/BoxerParameterButton';

const TitleParameterList = ({ sortOnClick }) => {
  const { t } = useTranslation('', { keyPrefix: 'biographyPage' });
  return (
    <ul className="biography-ul">
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => {}}>
          <h3>{t('photo')}</h3>
        </BoxerParameterButton>
      </li>
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => sortOnClick('fullName')}>
          <h3>{t('fullName')}</h3>
        </BoxerParameterButton>
      </li>
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => sortOnClick('birthYear')}>
          <h3>{t('birthYear')}</h3>
        </BoxerParameterButton>
      </li>
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => sortOnClick('weight')}>
          <h3>{t('weight')}</h3>
        </BoxerParameterButton>
      </li>
      <li className="biography-li belt">
        <BoxerParameterButton handleClick={() => sortOnClick('belts')}>
          <h3>{t('yearAndBelts')}</h3>
        </BoxerParameterButton>
      </li>
    </ul>
  );
};

TitleParameterList.propTypes = {
  sortOnClick: PropType.func.isRequired,

};

export default TitleParameterList;
