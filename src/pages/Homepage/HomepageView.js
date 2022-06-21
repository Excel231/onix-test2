import React from 'react';
import PropType from 'prop-types';
import CommentsSection from './components/CommentsSection';
import './sass/HomepageMainSection.scss';
import HomepageMainSection from './components/HomepageMainSection';

const HomepageView = ({
  signUpText,
  changeSignUpText
}) => {
  return (
    <div>
      <HomepageMainSection signUpText={signUpText} changeSignUpText={changeSignUpText} />
      <CommentsSection />
    </div>
  );
};

HomepageView.propTypes = {
  signUpText: PropType.string.isRequired,
  changeSignUpText: PropType.func.isRequired,
};

export default HomepageView;
