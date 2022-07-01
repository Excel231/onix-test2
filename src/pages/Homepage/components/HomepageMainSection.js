import React from 'react';
import PropType from 'prop-types';
import BoxerLink from '../../../сomponents/BoxerLink/BoxerLink';
import BigRedAnchorButton from '../../../сomponents/buttons/BigRedAnchorButton/BigRedAnchorButton';
import '../sass/HomepageMainSection.scss';
import {
  BOXER_NAME_1, BOXER_LINK_1, BOXER_NAME_2, BOXER_LINK_2 
} from '../../../constants/constants';
import { useThemeColorContext } from '../../../context/ThemeColorProvider';

const HomepageMainSection = ({ signUpText, changeSignUpText }) => {
  const darkThemeOn = useThemeColorContext() ?? true;

  return (
    <div
      id="homepage-main-section"
      className={darkThemeOn ? 'homepage-dark-theme' : 'homepage-light-theme'}
    >
      <h2 className="homepage-heading">Want to become stronger? Looking for worthy opponents? Our gym is for YOU!</h2>
      <p className="main-text">Box is one of the most popular sports in the World!</p>
      <p className="main-text">
        If you want to become a living legend like
        {' '}
        <BoxerLink
          boxerName={BOXER_NAME_1}
          boxerSite={BOXER_LINK_1}
        />
        {' or '}
        <BoxerLink
          boxerName={BOXER_NAME_2}
          boxerSite={BOXER_LINK_2}
        />
        , join our community now and
        <br />
      </p>
      <p className="call-to-sign-up"><em><strong>{signUpText}</strong></em></p>

      <BigRedAnchorButton changeText={changeSignUpText}>
        <strong>SIGN UP!</strong>
      </BigRedAnchorButton>
    </div>
  );
};

HomepageMainSection.propTypes = {
  signUpText: PropType.string.isRequired,
  changeSignUpText: PropType.func.isRequired,
};

export default HomepageMainSection;
