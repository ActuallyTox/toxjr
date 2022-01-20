exports.run=(client,message,param)=>{
    embedtxt= [
        {
            "type": "rich",
            "title": `v1.3`,
            "description": `-Prefix jetzt änderbar und Standard-Prefix auf $ gesetzt ($command -> also kein Leerzeichen mehr zwischen Prefix und Command es sei denn das Leerzeichengehört zum Prefix)`,
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
    //       'Befehle sind aus dem Prefix(tx) einem Befehl und gegebenenfalls einem Parameter aufgebaut.\n\n' +
//        'Gültige Befehle sind:\n```');
}
exports.metadata= ['','Nur für Entwicklungszwecke (nicht benutzen).']