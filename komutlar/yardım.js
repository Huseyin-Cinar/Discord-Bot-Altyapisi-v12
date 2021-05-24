const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args, member) => {
    var prefix = ayarlar.prefix;
    var member = ("Selam")
//GENEL KOMUTU
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Genel', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", `𝕭𝖑𝖆𝖈𝖐 𝕯𝖊𝖆𝖙𝖍#3957` + "** | **" + `[Destek Sunucusu](https://discord.gg/wHfXDRua8d)`  + "** | **" + `Bu Sunucuya Özeldir.`  + "** | **" + `[Web Sitesi](https://sites.google.com/view/discordtrbot/ana-sayfa)  `, false)
              return message.member.send(Genel)
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Sunucu" || args[0] === "sunucu") {
              let Sunucu = new Discord.MessageEmbed()
  .setAuthor('Sunucu', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", `𝕭𝖑𝖆𝖈𝖐 𝕯𝖊𝖆𝖙𝖍#3957` + "** | **" + `[Destek Sunucusu](https://discord.gg/wHfXDRua8d)`  + "** | **" + `Bu Sunucuya Özeldir.`  + "** | **" + `[Web Sitesi](https://sites.google.com/view/discordtrbot/ana-sayfa)  `, false)
              return message.member.send(Sunucu)
         
      

       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Eğlence', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", `𝕭𝖑𝖆𝖈𝖐 𝕯𝖊𝖆𝖙𝖍#3957` + "** | **" + `[Destek Sunucusu](https://discord.gg/wHfXDRua8d)`  + "** | **" + `Bu Sunucuya Özeldir.`  + "** | **" + `[Web Sitesi](https://sites.google.com/view/discordtrbot/ana-sayfa)  `, false)
   return message.member.send(Eğlence)
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Moderasyon', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", `𝕭𝖑𝖆𝖈𝖐 𝕯𝖊𝖆𝖙𝖍#3957` + "** | **" + `[Destek Sunucusu](https://discord.gg/wHfXDRua8d)`  + "** | **" + `Bu Sunucuya Özeldir.`  + "** | **" + `[Web Sitesi](https://sites.google.com/view/discordtrbot/ana-sayfa)  `, false)
   return message.member.send(Moderasyon)
             
       
               return;
  }
     //SAHİP KOMUTU
  if(args[0] === "Sahip" || args[0] === "sahip" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Moderasyon', message.author.displayAvatarURL())
   .setColor('#2667FF')
   .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
   .addField("» Linkler", `𝕭𝖑𝖆𝖈𝖐 𝕯𝖊𝖆𝖙𝖍#3957` + "** | **" + `[Destek Sunucusu](https://discord.gg/wHfXDRua8d)`  + "** | **" + `Bu Sunucuya Özeldir.`  + "** | **" + `[Web Sitesi](https://sites.google.com/view/discordtrbot/ana-sayfa)  `, false)
    return message.member.send(Sahip)
              
        
                return;
   }

//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setDescription(`**Örnek Kullanım:** \`${prefix}yardım Kategori\` \n **Örnek:** \`${prefix}yardım Genel\``)
  .addField('Kategoriler:', `
  **[${prefix}yardım Genel]** 
  **[${prefix}yardım Eğlence]**
  **[${prefix}yardım Moderasyon]**
  **[${prefix}yardım Sunucu]**
  **[${prefix}yardım Sahip]**
  `)
  .addField("» Linkler", `By:𝕭𝖑𝖆𝖈𝖐 𝕯𝖊𝖆𝖙𝖍#3957` + "** | **" + `[Destek Sunucusu](https://discord.gg/wHfXDRua8d)`  + "** | **" + `Bu Sunucuya Özeldir.`  + "** | **" + `[Web Sitesi](https://sites.google.com/view/discordtrbot/ana-sayfa)  `, false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.member.send(embed)

  
}
  


  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'], 
    permLevel: 0, 
    kategori: "Genel"

  };

  exports.help = {
    name: 'yardım',  
    description: 'Komutlar hakkında bilgi verir.',
    usage: 'yardım', 
  };
