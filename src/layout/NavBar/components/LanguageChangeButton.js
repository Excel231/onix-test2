import React from 'react';
import PropType from 'prop-types';
import '../sass/LanguageChangeButton.scss';
import i18n from '../../../i18n';

const LanguageChangeButton = ({ children }) => {
  const setLanguage = () => {
    localStorage.setItem('lng', children.toLowerCase());
    i18n.changeLanguage(children.toLowerCase());
  };
  return (
    <button
      type="button"
      className="lng-change-btn"
      onClick={() => setLanguage()}
    >
      {children}
    </button>
  );
};

LanguageChangeButton.propTypes = {
  children: PropType.node.isRequired
};

export default LanguageChangeButton;
