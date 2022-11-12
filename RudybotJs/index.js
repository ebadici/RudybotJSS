require('dotenv').config();
const {Client, Intents, Collection} = require('discord.js');
const fs = require('fs');
const music = require('@koenie06/discord.js-music');

const client = new Client({ intents:[32767] });

const commands = [];

client.commands = new Collection();

const mevents = music.event;

mevents.on('playSong', async (channel, songInfo, requester) => {

    /* See all the 'songInfo' options by logging it.. */

    channel.send({
        content: `***Started playing the song [${songInfo.title}](${songInfo.url}) by \`${songInfo.author}\`.
        This was requested by ${requester.tag} (${requester.id})***`
    });

});

mevents.on('addSong', async (channel, songInfo, requester) => {

    /* See all the 'songInfo' options by logging it.. */

    channel.send({
        content: `***Added the song [${songInfo.title}](${songInfo.url}) by \`${songInfo.author}\` to the queue.
        Added by ${requester.tag} (${requester.id})***`
    });

});

mevents.on('playList', async (channel, playlist, songInfo, requester) => {

    /* See all the 'songInfo' and 'playlist' options by logging it.. */

    channel.send({
        content: `***Started playing the song [${songInfo.title}](${songInfo.url}) by \`${songInfo.author}\` of the playlist ${playlist.title}.
        This was requested by ${requester.tag} (${requester.id})***`
    });

});

mevents.on('addList', async (channel, playlist, requester) => {

    /* See all the 'playlist' options by logging it.. */

    channel.send({
        content: `***Added the playlist [${playlist.title}](${playlist.url}) with ${playlist.videos.length} amount of videos to the queue.
        Added by ${requester.tag} (${requester.id})***`
    });

});

mevents.on('finish', async (channel) => {

    channel.send({
        content: '***Party has been ended!***'
    });

});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, commands));
	} else {
		client.on(event.name, (...args) => event.execute(...args, commands));
	}
}


client.login(process.env.TOKEN)