const quotes = require('./bin/quotes.json');
const {version, description} = require("../package.json");
exports.run = (client, message, param) => {
    let quote;
    if (param){
       quote = quotes[param]
    }else {
        const rand = Math.floor(Math.random() * quotes.length);
    quote = quotes[rand]
    }
    let embedtxt = [
        {
            "type": "rich",
            "title": " ",
            "description": quote.text,
            "color": 0x00FFFF,
            "fields": [
                {
                    "name": "\u200b",
                    "value": quote.timestamp
                }
            ],
            "author": {
                "name": quote.author,
                "url": `https://github.com/michael-niewerth/toxjr`
            }
        }
    ]
    if (quote.zu){
        embedtxt[0].title = quote.zu
    }
    message.channel.send({embeds: embedtxt})
}
exports.metadata = ['', 'Probiers aus.']