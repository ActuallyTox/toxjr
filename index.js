//imports
const fs = require('fs')
const dotenv= require("dotenv")
dotenv.config();
const { Client, Collection, Intents } = require('discord.js');
const { token} = process.env;
const allIntents = new Intents(32767);
const client = new Client({ intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


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
    const prefix = process.env.prefix;
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
    const prefix = process.env.prefix;
    if(msg.author.bot) return;
    if(!msg.content.startsWith(prefix))return;
    const input = msg.content.replace(prefix,'');
    const args = input.split(' ')
        if (args.length === 1) {
            if(args[0]===''){
                try{
                    client.commands.get("help").run(client,msg);
                }catch(e){
                    msg.reply(`Befehl nicht verfügbar:\n${e}`)
                }
                return;
            }
            const command = client.commands.get(args[0]);
            try {
                command.run(client, msg);
            } catch (e) {
                msg.reply(`Befehl nicht verfügbar:\n${e}`)
            }

        } else if (args.length >= 2) {
            const command = client.commands.get(args[0]);
            try {
                command.run(client, msg, args[1]);
            } catch (e) {
                msg.reply(`Befehl nicht verfügbar:\n${e}`)
            }

        } else{
            msg.reply("Zu viele Argumente")
    }

    })

function split_at_index(value, index)
{
    return value.substring(0, index) + "," + value.substring(index);
}
