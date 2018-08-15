const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سيرفر خرافي 
للي يبي يشتري بوتات ونيترو 
واشياء خرافيه تنورنا ي بعد قلبي
https://discord.gg/5Zzdmg9
[ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سيرفر خرافي 
للي يبي يشتري بوتات ونيترو 
واشياء خرافيه تنورنا ي بعد قلبي
https://discord.gg/5Zzdmg9
[ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
