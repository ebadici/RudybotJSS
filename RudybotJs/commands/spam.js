const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("spam")
        .setDescription("Spams messages!")
        .addIntegerOption((option) =>
            option
                .setName("amount")
                .setDescription("Amount of messages to spam!")
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('sentence')
                .setDescription("A sentence")
                .setRequired(true)
        ),
    async execute(interaction) {
        if (interaction.member?.permissions.has(['ADMINISTRATOR'])) {
            const amount = interaction.options.getInteger('amount');
            const sentence = interaction.options.getString('sentence');
            await interaction.reply(sentence);
            for(var i = 0; i < amount - 1;++i){
                await interaction.channel.send(sentence);
            }
        } else {
            await interaction.reply("You do not have permission to use this command!");
        }
    }
}