exports.run = async (client, msg, args) => {
  let fal=[
    "",
    "**Bu gördüklerimi sana anlatmam doğru olmaz sonuçta psikolojinin bozulmasını istemiyorum.**",
    "**Senin için çok karanlık burada karanlıktan başka bir şey göremiyorum.**",
    "**Çok yakın bir zamanda hayatında çok güzel şeyler olacak.**",
    "**Beni kendi sunucuna eklersen çok güzel şeyler olacakmış öyle görüyorum.**",
    "**Çok değişik şeyler görüyorum yakında adrenalinli bir şeyler olacak gibi.**",
    "**Evet evett evettt görüyorum, hayır göremiyorum sakin olduğuna emin misin?**",
    "**Bir harf görüyorum bir kişi görüyorum bu kişinin isminde A harfi var.**",
    "**Sana uzun bir yol görünecek iki vakte kadar.Dikkat et yolun sonunda iki düşmanın var**",
    "**Ay bak altı parmaklı biri var sana gelecek..**",
    "**A-aa bak motorola işareti, kesin telefonunu değiştiriyorsun sen...**",
    "**Bak şuna bak yapı kredi işareti...**",
    "**Aa zürafa, yok yok midilli, yok yaa bu şey hımm köpek mi ne???**",
    "**Hmm senin önün gayet açık gözüküyo**",
    "**Evinin yakınlarında biri dolaşıyo, harem ağası gibi bişey sanırım**",
    "**Hmm sen ya topuklu ayakkabı alıcaksın ya da İtalya'ya gidiceksin..**",
    "**Valla bisey var ama anlam veremedim.**",
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (' :no_entry_sign: Kimin Falına Bakacağımı Söylemelisin! Örnek Kullanım: `.fal <@kişi>`')
}});
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${fal[Math.floor(Math.random() * 16)]}.`)
  }})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
 };

exports.help = {
  name: 'fal',
  description: 'Birine Söver.',
  usage: 'söv'
 }
