import React from 'react';
import LanguageChangeButton from './LanguageChangeButton';
import '../sass/LanguageChangePanel.scss';

const LanguageChangePanel = () => {
  return (
    <div className="lng-btn-list">
      <LanguageChangeButton type="button">EN</LanguageChangeButton>
      <LanguageChangeButton type="button">RU</LanguageChangeButton>
      <LanguageChangeButton type="button">UKR</LanguageChangeButton>
    </div>
  );
};

export default LanguageChangePanel;
