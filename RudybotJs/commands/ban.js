const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    requiredPerms: ['MANAGE_ROLES'],
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Adds role to user")
        .addUserOption((option) =>
        option
            .setName("member")
            .setDescription("Member to ban!")
            .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName("reason")
                .setDescription("Reason for ban!")
        ),
    async execute(interaction) {
        if (interaction.member?.permissions.has(['BAN_MEMBERS'])) {
            const member = interaction.options.getUser("member");
            var reason = interaction.options.getString("reason");
            const guild = interaction.guild;
            if (!reason) {
                reason = "None"
            }
            guild.members.ban(member, {reason: reason})
            await interaction.reply(`${member} was banned by ${interaction.member?.user} for ${reason}!`);
        } else {
            await interaction.reply("You do not have permission to use this command!");
        }
    }
}
  