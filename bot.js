const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
client.user.setGame("ReeeBeL Away ~", "https://twitch.tv/Reeebel");
   console.log(`Ready!`);
});


 client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('490165996854706217');
  let em = client.emojis.find(e => e.name === "false");
  if(message.content.startsWith(prefix + "mrfooooooooooooooooooooooooooooooooodz")) {
  if(message.guild.id !== '488259622730203137') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن آسم المراد رفضه.");

  acRoom.send(`**»** ${mention}\n**»** مرفوض\n\n**»** ${em}`)
  }
});

client.login(process.env.TOKEN);
