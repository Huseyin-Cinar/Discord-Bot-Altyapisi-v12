const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = function(client, message, args, member) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("<a:retg:839073832840986645> Dostum Kaçtane Mesaj Sileceğimi Söylemelisin! Örnek: `.sil <sayı>` ");
  message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`:white_check_mark: ${args[0]} Adet Mesaj Uzaya Yolladım! :rocket: `)
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};
