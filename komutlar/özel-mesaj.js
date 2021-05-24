const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, data, member) => {
   message.member.send(':x: Sana Özel Mesaj Atmam İçin Bir Şey Yazmalısın! Örnek:`.özel <mesaj>`').then(message => {
      var özel = [`${data}`];
      var özelm = özel;
            message.edit(`${özelm}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['özelyazı', 'yolla', 'özelyazıyolla', 'özelyolla'],
  permLevel: 0
  };

exports.help = {
  name: 'özel',
  description: 'Özel Mesaj Atar',
  usage: 'özel <yazı>'
};