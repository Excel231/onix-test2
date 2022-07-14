import SET_LANGUAGE from './languageTypes';

const changeLanguage = (language: string) => ({ type: SET_LANGUAGE, language });

export default changeLanguage;
