import React from 'react';
import '../../../styles.scss';
import '../sass/TitleParameterList.scss';
import { useTranslation } from 'react-i18next';
import BoxerParameterButton from '../../../сomponents/buttons/BoxerParameterButton/BoxerParameterButton';

interface Props {
    sortOnClick: (componentToCompare: string) => void;
}

const TitleParameterList: React.FC<Props> = ({ sortOnClick }) => {
  const { t } = useTranslation('', { keyPrefix: 'biographyPage' });
  return (
    <ul className="biography-ul">
      <li className="biography-li">
        <h3>{t('photo')}</h3>
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

export default TitleParameterList;
