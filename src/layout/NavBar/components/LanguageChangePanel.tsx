import React from 'react';
import LanguageChangeButton from './LanguageChangeButton';
import '../sass/LanguageChangePanel.scss';

const LanguageChangePanel: React.FC = () => {
  return (
    <div className="lng-btn-list">
      <LanguageChangeButton>EN</LanguageChangeButton>
      <LanguageChangeButton>RU</LanguageChangeButton>
      <LanguageChangeButton>UKR</LanguageChangeButton>
    </div>
  );
};

export default LanguageChangePanel;
