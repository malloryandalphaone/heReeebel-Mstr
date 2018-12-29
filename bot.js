const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
client.user.setGame("I Hate the life.", "LISTENING");
   console.log(`Ready!`);
});


client.on('message', message => {
    if(message.content === 'يوم'){
        message.channel.send('#daily')
    }
});


client.login(process.env.TOKEN);// لا تغير فيها شيء
