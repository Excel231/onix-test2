import React from 'react';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import i18n from '../../../i18n';
import '../sass/LanguageChangeButton.scss';
import changeLanguage from '../../../store/language/languageActions';

const LanguageChangeButton = ({ children }) => {
  const dispatch = useDispatch();

  const setLanguage = () => {
    dispatch(changeLanguage(children.toLowerCase()));
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
