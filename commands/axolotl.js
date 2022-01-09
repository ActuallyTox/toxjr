const fetch=require('node-fetch');
const { MessageEmbed} = require('discord.js');
var response ='';
exports.run= async (client,msg,param)=>{
    fetch("https://axoltlapi.herokuapp.com/")
        .then((results)=>results.json())
        .then((data)=>{
            if(!param){
                msg.channel.send({
                    embeds:[{
                        title:"Axolotl Fact",
                        description: data.facts,
                        image:{url:data.url}
                    }]
                    }

                )
            }
            console.log(data)
        })
}