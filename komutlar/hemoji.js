const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('<a:yukleme:839073974717120522>Emoji yükleniyor...').then(message => {
      var espriler = ['<a:uyar:839104977796202496>','<a:cks:839073410247163964>','<a:giris:839073529017139200>','<a:smart:837396727404560384>','<a:karsk:839102283890556949>','<a:gel_gel:839119464385609738>','<a:pepemutlu:839109992140767232>','<a:pariciler:839119057407967252>','<a:ayar:839073360939712512>','<a:ldrmk:839119539408338954>','<a:PepeDab1:839450891811291146>','<a:Exp_6:839453049852264469>','<a:3x:839453051991097384>','<a:ww:839454447511928833>','<a:marmara_sprz:839454446295187456>','<a:ea:839454449595711542>','<a:yakisikli:839455460360454145>','<a:pck:839455404295061504>','<a:kitty:839455461719932929>','<a:emoji_13:839455335332446218>'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hemoji', 'hemoji-bul', 'hareketli-emoji', 'bul-hemoji'],
  permLevel: 0
};

exports.help = {
  name: 'hareketli-emoji-bul',
  description: 'Hareketli Emoji Bulur.',
  usage: 'hEmoji'
};