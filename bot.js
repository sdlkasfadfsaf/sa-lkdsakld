const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم ورحمة الله وبركاته 

اولا اعتذر عن الإزعاجج

=-=-=--=--=-=-=-=-=-=-=-=-
حياكك الله في سيرفرنا 
هو عبارة عن متجر شامل يبيع جميع انواع البوتات
ويوجد به خدمات اخرى كــ تصاميم وما الى ذلك
وبه كذالك خدمات لتصميم الاكواد البرمجية

وفيه اشياء خرافية واجد 

- حياك الله
___________________________
https://discord.gg/SSNdU9m
___________________________

واعتذر ع الإزعاج مرة ثانيهه
[ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم ورحمة الله وبركاته 

اولا اعتذر عن الإزعاجج

=-=-=--=--=-=-=-=-=-=-=-=-
حياكك الله في سيرفرنا 
هو عبارة عن متجر شامل يبيع جميع انواع البوتات
ويوجد به خدمات اخرى كــ تصاميم وما الى ذلك
وبه كذالك خدمات لتصميم الاكواد البرمجية


وفيه اشياء خرافية واجد 

- حياك الله
__________________________
https://discord.gg/SSNdU9m
___________________________

واعتذر ع الإزعاج مرة ثانيهه
[ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
