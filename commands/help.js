exports.run=(client,message,param)=>{
    let helptext = 'Gültige Befehle bestehen aus dem Prefix ('+process.env.prefix+') und gegebenenfalls einem Parameter.\n\n'
    client.commands.forEach((value, key) => {

        helptext += `${key}${value.metadata[0]} : ${value.metadata[1]}\n`;
    })
        embedtxt= [{
        title:"Übersicht",
        description: helptext,

    }]
    message.channel.send({embeds:embedtxt})
 //       'Befehle sind aus dem Prefix(tx) einem Befehl und gegebenenfalls einem Parameter aufgebaut.\n\n' +
//        'Gültige Befehle sind:\n```');
}
exports.metadata= ['','Der Bot schickt dieses Menü.']