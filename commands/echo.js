exports.run=(client,message,param)=>{
    if(!param){
        message.channel.send('⠀')
    }
    message.channel.send(param);
}
exports.metadata = [' (String text)','Der Bot schickt den Parameter als Nachricht.']