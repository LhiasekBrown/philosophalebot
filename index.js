const Discord = require("discord.js");
const bot = new Discord.Client();

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

    if (message.content === prefix + "spell"){
        message.reply("Vous lancez un sort.");
        console.log("Commade Spell effectuée");
    }
});