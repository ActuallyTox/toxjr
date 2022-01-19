//imports
const fs = require('fs')
const dotenv= require("dotenv")
dotenv.config();
const { Client, Collection, Intents } = require('discord.js');
const { token, clientId, guildId ,prefix} = process.env;
const allIntents = new Intents(32767);
const client = new Client({ intents:allIntents });


/*
//creates client.on events for ever file in the event directory
const files = fs.readdirSync('./events').filter(file=>file.endsWith('.js'));

for(const file of files){
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName,event.bind(null, client));
}
*/


client.commands= new Collection();
const commands = fs.readdirSync('./commands').filter(file=>file.endsWith('.js'));
for (const file of commands){
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);
  console.log(`Loading ${commandName}`);
  client.commands.set(commandName, command)
}


//readystate handler
client.once('ready',()=>{

    console.log(`logged in as:\n${client.user.tag}\n${prefix}`)
})

client.login(token);
/*
function commandHandler(msg){
    let command = client.commands.get(cmd);
    if(!command){console.log(`Command ${cmd} nicht gefunden`); return;}
    console.log(`Command ${cmd} gefunden`)
    command.run(client,msg)
}
*/
client.on('messageCreate',msg=>{
    if(msg.author.bot) return;
    const args = msg.content.split(' ')
    if(args[0]!==prefix) return;
    if(args.length===1&&args[0]==prefix){
        const command=client.commands.get("help");
        command.run(client,msg);

    }else {

        if (args.length === 2) {
            const command = client.commands.get(args[1]);
            try {
                command.run(client, msg);
            } catch (e) {
                msg.reply(`Befehl nicht verfügbar:\n${e}`)
            }

        } else if (args.length >= 3) {
            const command = client.commands.get(args[1]);
            try {
                command.run(client, msg, args[2]);
            } catch (e) {
                msg.reply(`Befehl nicht verfügbar:\n${e}`)
            }

        } else{
            msg.reply("Zu viele Argumente")
    }
    }
    })
