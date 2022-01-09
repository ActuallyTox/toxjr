module.exports =(cmd, client, msg)=>{
    const command = client.commands.get(cmd);
    if(!command) console.log(`Command ${cmd} nicht gefunden`); return;
    msg.channel.send(`Command ${command} gefunden`)
    cmd.run(client,msg)
}