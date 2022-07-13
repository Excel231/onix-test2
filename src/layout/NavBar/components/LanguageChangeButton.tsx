import React from 'react';
import { useDispatch } from 'react-redux';
import i18n from '../../../i18n';
import '../sass/LanguageChangeButton.scss';
import changeLanguage from '../../../store/language/languageActions';

interface Props {
  children: string;
}

const LanguageChangeButton: React.FC<Props> = ({ children }) => {
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

export default LanguageChangeButton;
