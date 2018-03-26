const Discord = require("discord.js");
const bot = new Discord.Client();

var stupefix
var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("I'm Ready !");
});
       
bot.login("NDI3NTEwMzEzMDI2MzIyNDMz.DZlpew.6pz15oOiJrnr8Sxp4adASb8VmzQ");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");

    }

    if (message.content === prefix + "spell" + stupefix + message.mentions.user){
        message.reply("Vous venez de stupéfixer");
        console.log("Commade Spell effectuée");
    }
});
