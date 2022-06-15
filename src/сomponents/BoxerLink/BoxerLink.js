import React from 'react';
import PropType from 'prop-types';
import './styles.css';

function BoxerLink({ boxerSite, boxerName }) {
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
}

BoxerLink.propTypes = {
  boxerSite: PropType.string,
  boxerName: PropType.string
};

export default BoxerLink;
