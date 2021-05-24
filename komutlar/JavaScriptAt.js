const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('<a:yukleme:839073974717120522>').then(message => {
      var java = ['<:javascript:839112485427871784> <script language="javascript" src="http://ir.sitekodlari.com/yukaricik15.js"></script>','<:javascript:839112485427871784> <script language="javascript" src="http://ir.sitekodlari.com/altin2.js"></script>','<:javascript:839112485427871784> <script language="javascript" src="http://ir.sitekodlari.com/tvizle1.js"></script>'];
      var javam = java;
            message.edit(`${javam}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['javascript', 'javascriptat', 'rastgelejava', 'rastgelejavascriptat'],
  permLevel: 0
  };

exports.help = {
  name: 'javaat',
  description: 'Bot Javascript Atar.',
  usage: 'javaat'
};