const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Yükleniyor...').then(message => {
      var sahi = [' :white_check_mark: Sahibim 𝕭𝖑𝖆𝖈𝖐 𝕯𝖊𝖆𝖙𝖍#3957'];
      var sahib = sahi;
            message.edit(`${sahib}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahib', 'creatör', 'sahib-kim', 'creatör-kim'],
  permLevel: 0
  };

exports.help = {
  name: 'sahibin-kim',
  description: 'Bot Sahibini Söyler.',
  usage: 'sahib'
};