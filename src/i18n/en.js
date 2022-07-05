const layout = {
  siteName: 'Knock Out!',
  homepageLinkText: 'Homepage',
  biographyLinkText: 'Biography page',
  shopLinkText: 'Shop',

  authorName: 'by Ivan Honcharenko',
  alsoCheck: 'Also check',
  design: 'Design',
  sh: 'SH++'
};

const homepage = {
  mainHeading: 'Want to become stronger? Looking for worthy opponents? Our gym is for YOU!',
  boxInfo: 'Box is one of the most popular sports in the World!',

  mainText1: 'If you want to become a living legend like ',
  mainText2: ' or ',
  mainText3: ', join our community now and',

  boxerName1: 'Vitali Klitchko',
  boxerName2: 'Oleksander Usyk',

  signUpButtonText: 'SMASH THIS BUTTON RIGHT NOW!',
  signUpButtonChangedText: 'WELCOME TO THE CLUB, BUDDY!',

  signUpText: 'SIGN UP!',

  commentsHeading: 'Comments from famous people'
};

const biographyPage = {
  photo: 'Photo',
  fullName: 'Full Name',
  birthYear: 'Birth Year',
  weight: 'Weight',
  yearAndBelts: 'Year - Belts',
  belt: 'Belt',

  addPersonButton: 'Add new person',
  removePersonButton: 'Remove last person',
  addCustomPersonButton: 'Add custom person',

  callToAddCustomPerson: 'Add someone else to the list',
};

const shopPage = {
  dayOffer: 'Offer Of The Day:',
  discountText: 'The discount will end in: ',
  discountFinished: 'The sale is finished!',
  addToCartButton: 'Add to cart'
};

const error = {
  pageNotFound: 'Page is not found'
};

const en = {
  translation: {
    ...layout,
    ...homepage,
    ...biographyPage,
    ...shopPage,
    ...error
  }
};

export default en;
