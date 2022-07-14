import React from 'react';
import { useTranslation } from 'react-i18next';
import BoxerLink from '../../../сomponents/BoxerLink/BoxerLink';
import BigRedAnchorButton from '../../../сomponents/buttons/BigRedAnchorButton/BigRedAnchorButton';
import '../sass/HomepageMainSection.scss';
import { BOXER_LINK_1, BOXER_LINK_2 } from '../../../constants/constants';
import { useThemeColorContext } from '../../../context/ThemeColorProvider';

interface Props {
  signUpButtonWasPressed: boolean;
  changeSignUpButtonWasPressed: () => void;
}

const HomepageMainSection: React.FC<Props> = ({
  signUpButtonWasPressed,
  changeSignUpButtonWasPressed
}) => {
  const darkThemeOn = useThemeColorContext() ?? true;

  const { t } = useTranslation('', { keyPrefix: 'homepage' });

  return (
    <div
      id="homepage-main-section"
      className={darkThemeOn ? 'homepage-dark-theme' : 'homepage-light-theme'}
    >
      <h2 className="homepage-heading">{t('mainHeading')}</h2>
      <p className="main-text">{t('boxInfo')}</p>
      <p className="main-text">
        {t('mainText1')}
        <BoxerLink
          boxerName={t('boxerName1')}
          boxerSite={BOXER_LINK_1}
        />
        {t('mainText2')}
        <BoxerLink
          boxerName={t('boxerName2')}
          boxerSite={BOXER_LINK_2}
        />
        {t('mainText3')}
        <br />
      </p>
      <p className="call-to-sign-up">
        <em>
          <strong>
            {signUpButtonWasPressed ? t('signUpButtonChangedText') : t('signUpButtonText')}
          </strong>
        </em>
      </p>

      <BigRedAnchorButton changeText={changeSignUpButtonWasPressed}>
        <strong>{t('signUpText')}</strong>
      </BigRedAnchorButton>
    </div>
  );
};

export default HomepageMainSection;
