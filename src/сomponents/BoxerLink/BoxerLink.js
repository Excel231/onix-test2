import React from 'react';
import PropType from 'prop-types';
import './styles.scss';

const BoxerLink = ({ boxerSite, boxerName }) => {
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
