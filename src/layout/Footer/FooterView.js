import React from 'react';
import PropType from 'prop-types';
import FooterLink from '../FooterLink/FooterLink';
import './Footer.scss';

const FooterView = ({
  gitHubLink,
  designLink,
  shLink,
  linkText,
  changeSignUpText,
}) => {
  return (
    <footer id="footer-section">
      <div className="footer-info-menu">
        <h3 className="footer-text">by Ivan Honcharenko</h3>
        <h3 className="footer-text">
          Also check
          {' '}
          {linkText}
        </h3>
        <div>
          <FooterLink
            onMouseEnter={changeSignUpText}
            linkTitle="GitHub"
            footerLink={gitHubLink}
            faClasses="fa-brands fa-github fa-2xl"
          />
          <FooterLink
            onMouseEnter={changeSignUpText}
            linkTitle="Design"
            footerLink={designLink}
            faClasses="fa-solid fa-object-group fa-2xl"
          />
          <FooterLink
            onMouseEnter={changeSignUpText}
            linkTitle="SH++"
            footerLink={shLink}
            faClasses="fa-solid fa-school fa-2xl"
          />
        </div>
      </div>
    </footer>
  );
};

FooterView.propTypes = {
  gitHubLink: PropType.string.isRequired,
  designLink: PropType.string.isRequired,
  shLink: PropType.string.isRequired,
  linkText: PropType.string.isRequired,
  changeSignUpText: PropType.func.isRequired
};

export default FooterView;
