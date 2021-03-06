import $ from 'jquery';

var arrLang = {
  ua: {
    about: 'Про нас',
    features: 'Переваги',
    connect: 'Підключитись',
    drivers: 'Водіям',
    owners: 'Власникам автопарків',
    headerbutton: 'Підключитись',
    herotitle: 'Переходь на',
    herodescription: 'Di global офіційний партнер компанії DiDi',
    herosubtitle: 'Ми вже в Україні',
    herobutton: 'Зареєструватись',
    sectionfeaturestitle: 'Сервіс таксі міжнародного рівня DIDI вже в Україні!',
    featuresitem:
      'Почніть заробляти в таксі DiDi відразу після запуску сервіса та отримайте доступ  до розширеного пакету привілегій сервісу: бонуси, програма лояльності і підвищенний пріоритет.',
    featuresitem1:
      'Користувачів привертає активна позиція агрегатора на ринку і очікувано низькі ціни на старті. Гарантований потік замовлень в таксі і бонуси - відмінна можливість заробити  більше, ніж з будь-яким іншим агрегатором.',
    featuresitem2: 'Залиште заявку, і ми зв`яжемося з Вами.',
    featuresitem3:
      'Для своїх водіїв ми пропонуємо вигідні умови: повністю вільний графік, підтримку фахівців, гарантія безпеки, тарифи, не просто покривають витрати, але і служать гідною оплатою праці. Робота в Діді - вдале поєднання стабільності, хорошого доходу і вільного графіка.',
    featuresitem4:
      'Робота в Діді - вдале поєднання стабільності, гарного доходу і вільного графіка.',
    featuresbutton: 'Підключитись',
    formh4: 'Почніть заробляти разом з нами!',
    formh3: 'Зареєструйся сьогодні!',
    labelname: 'Ім`я',
    checkbox: 'Я згоден на обробку персональних даних',
    formbutton: 'Підключитися',
    partnershiptitle: 'Партнерство з DiDi',
    partnershiptitle1: 'Низька комісія',
    partnershiptext:
      'Майже весь заробіток з кожної поїздки залишається вам.Коміссія DiDi становить до 12%.',
    partnershiptitle2: 'Безпека і комфорт',
    partnershiptext1:
      'У вас буде доступ до наших вбудованих в додаток функцій безпеки, які допоможуть вам почувати себе комфортно до і під час поїздки з клієнтом.',
    partnershiptitle3: 'Телефонна підтримка 24/7',
    partnershiptext2:
      'DiDi піклується про вас під час ваших поїздок. Якщо вам потрібна допомога у вирішенні будь-яких виникаючих питань, телефонуйте в нашу службу підтримки DiDi.',
    partnershipbutton: 'Підключитись',
    getstartedtitle: 'Як почати працювати з DiDi?',
    getstartedtitle1: 'Зв`яжіться з нами для реєстрації',
    getstartedtext: 'Наш співробітник проконсультує і підключить вас до сервісу.',
    getstartedtitle2: 'Дотримуйтесь інструкцій співробітника',
    getstartedtext1: 'Ми направимо вам всю необхідну інформацію і допоможемо.',
    getstartedtitle3: 'Скачайте мобільний додаток',
    getstartedtext2: 'Безкоштовний додаток "DiDi Водій" доступний для Android в Google Play.',
    getstartedtitle4: 'Виконуйте замовлення і заробляйте',
    getstartedtext3: 'Заробіток до 250 000 тенге в тиждень!',
    requirementstitle: 'Основні вимоги для підключення DiDi',
    requirementstitle1: 'Водій',
    requirementstext: '— 18 років+',
    requirementstext1: '— Наявність ВП',
    requirementstext2: '— Відсутність судимостей',
    requirementstitle2: 'Автомобіль',
    requirementstext3: '— Від 1995 року випуску (в залежності від марки автомобіля)',
    requirementstext4: '— Без серйозних пошкоджень',
    requirementstext5: '— Двері 4+',
    footercontacts: 'Контакти',
    footercontacts1: 'Популярні питання',
  },
  ru: {
    about: 'О нас',
    features: 'Преимущества',
    connect: 'Подключиться',
    drivers: 'Водителям',
    owners: 'Владельцам автопарка',
    headerbutton: 'Подключиться',
    herotitle: 'Переходи на',
    herodescription: 'Di global официальный партнёр компании DiDi',
    herosubtitle: 'Мы уже в Украине!',
    herobutton: 'Зарегистрироваться',
    sectionfeaturestitle: 'Сервис такси международного уровня DIDI уже в Украине',
    featuresitem:
      'Начните зарабатывать в такси DiDi сразу после запуска сервиса и получите доступ к расширенному пакету привилегий сервиса: бонусы, программа лояльности и повышенный приоритет.',
    featuresitem1:
      'Пользователей привлекает активная позиция агрегатора на рынке и ожидаемо низкие цены на старте. Гарантируемый поток заказов в такси и бонусы - отличная возможность заработать больше, чем с любым другим агрегатором.',
    featuresitem2: 'Оставьте заявку, и мы свяжемся с Вами.',
    featuresitem3:
      'Для своих водителей мы предлагаем выгодные условия: полностью свободный график, поддержку специалистов, гарантия безопасности, тарифы, не просто покрывающие расходы, но и служащие достойной оплатой труда. Работа в ДиДи — удачное сочетание стабильности, хорошего дохода и свободного графика.',
    featuresitem4:
      'Работа в ДиДи — удачное сочетание стабильности, хорошего дохода и свободного графика.',
    featuresbutton: 'Подключиться',
    formh4: 'Начните зарабатывать вместе с нами!',
    formh3: 'Зарегистрируйся сегодня!',
    labelname: 'Имя',
    checkbox: 'Я согласен на обработку персональных данных',
    formbutton: 'Подключится',
    partnershiptitle: 'Партнёрство с DiDi',
    partnershiptitle1: 'Низкая комиссия',
    partnershiptext:
      'Почти весь заработок с каждой поездки остается вам.Комиссия DiDi составляет до 12%.',
    partnershiptitle2: 'Безопасность и комфорт',
    partnershiptext1:
      'У вас будет доступ к нашим встроенным в приложение функциям безопасности, которые помогут вам чувствовать себя комфортно до и во время поездки с клиентом.',
    partnershiptitle3: 'Телефонная поддержка 24/7',
    partnershiptext2:
      'DiDi заботится о вас во время ваших поездок. Если вам требуется помощь в решении любых возникающих вопросов, звоните в нашу службу поддержки DiDi.',
    partnershipbutton: 'Подключиться',
    getstartedtitle: 'Как начать работать с DiDi?',
    getstartedtitle1: 'Свяжитесь с нами для регистрации',
    getstartedtext: 'Наш сотрудник проконсультирует и подключит вас к сервису.',
    getstartedtitle2: 'Следуйте инструкциям сотрудника',
    getstartedtext1: 'Мы направим вам всю необходимую информацию и поможем.',
    getstartedtitle3: 'Скачайте мобильное приложение',
    getstartedtext2: 'Бесплатное приложение "DiDi Водитель" доступно для Android в Google Play.',
    getstartedtitle4: 'Выполняйте заказы и зарабатывайте',
    getstartedtext3: 'Заработок до 250 000 тенге в неделю!',
    requirementstitle: 'Основные требования для подключения DiDi',
    requirementstitle1: 'Водитель',
    requirementstext: '— 18 лет+',
    requirementstext1: '— Наличие ВУ',
    requirementstext2: '— Отсутствие судимостей',
    requirementstitle2: 'Автомобиль',
    requirementstext3: '— От 1995 года выпуска (в зависимости от марки автомобиля)',
    requirementstext4: '— Без серьезных повреждений',
    requirementstext5: '— Двери 4+',
    footercontacts: 'Контакты',
    footercontacts1: 'Популярные вопросы',
  },
};

$(function () {
  $('.translate').click(function () {
    var lang = $(this).attr('id');

    $('.lang').each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});
