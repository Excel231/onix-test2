import React, { useState } from 'react';
import '../../styles.scss';
import HomepageView from './HomepageView';
import withLayout from '../../HOC/withLayout';
import { SIGN_UP_BUTTON_CHANGED_TEXT, SIGN_UP_BUTTON_TEXT } from '../../constants/constants';

const Homepage = () => {
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
};

export default withLayout(Homepage);
