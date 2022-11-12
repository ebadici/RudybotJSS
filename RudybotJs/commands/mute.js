const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mute")
        .setDescription("Mutes user")
        .addUserOption((option) =>
            option
                .setName("member")
                .setDescription("Member to mute!")
                .setRequired(true)
        ),
    async execute(interaction) {
    if (interaction.member?.permissions.has(['MANAGE_ROLES'])) {
        const member = interaction.options.getMember("member");
        const mutedRole = interaction.guild.roles.cache.find(role => role.name === "mute");
        member.roles.add(mutedRole);
        await interaction.reply(`Muted ${member}!`);
    } else {
        await interaction.reply("You do not have permission to use this command!");
    }
    } 
}