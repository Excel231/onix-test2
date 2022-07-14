import i18next from 'i18next';
import SET_LANGUAGE from './languageTypes';

interface ReducerType {
  language: string;
}

interface ActionType {
    type: string;
    language?: string;
}

export const initialState: ReducerType = {
  language: i18next.language,
};

// eslint-disable-next-line default-param-last
const manageLanguage = (state = initialState, action: ActionType): ReducerType => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language!
      };
    default:
      return state;
  }
};

export default manageLanguage;
