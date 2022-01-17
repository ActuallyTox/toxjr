const fetch=require('node-fetch');
const { MessageEmbed} = require('discord.js');
exports.run= async (client,msg,param)=>{
    fetch("https://randomfox.ca/floof/")
        .then((results)=>results.json())
        .then((data)=>{
            if(!param){
                msg.channel.send({
                        embeds:[{
                            title:"Fox Picture",
                            image:{url:data.image}
                        }]
                    }

                )
            }
            console.log(data)
        })
}