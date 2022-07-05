import React, { useState } from 'react';
import '../../styles.scss';
import HomepageView from './HomepageView';
import withLayout from '../../HOC/withLayout';

const Homepage = () => {
  const [signUpButtonWasPressed, setSignUpButtonWasPressed] = useState(false);

  const changeSignUpButtonWasPressed = () => {
    setSignUpButtonWasPressed((prevState) => !prevState);
  };

  return (
    <HomepageView
      signUpButtonWasPressed={signUpButtonWasPressed}
      changeSignUpButtonWasPressed={changeSignUpButtonWasPressed}
    />
  );
};

export default withLayout(Homepage);
