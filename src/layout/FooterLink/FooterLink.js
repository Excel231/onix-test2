import React from 'react';
import PropType from 'prop-types';
import './FooterLink.scss';

const FooterLink = ({
  onMouseEnter, linkTitle, footerLink, faIcon
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
      {faIcon}
    </a>
  );
};

FooterLink.propTypes = {
  onMouseEnter: PropType.func.isRequired,
  linkTitle: PropType.string.isRequired,
  footerLink: PropType.string.isRequired,
  faIcon: PropType.element.isRequired
};

export default FooterLink;
