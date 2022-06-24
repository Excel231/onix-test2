import React, { useState } from 'react';
import FooterView from './FooterView';
import { GITHUB_LINK, DESIGN_LINK, SH_LINK } from '../../constants/constants';
import { getThemeColorContext } from '../ThemeColorProvider/ThemeColorProvider';

const Footer = () => {
  const [linkText, setLinkText] = useState(':');

  const changeSignUpText = (linkTitle) => {
    setLinkText(linkTitle);
  };

  const darkThemeOn = getThemeColorContext();

  return (
    <FooterView
      gitHubLink={GITHUB_LINK}
      designLink={DESIGN_LINK}
      shLink={SH_LINK}
      linkText={linkText}
      changeSignUpText={changeSignUpText}
      darkThemeOn={darkThemeOn}
    />
  );
};

export default Footer;
