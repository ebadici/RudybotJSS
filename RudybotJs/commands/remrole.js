const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("remrole")
        .setDescription("Removes role from user")
        .addUserOption((option) =>
            option
                .setName("member")
                .setDescription("Member to lose role!")
                .setRequired(true)
        )
        .addRoleOption((option) =>
            option
                .setName("role")
                .setDescription("Role the member should lose!")
                .setRequired(true)
        ),
    async execute(interaction) {
        if (interaction.member?.permissions.has(['MANAGE_ROLES'])) {
            const member = interaction.options.getMember("member");
            const role = interaction.options.getRole("role");
            member.roles.remove(role);
            await interaction.reply(`Removed ${role} from ${member}`);
        } else {
            await interaction.reply("You do not have permission to use this command!");
        }
    }
}