const fs =require("fs");
const {description , version} = require('../package.json')
exports.run=(client,message,param)=>{

   // let package = JSON.parse(fs.readFileSync('../package.json', 'utf8'))

    let embedtxt= [
        {
            "type": "rich",
            "title": version,
            "description":description,
            "color": 0x00FFFF,
            "fields": [
                {
                    "name": "\u200B",
                    "value": `Tox`
                }
            ],
            "author": {
                "name": `Toxjr`,
                "url": `https://github.com/michael-niewerth/toxjr`
            }
        }
    ]
    message.channel.send({embeds:embedtxt})
}
exports.metadata= ['','Patch notes zur aktuellen Version.']