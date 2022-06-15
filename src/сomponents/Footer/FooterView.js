import React from 'react';
import PropType from 'prop-types';
import FooterLink from '../FooterLink/FooterLink';
import './styles.css';

function FooterView({
  gitHubLink, designLink, shLink, linkText, changeSignUpText 
}) {
  return (
    <footer>
      <div className="footer-info-menu">
        <h3>by Ivan Honcharenko</h3>
        <h3>
          Also check
          {linkText}
        </h3>
        <FooterLink
          onButtonEnter={changeSignUpText}
          linkTitle="GitHub"
          footerLink={gitHubLink}
          faClasses="fa-brands fa-github fa-2xl"
        />
        <FooterLink
          onButtonEnter={changeSignUpText}
          linkTitle="Design"
          footerLink={designLink}
          faClasses="fa-solid fa-object-group fa-2xl"
        />
        <FooterLink
          onButtonEnter={changeSignUpText}
          linkTitle="SH++"
          footerLink={shLink}
          faClasses="fa-solid fa-school fa-2xl"
        />
      </div>
    </footer>
  );
}

FooterView.propTypes = {
  gitHubLink: PropType.string,
  designLink: PropType.string,
  shLink: PropType.string,
  linkText: PropType.string,
  changeSignUpText: PropType.func
};

export default FooterView;
