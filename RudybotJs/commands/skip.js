const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription("Skips music!"),
    async execute(interaction) {
        const channel = interaction.member.voice.channel;
        if(!channel){
            await interaction.reply("***You must be in a VC!!!***");
            return;
        }
        await interaction.reply("***Skipped***")
        music.skip({ interaction: interaction });
    }
}
