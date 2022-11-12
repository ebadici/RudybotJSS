const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName("rudyp")
        .setDescription("Sends pictures of Rudy the parrot!"),
    async execute(interaction) {
        const links = ["https://imgur.com/MZcJrNH", "https://imgur.com/xFrlSmU", "https://imgur.com/9OIqIjH", "https://imgur.com/GwcPej8", "https://imgur.com/7kf07oL"];
        const randomElement = links[Math.floor(Math.random() * links.length)];
        const embed = new MessageEmbed()
            .setTitle("***Rudy the parrot!***")
            .setThumbnail("https://imgur.com/MZcJrNH")
        await interaction.reply({embeds: [embed]});
    }
}