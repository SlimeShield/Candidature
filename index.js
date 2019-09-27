const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require("fs");

client.login("");

client.on("guildMemberAdd", function(member) {
  let embed = new Discord.RichEmbed()
    .setDescription(
      ":tada: **" + member.user.username + "** a rejoint " + member.guild.name
    )
    .setFooter("Nous sommes désormais " + member.guild.memberCount);
  member.guild.channels.get("622433574980943891").send(embed);
  member.addRole("622497298529648640" + "622501073235607586");
});

client.on("guildMemberRemove", function(member) {
  let embed = new Discord.RichEmbed()
    .setDescription(
      ":cry: **" + member.user.username + "** a quitté " + member.guild.name
    )
    .setFooter("Nous sommes désormais " + member.guild.memberCount);
  member.guild.channels.get("622433574980943891").send(embed);
});

client.on("message", message => {
  if (message.content === "Bot, tu fais quoi ?") {
    message.reply(
      "Je suis entrain d'éffectuer des commandes invisibles(des Events)."
    );
  }
});

fs.readdir("./Commandes/", (error, f) => {
  if (error) {
    return console.error(error);
  }
  let commandes = f.filter(f => f.split(".").pop() === "js");
  if (commandes.length <= 0) {
    return console.log("Aucune commande trouvée !");
  }

  commandes.forEach(f => {
    let commande = require(`./Commandes/${f}`);
    console.log(`${f} commande chargée !`);
    client.commands.set(commande.help.name, commande);
  });
});

fs.readdir("./Events/", (error, f) => {
  if (error) {
    return console.error(error);
  }
  console.log(`${f.length} events chargés`);

  f.forEach(f => {
    let events = require(`./Events/${f}`);
    let event = f.split(".")[0];
    client.on(event, events.bind(null, client));
  });
});
