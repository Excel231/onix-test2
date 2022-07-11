import i18next from 'i18next';
import SET_LANGUAGE from './languageTypes';

export const initialState = {
  language: i18next.language,
};

// eslint-disable-next-line default-param-last
const manageLanguage = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.language };
    default:
      return state;
  }
};

export default manageLanguage;
