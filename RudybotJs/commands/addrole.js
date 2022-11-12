const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    requiredPerms: ['MANAGE_ROLES'],
    data: new SlashCommandBuilder()
        .setName("addrole")
        .setDescription("Adds role to user")
        
        .addUserOption((option) =>
            option
                .setName("member")
                .setDescription("Member to get role!")
                .setRequired(true)
        )
        .addRoleOption((option) =>
            option
                .setName("role")
                .setDescription("Role the member should get!")
                .setRequired(true)
        ),
    async execute(interaction) {
        if (interaction.member?.permissions.has(['MANAGE_ROLES'])) {
            const member = interaction.options.getMember("member");
            const role = interaction.options.getRole("role");
            member.roles.add(role);
            await interaction.reply(`Added ${role} to ${member}`);
        } else {
            await interaction.reply("You do not have permission to use this command!");
        }
    }
}