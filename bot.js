const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
client.user.setGame("ReeeBeL Away ~", "https://twitch.tv/Reeebel");
   console.log(`Ready!`);
});


client.login(process.env.TOKEN);
