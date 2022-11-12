const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("unmute")
        .setDescription("Unmutes user")
        .addUserOption((option) =>
            option
                .setName("member")
                .setDescription("Member to lunmute")
                .setRequired(true)
        ),
    async execute(interaction) {
        if (interaction.member?.permissions.has(['MANAGE_ROLES'])) {
            const member = interaction.options.getMember("member");
            const mutedRole = interaction.guild.roles.cache.find(role => role.name === "mute");
            member.roles.remove(mutedRole);
            await interaction.reply(`Unmuted ${member}!`);
        } else {
            await interaction.reply("Not enough permission!")
        }
    }
}