var figlet = require('figlet');
const Discord = require('discord.js');

module.exports.run = (client, message, args, tools) => {
  var sınır = 70
  
  if(args.join(' ').length > sınır) return message.channel.send(`Dostum Fazla Karakter Yazdın! En fazla ${sınır} Karakter Yazabilirsin`) 
     if(!args[0]) return message.channel.send('<a:onay:839073569896005642>Geçerli Komutu Girsene Allahın Malı!!!<a:onay:839073569896005642>');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Bir hata var...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});

  });

};

exports.conf = {
  aliases: [],
  permLevel: 0,
  kategori: 'Eğlence'
};
exports.help = {
  name: 'ascii',
   description: 'Ascii şeklinde yazı yazmanızı sağlar.',
  usage: 'ascii <mesaj>'
};