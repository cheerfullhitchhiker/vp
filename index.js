const TelegramApi = require('node-telegram-bot-api')
const token = "5008339345:AAF0qWZ4yU_nbNy9QVXY36A3xd-89o7N-eg"
const bot = new TelegramApi(token, { polling: true })
const { startKeyboard, keyboard1, keyboard2, keyboard3, doneKeyboard } = require('./options')
let fs = require('fs')

const startmsg = fs.readFileSync("messages/startmsg.txt", "utf8");
const stepOne = fs.readFileSync("messages/stepOneOfTwo.txt", "utf8")
const stepTwoI = fs.readFileSync("messages/stepTwoIOS.txt", "utf8")
const stepTwoA = fs.readFileSync("messages/stepTwoAndroid.txt", "utf8")
const stepTwoM = fs.readFileSync("messages/stepTwoMacOS.txt", "utf8")
const stepTwoW = fs.readFileSync("messages/stepTwoWindows.txt", "utf8")
const allDone = fs.readFileSync("messages/allDone.txt", "utf8")
const photo = fs.readFileSync("image.png")
const stepOneOfTwo = async(chatId) => {
    bot.sendMessage(chatId, stepOne, keyboard1)
}
const stepTwoOfTwo1 = async(chatId) => {
    bot.sendMessage(chatId, '_затычка. тут будет отправляться QR и конфиг-файл, а с сообщением ниже и инструкция_', { parse_mode: 'Markdown' })
    await bot.sendMessage(chatId, stepTwoI, keyboard3)
}
const stepTwoOfTwo2 = async(chatId) => {
    bot.sendMessage(chatId, '_затычка. тут будет отправляться QR и конфиг-файл_', { parse_mode: 'Markdown' })
    await bot.sendMessage(chatId, stepTwoA, keyboard3)
}
const stepTwoOfTwo3 = async(chatId) => {
    bot.sendMessage(chatId, '_затычка. тут будет отправляться QR и конфиг-файл, а с сообщением ниже и инструкция_', { parse_mode: 'Markdown' })
    await bot.sendMessage(chatId, stepTwoW, keyboard3)
}
const stepTwoOfTwo4 = async(chatId) => {
    bot.sendMessage(chatId, '_затычка. тут будет отправляться QR и конфиг-файл, а с сообщением ниже и инструкция_', { parse_mode: 'Markdown' })
    await bot.sendMessage(chatId, stepTwoM, keyboard3)
}
const allDonemsg = async(chatId) => {
    //await bot.sendMessage(chatId, allDone, doneKeyboard)
    await bot.sendPhoto(chatId, photo)

}
const start = () => {
    bot.setMyCommands([
        { command: '/start', description: 'Начало работы с ботом' },
        { command: '/help', description: 'Связаться с поддержкой' },
        { command: '/getConfig', description: 'Получить мой конфиг' },
    ])
    bot.on('message', msg => {
        const text = msg.text
        const chatId = msg.chat.id
        const firstname = msg.chat.first_name
        const lastname = msg.chat.last_name
        const username = msg.chat.username
        const msg_id = msg.message_id
        console.log(msg)

        if (text === '/start') {
            return bot.sendMessage(chatId, startmsg, startKeyboard)
        }
        if (text === '/help') {
            return bot.sendMessage(chatId, 'Поддержка: @example_bot ')
        }
        // if (text === '/getConfig') {
        //   return bot.sendMessage(chatId, 'Что-то я не вижу вас в своей базе данных =(')
        //    }
        return bot.sendMessage(chatId, 'Я вас не понимаю')

    })

    bot.on('callback_query', async msg => {
        const data = msg.data
        const chatId = msg.message.chat.id

        if (data === 'try') {
            return stepOneOfTwo(chatId)
        }
        if (data === 'ask') {
            return bot.sendMessage(chatId, 'Поддержка: @example_bot')
        }
        if (data === '1') {
            return stepTwoOfTwo1(chatId)
        }
        if (data === '2') {
            return stepTwoOfTwo2(chatId)
        }
        if (data === '3') {
            return stepTwoOfTwo3(chatId)
        }
        if (data === '4') {
            return stepTwoOfTwo4(chatId)
        }
        if (data === '6') {
            return allDonemsg(chatId)
        }
        if (data === 'instruction') {
            return bot.sendMessage(chatId, '*...подробная инструкция...*')
        }

        return bot.sendMessage(chatId, 'Я вас не понимаю')
    })


}





start()