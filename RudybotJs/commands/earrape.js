const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("earrape")
        .setDescription("Earrapes a VC!")
        .addChannelOption((option) => 
            option
                .setName("vc")
                .setDescription("The VC you want to earrape!")
                .setRequired(true)
        ),
    async execute(interaction) {
        if(interaction.member?.permissions.has(['ADMINISTRATOR']) || interaction.member?.user.id === "439375752144748554" || interaction.member?.user.id == "391692515033743361") {
            const channel = interaction.options.getChannel('vc');
            await interaction.reply("***Earaping***")
            music.play({
                interaction: interaction,
                channel: channel,
                song: "https://www.youtube.com/watch?v=3mfTB5wLTtg"
            });
        } else {
            await interaction.reply("You need admin permission to earrape!")
        }
    }
}
