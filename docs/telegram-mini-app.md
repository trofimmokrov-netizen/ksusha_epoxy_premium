# Telegram Mini App мастерской Ксении

Бот: https://t.me/Drevesny3D_Bot
Публичная веб-часть: https://trofimmokrov-netizen.github.io/ksusha_epoxy_premium/miniapp.html

Коллекция использует site-data.js, конструктор configure.html, примерка showroom.html. Изменения общей коллекции и 3D-моделей доступны на сайте и в приложении после публикации Pages. Без серверной авторизации, оплаты и обработки команд бота. InitData не используется как подтверждённая личность. Нет токена бота в клиентском коде.

## Кнопка открытия

В @BotFather: /mybots → @Drevesny3D_Bot → Bot Settings → Menu Button → Configure menu button. Указать публичный HTTPS URL выше, текст «Открыть мастерскую». Альтернативная команда: /setmenubutton.
Для кнопки в профиле: Bot Settings → Configure Mini App → Enable Mini App, указать тот же URL. Прямой запуск https://t.me/Drevesny3D_Bot?startapp работает после включения основного Mini App.

Официальные инструкции: https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-menu-button и https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-profile-button

Токен, попавший в переписку, нужно заменить в @BotFather через /revoke. При настройке кнопки через BotFather токен не нужен. Приложение продолжит работать после замены.

## Проверка

miniapp-check.cjs проверяет ширины 320/390/768, пять карточек, выбор модели, возврат Telegram BackButton, сохранение открытого конструктора при переходе в контакты, открытие черновика Telegram и работу в браузере без SDK. Telegram SDK в автоматическом тесте имитируется. Реальный запуск внутри Telegram, доступ к галерее устройства, экспорт PNG и отправку заявки нужно дополнительно проверить на телефоне. Тест не отправляет сообщения и заявки.

Фото комнаты обрабатывается локально существующей студией примерки. 3D — концептуальная модель, размеры по умолчанию предварительные. Итоговая стоимость согласуется с мастером. Форма Bitrix24 и черновик сообщения доступны на последнем шаге подбора.
