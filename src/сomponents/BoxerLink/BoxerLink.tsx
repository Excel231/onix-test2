import React from 'react';
import PropType from 'prop-types';
import './BoxerLink.scss';

interface Props {
  boxerSite: string,
  boxerName: string
}

const BoxerLink: React.FC<Props> = ({ boxerSite, boxerName }) => {
  return (
    <a
      className="boxer-link"
      target="_blank"
      href={boxerSite}
      rel="noopener noreferrer"
    >
      {boxerName}
    </a>
  );
};

BoxerLink.propTypes = {
  boxerSite: PropType.string.isRequired,
  boxerName: PropType.string.isRequired
};

export default BoxerLink;
