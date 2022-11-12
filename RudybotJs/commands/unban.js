const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    requiredPerms: ['MANAGE_ROLES'],
    data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Adds role to user")
        
        .addStringOption((option) =>
            option
                .setName("id")
                .setDescription("Member to get role!")
                .setRequired(true)
        ),
    async execute(interaction) {
        if (interaction.member?.permissions.has(['BAN_MEMBERS'])) {
            const id = interaction.options.get('id')?.value;
            const guild = interaction.guild;
            guild.members.unban(id);
            await interaction.reply(`${interaction.member?.user} unbanned ${id}!`);
        } else {
            await interaction.reply("You do not have permission to use this command!");
        }
    }
}
  