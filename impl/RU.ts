import type { Language } from '../language';
import 'dayjs/locale/ru';

const language: Language = {
    name: 'Russian',
    code: 'RU',
    aliases: ['RU'],
    translator: 'ChatGPT',
    phrases: {
        'Why should i use osu.direct?': 'Почему стоит использовать osu.direct?',
        'Blazing Fast Downloads': 'Молниеносные загрузки',
        'We know the pain of waiting for beatmaps to download. With osu.direct, you can enjoy blazing fast speeds without any subscription or payment. Say goodbye to slow downloads and hello to uninterrupted fun.':
            'Мы знаем, как тяжело ждать загрузки битмапов. С osu.direct вы можете наслаждаться молниеносной скоростью без подписки или оплаты. Попрощайтесь с медленными загрузками и поприветствуйте непрерывное удовольствие.',
        'Reliability You Can Trust': 'Надежность, которой можно доверять',
        "Previously known as Kitsu, we've rebranded to osu.direct with a commitment to reliability. Trusted by major projects like osu!droid and Akatsuki, you can count on us to deliver seamless service.":
            'Ранее известный как Kitsu, мы переименовались в osu.direct с приверженностью надежности. Нам доверяют крупные проекты, такие как osu!droid и Akatsuki, вы можете рассчитывать на нас в предоставлении бесперебойного обслуживания.',
        'Wide Compatibility': 'Широкая совместимость',
        "We're all about flexibility. Whether you need support for v1 or v2 API routes, or custom features for your next project, osu.direct has you covered. We're here to adapt to your needs and help you succeed.":
            'Мы ценим гибкость. Нужна ли вам поддержка маршрутов API v1 или v2, или пользовательские функции для вашего следующего проекта, osu.direct поможет вам. Мы здесь, чтобы адаптироваться к вашим потребностям и помочь вам добиться успеха.',
        'Used and trusted by amazing projects like':
            'Используется и доверяется такими замечательными проектами, как',
        'All Rights Reserved.': 'Все права защищены.',
        'type in keywords...': 'введите ключевые слова...',
        Mode: 'Режим',
        Any: 'Любой',
        Qualified: 'Квалифицированный',
        Pending: 'В ожидании',
        Graveyard: 'Заброшенный',
        graveyard: 'заброшенный',
        submitted: 'отправлено',
        'last updated': 'последнее обновление',
        Length: 'Длина',
        Count: 'Количество',
        CTRL: 'STRG',
        'Quick Search': 'Быстрый поиск',
        'showing {{from}} - {{to}} of {{total}} entries':
            'показано {{from}} - {{to}} из {{total}} записей',
        'Search for Beatmaps...': 'Искать битмапы...',
        'Search for something c:': 'Искать что-нибудь c:',
        'Loading Results...': 'Загрузка результатов...',
        'Search Results': 'Результаты поиска',
        'No results found.': 'Ничего не найдено.',
        Browse: 'Просмотр',
        'Support us!': 'Поддержите нас!',
        'Join Discord': 'Присоединиться к Discord',
        'More from': 'Больше от',
        'Similar Sets': 'Похожие наборы',
        Categories: 'Категории',
        Hide: 'Скрыть',
        Show: 'Показать',
        Only: 'Только',
        'Spotlighted beatmaps': 'Битмапы в центре внимания',
        'Has Leaderboard': 'Есть таблица лидеров',
        'Has Video': 'Есть видео',
        'Has Storyboard': 'Есть раскадровка',
        'Has Video and Storyboard': 'Есть видео и раскадровка',
        'BeatmapSet not found!': 'Набор битмапов не найден!',
        'Back to Browse Page': 'Вернуться на страницу просмотра',
        'Mapped by': 'Создано',
        'mapped by': 'создано',
        Title: 'Название',
        Difficulty: 'Сложность',
        Updated: 'Обновлено',
        updated: 'обновлено',
        created: 'создано',
        Submitted: 'Отправлено',
        Favourites: 'Избранное',
        'Download Queue': 'Очередь загрузки',
        'Download Maps': 'Скачать карты',
        'Download Maps (no video)': 'Скачать карты (без видео)',
        'Download (no video)': 'Скачать (без видео)',
        'Add to collection.db': 'Добавить в collection.db',
        Favourite: 'В избранное',
        Collections: 'Коллекции',
        'Edit Collection': 'Редактировать коллекцию',
        'Delete Collection': 'Удалить коллекцию',
        'Show Unranked Guest Participations': 'Показать неранговые гостевые участия',
        'Account History': 'История аккаунта',
        'Guest Participation Beatmaps': 'Битмапы гостевого участия',
        'Pending Beatmaps': 'Ожидающие битмапы',
        'Graveyarded Beatmaps': 'Заброшенные битмапы',
        'This user has no ranked maps.': 'У этого пользователя нет ранговых карт.',
        'This user has no loved maps.': 'У этого пользователя нет любимых карт.',
        'This user has no guest participations.': 'У этого пользователя нет гостевых участий.',
        'This user has no pending maps.': 'У этого пользователя нет ожидающих карт.',
        'This user has no WIP maps.': 'У этого пользователя нет WIP карт.',
        'This user has no graveyarded maps.': 'У этого пользователя нет заброшенных карт.',
        'Scan this QR code to instantly access the BeatmapSet page on any device, download it, and share it across different platforms.':
            'Отсканируйте этот QR-код, чтобы мгновенно получить доступ к странице BeatmapSet на любом устройстве, загрузить ее и поделиться ею на разных платформах.',
        'Download QR Code': 'Скачать QR-код',
        'Site not found!': 'Сайт не найден!',
        'show more': 'показать больше',
        'Star Rating': 'Звездный рейтинг',
        Accuracy: 'Точность',
        by: 'от',
        'Favourite Beatmaps': 'Избранные битмапы',
        'Most Played Beatmaps': 'Самые играемые битмапы',
        'New Ranked Beatmaps': 'Новые ранговые битмапы',
        'Seamless Compatibility': 'Бесшовная совместимость',
        'seamlessly works with both osu!stable and osu!lazer clients, effortlessly importing downloaded beatmaps regardless of which client you use, ensuring a consistent and hassle-free experience across different versions of the game.':
            'бесшовно работает как с клиентами osu!stable, так и с osu!lazer, легко импортируя загруженные битмапы независимо от того, какой клиент вы используете, обеспечивая последовательный и беспроблемный опыт в разных версиях игры.',
        'Easy Handling': 'Простое управление',
        'offers the same extensive features as the official website, providing users with a comprehensive platform for discovering and downloading beatmaps directly from their desktop application, streamlining the entire process.':
            'предлагает те же обширные функции, что и официальный веб-сайт, предоставляя пользователям комплексную платформу для поиска и загрузки битмапов непосредственно из их настольного приложения, упрощая весь процесс.',
        'Familiar and Hassle-free Experience': 'Привычный и беспроблемный опыт',
        'ensures a seamless transition from the website by mirroring its intuitive and user-friendly interface. With the same UI design, users can effortlessly navigate, search, and download their favorite beatmaps with minimal effort, promoting overall usability and satisfaction without the need for relearning or adjustment.':
            'обеспечивает плавный переход с веб-сайта, отражая его интуитивно понятный и удобный интерфейс. С тем же дизайном пользовательского интерфейса пользователи могут легко перемещаться, искать и загружать свои любимые битмапы с минимальными усилиями, способствуя общей удобству использования и удовлетворению без необходимости переобучения или настройки.',
        'Why should i use the Desktop App?': 'Почему стоит использовать настольное приложение?',
        'Track all your downloads here in this Download Queue Manager.':
            'Отслеживайте все свои загрузки здесь, в этом менеджере очереди загрузок.',
        'Add advanced filter': 'Добавить расширенный фильтр',
        'Select a filter value': 'Выберите значение фильтра',
        'This is taking longer than expected...': 'Это занимает больше времени, чем ожидалось...',
        'API Documentation': 'Документация API',
        'This beatmap contains a video': 'Эта битмапа содержит видео',
        'This beatmap contains a storyboard': 'Эта битмапа содержит раскадровку',
        'This beatmap is spotlighted': 'Эта битмапа находится в центре внимания',
        'Search, discover, and download osu! beatmaps': 'Ищите, открывайте и загружайте битмапы osu!',
        'effortlessly. Built for speed and simplicity, designed for players, by players.':
            'без усилий. Создано для скорости и простоты, разработано игроками, для игроков.',
        'See why players love osu.direct': 'Узнайте, почему игроки любят osu.direct',
        'Terms of Service': 'Условия использования',
        'Download for Windows': 'Скачать для Windows',
        'By accessing or using our website, you agree to comply with and be bound by the following Terms of Service ("TOS"). These terms are in place to ensure fair and lawful use of our services. By continuing to browse or use osu.direct, you confirm that you have read, understood, and agreed to these terms. If you do not agree with any part of these terms, please refrain from using our service.':
            'Получая доступ или используя наш веб-сайт, вы соглашаетесь соблюдать следующие Условия использования («Условия»). Эти условия существуют для обеспечения справедливого и законного использования наших услуг. Продолжая просматривать или использовать osu.direct, вы подтверждаете, что прочитали, поняли и согласились с этими условиями. Если вы не согласны с какой-либо частью этих условий, пожалуйста, воздержитесь от использования нашего сервиса.',
        'We encourage you to review these Terms of Service periodically, as they may be updated to reflect changes in legal requirements, service improvements, or community guidelines. Your continued use of osu.direct after any modifications constitutes acceptance of the revised terms.':
            'Мы рекомендуем вам периодически просматривать настоящие Условия использования, поскольку они могут быть обновлены для отражения изменений в законодательных требованиях, улучшениях услуг или рекомендациях сообщества. Ваше дальнейшее использование osu.direct после любых изменений означает принятие пересмотренных условий.',
        '1. Acceptance of Terms': '1. Принятие условий',
        'By using osu.direct, you agree to these Terms of Service and our Privacy Policy. You acknowledge that these terms form a binding agreement between you and osu.direct. We reserve the right to modify these terms at any time to accommodate new features, legal requirements, or other considerations. Any updates will be clearly communicated on our website, and it is your responsibility to stay informed about changes. Continued use of osu.direct signifies your acceptance of any modifications.':
            'Используя osu.direct, вы соглашаетесь с настоящими Условиями использования и нашей Политикой конфиденциальности. Вы признаете, что эти условия образуют обязательное соглашение между вами и osu.direct. Мы оставляем за собой право изменять эти условия в любое время для учета новых функций, юридических требований или других соображений. Все обновления будут четко сообщены на нашем веб-сайте, и вы несете ответственность за информирование об изменениях. Продолжение использования osu.direct означает ваше согласие с любыми изменениями.',
        '2. Use of the Service': '2. Использование сервиса',
        'osu.direct provides a mirror for osu! beatmaps for convenience.':
            'osu.direct предоставляет зеркало для битмапов osu! для удобства.',
        'You agree not to use this service for any illegal or unauthorized purposes.':
            'Вы соглашаетесь не использовать этот сервис для каких-либо незаконных или несанкционированных целей.',
        'You may not attempt to disrupt, modify, or exploit the service in any way.':
            'Вы не можете пытаться нарушать, изменять или эксплуатировать сервис каким-либо образом.',
        'Users can authenticate with Discord to create and manage beatmap collections.':
            'Пользователи могут аутентифицироваться с помощью Discord для создания и управления коллекциями битмапов.',
        'Users can download beatmaps directly from the website.':
            'Пользователи могут загружать битмапы непосредственно с веб-сайта.',
        'Authentication is handled through the Discord API, and basic user data such as email, username and token is collected. This data is encrypted on our end to ensure security.':
            'Аутентификация осуществляется через Discord API, и собираются основные пользовательские данные, такие как электронная почта, имя пользователя и токен. Эти данные шифруются на нашей стороне для обеспечения безопасности.',
        '3. Intellectual Property': '3. Интеллектуальная собственность',
        'osu.direct does not claim ownership of the beatmaps hosted on the platform. All beatmaps remain the property of their respective creators.':
            'osu.direct не претендует на владение битмапами, размещенными на платформе. Все битмапы остаются собственностью их соответствующих создателей.',
        'By using the service, you acknowledge that osu! and its assets are trademarks of ppy Pty Ltd.':
            'Используя сервис, вы признаете, что osu! и его активы являются товарными знаками ppy Pty Ltd.',
        'If you are a content owner and wish to request removal of your work, please contact us.':
            'Если вы являетесь владельцем контента и хотите запросить удаление вашей работы, пожалуйста, свяжитесь с нами.',
        '4. User Conduct': '4. Поведение пользователя',
        'You agree to use the service responsibly and not abuse it.':
            'Вы соглашаетесь использовать сервис ответственно и не злоупотреблять им.',
        'Do not upload or distribute any malicious, illegal, or copyrighted content without permission.':
            'Не загружайте и не распространяйте вредоносный, незаконный или защищенный авторским правом контент без разрешения.',
        'Automatic downloading is allowed, but spamming API routes will lead to a ban.':
            'Автоматическая загрузка разрешена, но спам маршрутов API приведет к бану.',
        '5. Liability Disclaimer': '5. Отказ от ответственности',
        'osu.direct is provided "as is" without any warranties or guarantees.':
            'osu.direct предоставляется «как есть» без каких-либо гарантий.',
        'We are not responsible for any damage, loss of data, or disruptions caused by using our service.':
            'Мы не несем ответственности за любой ущерб, потерю данных или сбои, вызванные использованием нашего сервиса.',
        'We reserve the right to limit or terminate access to the service at any time.':
            'Мы оставляем за собой право ограничивать или прекращать доступ к сервису в любое время.',
        '6. Termination': '6. Прекращение действия',
        'We reserve the right to suspend or terminate access to osu.direct at our discretion if users violate these terms or engage in harmful behavior. We may also restrict access to the service if it is necessary to protect the security and integrity of our platform.':
            'Мы оставляем за собой право приостанавливать или прекращать доступ к osu.direct по нашему усмотрению, если пользователи нарушают эти условия или совершают вредоносные действия. Мы также можем ограничить доступ к сервису, если это необходимо для защиты безопасности и целостности нашей платформы.',
        '7. Changes to the Terms': '7. Изменения условий',
        'We may modify these terms at any time. Continued use of osu.direct after changes are posted constitutes acceptance of the updated terms.':
            'Мы можем изменять эти условия в любое время. Продолжение использования osu.direct после публикации изменений означает принятие обновленных условий.',
        '8. Contact': '8. Контакт',
        'For any questions or concerns about these terms, please contact us on our Discord:':
            'По любым вопросам или проблемам, касающимся этих условий, пожалуйста, свяжитесь с нами в нашем Discord:',
        'Last Updated': 'Последнее обновление',
        "Discover and Download Beatmaps with Ease": "Открывайте и загружайте битмапы с легкостью",
        "Experience the seamless and powerful osu.direct app": "Оцените бесшовное и мощное приложение osu.direct",
    }
};

export default language;
