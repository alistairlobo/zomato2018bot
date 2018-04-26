'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('584328858:AAH_VxFfeXT8-D9FuSNiZ3MofnAMzSTqvTo')

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        $.sendMessage('pong')
    }

    get routes() {
        return {
            'pingCommand': 'pingHandler'
        }
    }
}

tg.router
    .when(
        new TextCommand('ping', 'pingCommand'),
        new PingController()
    )