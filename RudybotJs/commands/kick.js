const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Kicks user")
        .addUserOption((option) =>
            option
                .setName("member")
                .setDescription("Member to mute!")
                .setRequired(true)
        ),
    async execute(interaction) {
    if (interaction.member?.permissions.has(['KICK_MEMBERS'])) {
        const member = interaction.options.getMember("member");
        member.kick();
        await interaction.reply(`Kicked ${member}!`);
    } else {
        await interaction.reply("Not enough permission!")
    }
    }
}