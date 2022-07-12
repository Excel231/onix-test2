const layout = {
  siteName: 'Knock Out!',
  homepageLinkText: 'Домой',
  biographyLinkText: 'Биографии',
  shopLinkText: 'Магазин',

  authorName: 'Автор: Иван Гончаренко',
  alsoCheck: 'Также посмотрите',
  design: 'Дизайн',
  sh: 'Ш++'
};

const homepage = {
  mainHeading: 'Хочешь стать сильнее? Ищешь достойного противника? Тогда наш зал для тебя!',
  boxInfo: 'Бокс - один из самых популярных видов спорта в мире!',

  mainText1: 'Если ты хочешь стать живой легендой как ',
  mainText2: ' или ',
  mainText3: ', присоединяйся к нашему сообществу и',

  boxerName1: 'Виталий Кличко',
  boxerName2: 'Александр Усик',

  signUpButtonText: 'УДАРЬ ПО ЭТОЙ КНОПКЕ СЕЙЧАС!',
  signUpButtonChangedText: 'ДОБРО ПОЖАЛОВАТЬ В КЛУБ, ДРУЖИЩЕ.',

  signUpText: 'ЗАРЕГИСТРИРОВАТЬСЯ!',

  commentsHeading: 'Комментарии от популярных людей'
};

const biographyPage = {
  photo: 'Фото',
  fullName: 'Полное имя',
  birthYear: 'Год рождения',
  weight: 'Вес',
  yearAndBelts: 'Год - Пояс',
  belt: 'Пояс',

  addPersonButton: 'Добавить нового боксера',
  removePersonButton: 'Убрать последнего боксера',
  addCustomPersonButton: 'Добавить своего боксера',

  callToAddCustomPerson: 'Добавь ещё кого-нибудь в список',
};

const shopPage = {
  dayOffer: 'Предложение дня',
  discountText: 'Распродажа закончится через: ',
  discountFinished: 'Распродажа окончена!',
  addToCartButton: 'Добавить в корзину'
};

const error = {
  pageNotFound: 'Страница не найдена'
};

const discountModal = {
  discountEnd: 'Распродажа скоро заканчивается!',
  hurryUpText: 'Поторопись! Переходи на страницу магазина!',
  modalShopPageText: 'ПЕРЕЙТИ В МАГАЗИН'
};

const ru = {
  translation: {
    ...layout,
    ...homepage,
    ...biographyPage,
    ...shopPage,
    ...error,
    ...discountModal
  }
};

export default ru;
