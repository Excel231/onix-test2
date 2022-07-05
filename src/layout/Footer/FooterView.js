import React from 'react';
import { useTranslation } from 'react-i18next';
import PropType from 'prop-types';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faObjectGroup, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterLink from '../FooterLink/FooterLink';
import './Footer.scss';

const FooterView = ({
  gitHubLink,
  designLink,
  shLink,
  linkText,
  changeSignUpText,
}) => {
  const { t } = useTranslation();

  return (
    <footer id="footer-section">
      <div className="footer-info-menu">
        <h3 className="footer-text">{t('authorName')}</h3>
        <h3 className="footer-text">
          {`${t('alsoCheck')} ${linkText}`}
        </h3>
        <div>
          <FooterLink
            onMouseEnter={changeSignUpText}
            linkTitle="GitHub"
            footerLink={gitHubLink}
            faIcon={<FontAwesomeIcon icon={faGithub} className="fa-2xl" />}
          />
          <FooterLink
            onMouseEnter={changeSignUpText}
            linkTitle={t('design')}
            footerLink={designLink}
            faIcon={<FontAwesomeIcon icon={faObjectGroup} className="fa-2xl" />}
          />
          <FooterLink
            onMouseEnter={changeSignUpText}
            linkTitle={t('sh')}
            footerLink={shLink}
            faIcon={<FontAwesomeIcon icon={faSchool} className="fa-2xl" />}
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
