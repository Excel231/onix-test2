import { COMMENTS_API_LINK_ENG, COMMENTS_API_LINK_RUS, COMMENTS_API_LINK_UKR } from '../constants/constants';

const getLanguageApiLink = (lng: string) => {
  switch (lng) {
    case ('en'):
      return COMMENTS_API_LINK_ENG;
    case ('ru'):
      return COMMENTS_API_LINK_RUS;
    case ('ukr'):
      return COMMENTS_API_LINK_UKR;
    default:
      return COMMENTS_API_LINK_ENG;
  }
};

export default getLanguageApiLink;
