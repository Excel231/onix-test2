import React from 'react';
import './FooterLink.scss';

interface Props {
  handleMouseEnter: (linkTitle: string) => void;
  linkTitle: string;
  footerLink: string;
  faIcon: React.ReactNode
}

const FooterLink: React.FC<Props> = ({
  handleMouseEnter, linkTitle, footerLink, faIcon
}) => {
  return (
    <a
      className="link-icon"
      onMouseEnter={() => handleMouseEnter(linkTitle)}
      onMouseLeave={() => handleMouseEnter(':')}
      target="_blank"
      rel="noopener noreferrer"
      title={linkTitle}
      href={footerLink}
    >
      {faIcon}
    </a>
  );
};

export default FooterLink;
