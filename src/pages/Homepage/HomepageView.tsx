import React from 'react';
import CommentsSection from './components/CommentsSection';
import HomepageMainSection from './components/HomepageMainSection';

interface Props {
    signUpButtonWasPressed: boolean;
    changeSignUpButtonWasPressed: () => void;
}

const HomepageView: React.FC<Props> = ({
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

export default HomepageView;
