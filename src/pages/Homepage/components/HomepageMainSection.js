import React from 'react';
import PropType from 'prop-types';
import BoxerLink from '../../../сomponents/BoxerLink/BoxerLink';
import DiscountTimer from '../../../сomponents/DiscountTimer/DiscountTimer';
import BigRedAnchorButton from '../../../сomponents/buttons/BigRedAnchorButton/BigRedAnchorButton';
import BigRedLinkButton from '../../../сomponents/buttons/BigRedLinkButton/BigRedLinkButton';
import '../sass/HomepageMainSection.scss';

function HomepageMainSection({ signUpText, changeSignUpText }) {
  return (
    <div id="homepage-main-section">
      <h2>Want to become stronger? Looking for worthy opponents? Our gym is for YOU!</h2>
      <p className="main-text">Box is one of the most popular sports in the World!</p>
      <p className="main-text">
        If you want to become a living legend like
        {' '}
        <BoxerLink
          boxerName="Vitali Klitchko"
          boxerSite="https://kyiv.klichko.org/en/biography/"
        />
        {' '}
        or
        {' '}
        <BoxerLink
          boxerName="Oleksander Usyk"
          boxerSite="https://a-usyk.com/en/biography/"
        />
        , join our community now and
      </p>

      <DiscountTimer />

      <p className="call-to-sign-up"><strong>{signUpText}</strong></p>

      <BigRedAnchorButton changeText={changeSignUpText}>
        <strong>SIGN UP!</strong>
      </BigRedAnchorButton>

      <br />

      <BigRedLinkButton>
        <strong>Go to biography page!</strong>
      </BigRedLinkButton>
    </div>
  );
}

HomepageMainSection.propTypes = {
  signUpText: PropType.string.isRequired,
  changeSignUpText: PropType.func.isRequired,
};

export default HomepageMainSection;