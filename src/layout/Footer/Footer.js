import React, { useState } from 'react';
import FooterView from './FooterView';

const GITHUB_LINK = 'https://github.com/Excel231';
const DESIGN_LINK = 'https://www.templatemonsterpreview.com/demo/54034.html?_gl=1*4dlq71*_ga*NjM5NjMwNjA0Lj'
    + 'E2NDg4MzE2Mjk.*_ga_FTPYEGT5LY*MTY0ODgzODAyNy4yLjEuMTY0ODgzODE5NS4zMw..&_ga=2.21071039.50816026.164883'
    + '1629-639630604.1648831629';
const SH_LINK = 'https://diploma.programming.org.ua/ru/d/zPE9X6BvVKaZDAm93jw7Q12MYRgNGoqr';

const Footer = () => {
  const [linkText, setLinkText] = useState(':');

  const changeSignUpText = (linkTitle) => {
    setLinkText(linkTitle);
  };

  return (
    <FooterView
      gitHubLink={GITHUB_LINK}
      designLink={DESIGN_LINK}
      shLink={SH_LINK}
      linkText={linkText}
      changeSignUpText={changeSignUpText}
    />
  );
};

export default Footer;
