const { REST } = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
require("dotenv").config();

module.exports = {
    name: "ready",
    once: "true",
    execute(client, commands) {
            console.log("Ready");        
            const CLIENT_ID = client.user.id;
            client.user.setActivity(`${client.guilds.cache.size} parrot guilds`, { type: 'WATCHING' });
            const rest = new REST({
                version: "9"
            }).setToken(process.env.TOKEN);
            (async () => {
                try {
                    if(process.env.ENV === "production") {
                        await rest.put(Routes.applicationCommands(CLIENT_ID), {
                            body: commands
                        });
                        console.log("Global commands");
                    }
                    else {
                        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID), {
                            body: commands  
                    });
                    console.log("Local commands");
                } 
                } catch (err) {
                    if (err) console.error(err);
                }
            })();
        
    }
}
