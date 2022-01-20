exports.run=(client,message,param)=>{
    if (!message.member.roles.cache.some(role => role.name === 'Admin')){
        message.reply('Zu niedrige Berechtigungsstufe');
        return;
    }
    if (!param){
        message.reply('Parameter für neues Prefix benötigt.')
    }
    process.env.prefix=param;
        message.reply(`Neues Prefix auf ${process.env.prefix} gesetzt`)
}
exports.metadata = [' (String newPrefix)','Prefix ändern']