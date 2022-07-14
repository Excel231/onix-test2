import i18next from 'i18next';
import SET_LANGUAGE from './languageTypes';

export const initialState = {
  language: i18next.language,
};

interface ActionType {
    type: string;
    language: string;
}

// eslint-disable-next-line default-param-last
const manageLanguage = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      };
    default:
      return state;
  }
};

export default manageLanguage;
