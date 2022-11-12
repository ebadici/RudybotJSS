const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("purge")
        .setDescription("Purges messages!")
        .addIntegerOption((option) =>
            option
                .setName("amount")
                .setDescription("Amount of messages to purge!")
                .setRequired(true)
        ),
    async execute(interaction) {
        if (interaction.member?.permissions.has(['MANAGE_ROLES'])) {
            const amount = interaction.options.getInteger('amount');
            if (amount > 100) return interaction.reply("Must be less or equal than 100!")
            interaction.channel.bulkDelete(amount)
            const embed = new MessageEmbed()
                .setColor('#ff0044')
                .setTitle(`${interaction.member?.user?.username} deleted ${amount}`)
                .setThumbnail(interaction.member?.user.displayAvatarURL())
            await interaction.reply({embeds: [embed]});
        } else {
            await interaction.reply("You do not have permission to use this command!");
        }
    }
}
