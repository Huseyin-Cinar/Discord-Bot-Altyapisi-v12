const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  var sor = ['Olabilir','Büyük İhtimalle','Sanmıyorum','Belki'];
  if(!sor[0]) return message.channel.send("Neyi Sorcan Salak!"); 
  message.channel.send('Komut Yükleniyor...').then(message => {
    var soru = sor[Math.floor(Math.random() * sor.length)];
    message.edit(`${soru}`);
    
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sorusor','soru']
};

exports.help = {
name: 'sor',
description: 'Deneme Komutu',
usage: 'deneme <text>'
  
}