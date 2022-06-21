import React, { useState } from 'react';
import '../../styles.scss';
import HomepageView from './HomepageView';
import withLayout from '../../HOC/withLayout/withLayout';

const SIGN_UP_BUTTON_TEXT = 'SMASH THIS BUTTON RIGHT NOW!';
const SIGN_UP_BUTTON_CHANGED_TEXT = 'WELCOME TO THE CLUB, BUDDY!';

function Homepage() {
  const [signUpText, setSignUpText] = useState(SIGN_UP_BUTTON_TEXT);

  const changeSignUpText = () => {
    setSignUpText(SIGN_UP_BUTTON_CHANGED_TEXT);
  };

  return (
    <HomepageView
      signUpText={signUpText}
      changeSignUpText={changeSignUpText}
    />
  );
}

export default withLayout(Homepage);
