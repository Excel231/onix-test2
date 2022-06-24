import React from 'react';
import PropType from 'prop-types';
import './FooterLink.scss';

const FooterLink = ({
  onMouseEnter, linkTitle, footerLink, faClasses
}) => {
  return (
    <a
      className="link-icon"
      onMouseEnter={() => onMouseEnter(linkTitle)}
      onMouseLeave={() => onMouseEnter(':')}
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
  onMouseEnter: PropType.func.isRequired,
  linkTitle: PropType.string.isRequired,
  footerLink: PropType.string.isRequired,
  faClasses: PropType.string.isRequired
};

export default FooterLink;
