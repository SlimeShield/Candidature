const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  message.channel.send({
    embed: {
      color: 0x0011ff,
      title: `**__Commandes du Bot :__**`,
      thumbnail: {
        url: ""
      },
      fields: [
        {
          name: `**__Commandes Basiques :__**`,
          value: `/ping | /stats <Mentions de l'utilisateur/bot>`
        },
        {
          name: `**__Commandes de Modérations :__**`,
          value: `clear <Numbre> | /addrole <Name du Rôles> | /delrole <Name du Rôles> | /kick <Mentions de l'utilisateur/bot> | /ban <Mentions de l'utilisateur/bot>`
        }
      ]
    }
  });
};

module.exports.help = {
  name: "help"
};
