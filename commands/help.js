exports.run=(client,message,param)=>{
    message.channel.send('```           *Befehlsübersicht* \n\nBefehle sind aus dem Prefix(tx) einem Befehl und gegebenenfalls einem Parameter aufgebaut.\n\nGültige Befehle sind:\necho (parameter): der Parameter wird als Nachricht ausgegeben.\nping : Der Bot antwortet mit Pong\nhelp : Der Bot gibt eine Übersicht über gültige Befehle```');
}