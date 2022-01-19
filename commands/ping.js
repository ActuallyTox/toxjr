exports.run=(client,message,param)=>{
    message.reply("pong").catch(console.error)
}
exports.metadata = ['','Der Bot antwortet mit pong.']