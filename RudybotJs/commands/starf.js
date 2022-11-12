const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("fsteaua")
        .setDescription("Plays music!"),
    async execute(interaction) {
        const song = interaction.options.getString('song');
        const channel = interaction.member.voice.channel;
        if(!channel){
            await interaction.reply("***You must be in a VC!!!***");
            return;
        }
        await interaction.reply("***Fortza Steauaing***")
        music.play({
            interaction: interaction,
            channel: channel,
            song: "Fortza Steaua"
        });
    }
}
