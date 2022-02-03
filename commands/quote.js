const quotes = require('./bin/quotes.json');
const {version, description} = require("../package.json");
exports.run = (client, message, param) => {
    const rand = Math.floor(Math.random() * quotes.length);
    const quote = quotes[rand]
    let embedtxt = [
        {
            "type": "rich",
            "title": "",
            "description": quote.text,
            "color": 0x00FFFF,
            "fields": [
                {
                    "name": "\u200B",
                    "value": quote.timestamp
                }
            ],
            "author": {
                "name": quote.author,
                "url": `https://github.com/michael-niewerth/toxjr`
            }
        }
    ]
    message.channel.send({embeds: embedtxt})
}
exports.metadata = ['', 'Probiers aus.']