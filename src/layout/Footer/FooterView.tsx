import React from 'react';
import { useTranslation } from 'react-i18next';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faObjectGroup, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterLink from '../FooterLink/FooterLink';
import './Footer.scss';

interface Props {
    gitHubLink: string;
    designLink: string;
    shLink: string;
    linkText: string;
    changeSignUpText: (linkTitle: string) => void;
}

const FooterView: React.FC<Props> = ({
  gitHubLink,
  designLink,
  shLink,
  linkText,
  changeSignUpText,
}) => {
  const { t } = useTranslation('', { keyPrefix: 'layout' });
  return (
    <footer id="footer-section">
      <div className="footer-info-menu">
        <h3 className="footer-text">{t('authorName')}</h3>
        <h3 className="footer-text">
          {`${t('alsoCheck')} ${linkText}`}
        </h3>
        <div>
          <FooterLink
            handleMouseEnter={changeSignUpText}
            linkTitle="GitHub"
            footerLink={gitHubLink}
            faIcon={<FontAwesomeIcon icon={faGithub} className="fa-2xl" />}
          />
          <FooterLink
            handleMouseEnter={changeSignUpText}
            linkTitle={t('design')}
            footerLink={designLink}
            faIcon={<FontAwesomeIcon icon={faObjectGroup} className="fa-2xl" />}
          />
          <FooterLink
            handleMouseEnter={changeSignUpText}
            linkTitle={t('sh')}
            footerLink={shLink}
            faIcon={<FontAwesomeIcon icon={faSchool} className="fa-2xl" />}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterView;
