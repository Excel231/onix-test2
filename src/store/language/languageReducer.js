import SET_LANGUAGE from './languageTypes';

export const initialState = {
  language: 'ru',
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
