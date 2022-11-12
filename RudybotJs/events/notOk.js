module.exports = {
    name: "message",
    async execute(messageCreate) {
        const message = messageCreate;
        const forbidenWords = ['migay', 'MI G AY', 'mata', 'tactu', 'pula', 'gay', 'pizda', 'mati'];
        const tlm = message.content.toLowerCase();
        for (var i = 0; i < forbidenWords.length; i++) {
            if(message.author.id == "439375752144748554") return;
            if (!tlm.includes(forbidenWords[i])) return;
            await message.delete();
            if(!tlm.includes("migay")) return;
            console.log(`${message.author} said migay,he is right tho xD!`);
        }
    }
}
