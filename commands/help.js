exports.run=(client,message,param)=>{
    message.channel.send('```           *Befehlsübersicht* \n\n' +
        'Befehle sind aus dem Prefix(tx) einem Befehl und gegebenenfalls einem Parameter aufgebaut.\n\n' +
        'Gültige Befehle sind:\n' +
        'echo (parameter): der Parameter wird als Nachricht ausgegeben.\n' +
        'ping : Der Bot antwortet mit Pong\n' +
        'help : Der Bot gibt eine Übersicht über gültige Befehle' +
        'fox: : Der Bot sendet ein Fuchsfoto,' +
        'axolotl : Der Bot sendet einen Axolotl Fakt + Bild');
}