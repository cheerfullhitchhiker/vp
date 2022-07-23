module.exports = {

    startKeyboard: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Попробовать', callback_data: 'try' }],
                [{ text: 'Задать вопрос', callback_data: 'ask' }]
            ],
        }),
        parse_mode: 'Markdown'
    },
    keyboard1: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'IOS', callback_data: '1' }],
                [{ text: 'Android', callback_data: '2' }],
                [{ text: 'Windows', callback_data: '3' }],
                [{ text: 'MacOS', callback_data: '4' }]
            ],
        }),
        parse_mode: 'Markdown'
    },
    keyboard2: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Скачать доступ к VPN', callback_data: '5' }],
                [{ text: 'Нужна помощь', callback_data: 'ask' }]
            ],
        }),
        parse_mode: 'Markdown'
    },
    keyboard3: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Все получилось', callback_data: '6' }],
                [{ text: 'Нужна помощь', callback_data: 'ask' }]
            ],
        }),
        parse_mode: 'Markdown'
    },
    doneKeyboard: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Подробная инструкция', callback_data: 'instruction' }],
                [{ text: 'Получить еще конфиг', callback_data: 'getconfig' }]
                [{ text: 'Задать вопрос', callback_data: 'ask' }]
            ],
        }),
        parse_mode: 'Markdown'
    },

    // startmsg: {
    //     'Ultima – быстрый и безопасный VPN.  \n *В чем отличие от обычного VPN?* Ultima – это ваш личный сервер. Благодаря этому, вы получаете максимальный уровень скорости и безопасности. \n \n *С Ultima вы получаете:* \n - Доступ ко всем любимым ресурсам  \n - Видео и стримы в высоком качестве без лагов \n - Экономию заряда батарейки и трафика по сравнению с обычными VPN \n - Безопасный канал, который не обнаружат и не заблокируют. \n \nПодключение занимает 3 минуты. Работает на iPhone, Android, Windows и MacOS. Первые 7 дней – бесплатно. Далее 199 руб/месяц.'
    // }

}