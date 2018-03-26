const Discord = require("discord.js");
const bot = new Discord.Client();

var stupefix
var prefix = (".")

bot.on('ready', function() {
    bot.user.setGame("Command: .help");
    console.log("I'm Ready !");
});
       
bot.login("NDI3NTEwMzEzMDI2MzIyNDMz.DZlpew.6pz15oOiJrnr8Sxp4adASb8VmzQ");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");

    }

    if (message.content === prefix + "stupefix"){
        message.reply("Vous venez de stupéfixer");
        console.log("Commade Spell effectuée");
    }

    if (message.content === prefix + "kick"){
        let modRole = message.guild.roles.find("name", "Test");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas les permissions pour cette commande.").catch(console.error);
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Mentionner l'utilisateur à exclure.").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("Cet utilisateur est introuvable.");
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci.").catch(console.error);
        }
        kickMember.kick().then(member => {
            message.reply(`${member.user.username} a été expulsé avec succès.`).catch(consolore.error);
            message.guild.channels.find("name", "general").send(`**${member.user.username} a été expulsé du Discord par **${message.author.username}**`);
        }).catch(console.error)

    }
});
