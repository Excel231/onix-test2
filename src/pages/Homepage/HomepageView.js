import React from 'react';
import PropType from 'prop-types';
import CommentsSection from './components/CommentsSection';
import HomepageMainSection from './components/HomepageMainSection';

const HomepageView = ({
  signUpButtonWasPressed,
  changeSignUpButtonWasPressed
}) => {
  return (
    <div>
      <HomepageMainSection
        signUpButtonWasPressed={signUpButtonWasPressed}
        changeSignUpButtonWasPressed={changeSignUpButtonWasPressed}
      />
      <CommentsSection />
    </div>
  );
};

HomepageView.propTypes = {
  signUpButtonWasPressed: PropType.bool.isRequired,
  changeSignUpButtonWasPressed: PropType.func.isRequired,
};

export default HomepageView;
