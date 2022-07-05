const layout = {
  siteName: 'Knock Out!',
  homepageLinkText: 'Додому',
  biographyLinkText: 'БІографії',
  shopLinkText: 'Магазин',

  authorName: 'Автор: Іван Гончаренко',
  alsoCheck: 'Також перегляньте',
  design: 'Дизайн',
  sh: 'Ш++'
};

const homepage = {
  mainHeading: 'Хочешь стать сильніше? Шукаєшь гідного супротивника? Тоді наш зал для тебе!',
  boxInfo: 'Бокс - один із найпопулярніших видів спорту у світі!',

  mainText1: 'Якщо ти хочеш стати живою легендою, як ',
  mainText2: ' чи ',
  mainText3: ', приєднуйся до нашого суспільства і',

  boxerName1: 'Віталій Кличко',
  boxerName2: 'Олександр Усик',

  signUpButtonText: 'ВДАРЬ ПО ЦІЙ КНОПЦІ ЗАРАЗ!',
  signUpButtonChangedText: 'ЛАСКАВО ПРОСИМО ДО КЛУБУ, ДРУЖЕ.',

  signUpText: 'ЗАРЕЄСТРУВАТИСЯ!',

  commentsHeading: 'Коментарі від популярних осіб'
};

const biographyPage = {
  photo: 'Фото',
  fullName: 'Повне ім\'я',
  birthYear: 'Рік народження',
  weight: 'Вага',
  yearAndBelts: 'Рід - Пояс',
  belt: 'Пояс',

  addPersonButton: 'ДОдати нового боксера',
  removePersonButton: 'Прибрати останнього боксера',
  addCustomPersonButton: 'Додати власного боксера',

  callToAddCustomPerson: 'Додай когось-ще до списку',
};

const shopPage = {
  dayOffer: 'Пропозиція дня',
  discountText: 'Розпродаж закінчиться через: ',
  discountFinished: 'Розпродаж завершено!',
  addToCartButton: 'Додати до кошика'
};

const error = {
  pageNotFound: 'Сторінка не знайдена'
};

const ukr = {
  translation: {
    ...layout,
    ...homepage,
    ...biographyPage,
    ...shopPage,
    ...error
  }
};

export default ukr;
