const Bot = require('node-telegram-bot-api');
const request = require('request');
const url = 'https://developers.zomato.com/api/v2.1/categories';
const trigger = '/categories';
const token = require('./token');

var cat = function () {
// to be done
}

var commands = {
    categories = cat
}

var msgText = message.text;

