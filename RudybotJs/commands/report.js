const { SlashCommandBuilder } = require('@discordjs/builders');
const { RichEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("report")
        .setDescription("Reports a member!")
        .addUserOption((option) =>
            option
            .setName("member")
            .setDescription("Member to report!")
            .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName("reason")
                .setDescription("Reason for reporting!")
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName("proof")
                .setDescription("Proof for reporting!Accepts links from photos and text only!")
                .setRequired(true)
        ),
    async execute(interaction){
        const repch = interaction.guild.channels.cache.find(channel => channel.name === "reports");
        const member = interaction.options.getMember('member');
        const reason = interaction.options.getString('reason');
        const proof = interaction.options.getString("proof");
        if(!repch) {
            await interaction.reply("This guild is not configured for reporting!Contact admins or mods!");
            return;
        }
	if(interaction.member?.id != "439375752144748554"){
            if(member.permissions.has(['ADMINISTRATOR'])){
                 await interaction.reply("You can't report this member!");
                 return;
            }
       }
        await interaction.reply(`Reported ${member} successfully!`);
        await repch.send(`User ${interaction.member} reported ${member} for ${reason} with proof: \n ${proof}`);
    }
}
