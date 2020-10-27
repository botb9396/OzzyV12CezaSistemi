const Discord = require("discord.js")
const moment = require("moment")
const db = require("quick.db")
const osettings = require("../ayarlar.json")

module.exports.run = async(client,message,args) => {
const guild = message.guild;
const executor = message.member;
moment.locale("tr") // Türkiye bura
//Embed
let oziemb = new Discord.MessageEmbed()
    .setAuthor(guild.name, guild.iconURL({dynamic: true}))
    .setFooter("Ozzy ❤️ Serendia", executor.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()

//Gerekli IDLER!!!!! (Hazır proje değilse burayı doldurun)
let cezarolu = osettings.mutehammer || "mutehammerroluid"; 
let mlog = osettings.cezalog || "logkanalıid";
let mrol = osettings.muterolu || "muteroluid";
mlog = guild.channels.cache.get(mlog)
//
let cezarolismi = guild.roles.cache.get(cezarolu).name

if(!executor.hasPermission("ADMINISTRATOR") && !executor.roles.cache.has(cezarolu)) {
    return message.channel.send(oziemb.setDescription(`**Bu komutu kullanabilmek için ${cezarolismi} rolüne sahip olmalısınız.**`).setColor("RED")).then(x => x.delete({timeout:6500}));
}
let kisi = message.mentions.members.first() || guild.members.cache.get(args[0])
if(!kisi) {
    return message.channel.send(oziemb.setDescription(`**Lütfen susturmasını açmak istediğiniz kişiyi etiketleyin veya bir ID giriniz.**`).setColor("RED")).then(x => x.delete({timeout:6500}));
}
if(!kisi.roles.cache.has(mrol)) {
    return message.channel.send(oziemb.setDescription(`**Bu kişi zaten susturulu değil!**`).setColor("RED")).then(x => x.delete({timeout:6500}));
}
let tarih = moment(message.createdAt).format("lll")
kisi.roles.remove(mrol);
message.channel.send(oziemb.setDescription(`**${kisi} kullancısının susturulması başarıyla açıldı.**`).setColor("GREEN"));
mlog.send(oziemb.setDescription(`**${kisi} kullancısının susturması ${executor} tarafından başarıyla kaldırıldı.\nTarih: ${tarih}**`).setColor("GREEN"));

let cezano = db.fetch(`CezaNo_${guild.name}`);
for (i = cezano; i > 0; i--) {
    let ceza = db.fetch(`Ceza_${i}_${guild.name}`)
    if(ceza.cezalanan == sorguid && ceza.tur == "Mute"){
        db.set(`Unmute_${i}_${guild.name}`,true)
        db.set(`Ceza_${i}_${guild.name}.bitistarihi`, moment(message.createdAt).format("lll"))
        db.set(`Mutede_${guild.name}_${cezalandirilcak.id}`, false)

        break;
    }
  }
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["unmute","unsustur","susturmaaç"],
    permLevel: 0
  } // UnMute By Ozzy
  exports.help = {
    name: 'unmute',
    description: 'unmute kodu lo',
    usage: '.unmute id/@etiket'
  }
