import React from 'react';
import PropType from 'prop-types';
import './styles.css';

const FooterLink = ({
  onButtonEnter, linkTitle, footerLink, faClasses 
}) => {
  return (
    <a
      className="link-icon"
      onMouseEnter={() => onButtonEnter(linkTitle)}
      target="_blank"
      rel="noopener noreferrer"
      title={linkTitle}
      href={footerLink}
    >
      <i className={faClasses} />
    </a>
  );
};

FooterLink.propTypes = {
  onButtonEnter: PropType.func.isRequired,
  linkTitle: PropType.string.isRequired,
  footerLink: PropType.string.isRequired,
  faClasses: PropType.string.isRequired
};

export default FooterLink;
