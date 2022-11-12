const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("play")
        .setDescription("Plays music!")
        .addStringOption((option) => 
            option
                .setName("song")
                .setDescription("The song you want to play!")
                .setRequired(true)
        ),
    async execute(interaction) {
        const song = interaction.options.getString('song');
        const channel = interaction.member.voice.channel;
        if(!channel){
            await interaction.reply("***You must be in a VC!!!***");
            return;
        }
        await interaction.reply("***Playing***")
        music.play({
            interaction: interaction,
            channel: channel,
            song: song
        });
    }
}
