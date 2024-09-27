module.exports = {
    config: {
        name: "greeting",
        version: "1.0",
        author: "aesther",
        countDown: 0,
        role: 0,
        shortDescription: "Auto-reply with Greeting",
        longDescription: "Greets when someone types the keyword 'salut'. 🤝🌏",
        category: "FUN",
    },
    onStart: async function() {}, 
    onChat: async function({
        event,
        message,
        getLang,
        api
    }) {
        if (event.body && event.body.toLowerCase() === "salut") {
            const responses = [
                "𝗦𝖺𝗅𝗎𝗍 😀","𝗛𝖾𝗅𝗅𝗈 🌟","𝗦𝖺𝗅𝗎𝗍 𝖼𝗈𝗆𝗆𝖾𝗇𝗍 ç𝖺 𝗏𝖺 ? 💫","𝗛𝖾𝗒 👋","𝗖𝗈𝗎𝖼𝗈𝗎 💐","𝗦𝖺𝗅𝗎𝗍, ç𝖺 𝗀𝖺𝗓𝖾 ? 🔥","𝗕𝗈𝗇𝗃𝗈𝗎𝗋 🌞","𝗦𝖺𝗅𝗎𝗍𝖺𝗍𝗂𝗈𝗇𝗌 🌼","𝗦𝖺𝗅𝗎𝗍, 𝗊𝗎𝗈𝗂 𝖽𝖾 𝗇𝖾𝗎𝖿 ? 🌈","𝗬𝗈 🤙","𝗛𝖾𝗒, 𝖼𝗈𝗆𝗆𝖾𝗇𝗍 ç𝖺 𝗏𝖺 ? 🌺","𝗦𝖺𝗅𝗎𝗍𝖺𝗍𝗂𝗈𝗇𝗌 𝖼𝗁𝖺𝗅𝖾𝗎𝗋𝖾𝗎𝗌𝖾𝗌 🌻","𝗦𝖺𝗅𝗎𝗍, 𝗈𝗇 𝗌𝖾 𝗏𝗈𝗂𝗍 𝖻𝗂𝖾𝗇𝗍ô𝗍 ? 👀","𝗕𝗈𝗇𝗃𝗈𝗎𝗋, 𝖻𝖾𝗅𝗅𝖾 𝗃𝗈𝗎𝗋𝗇é𝖾 𝗇'𝖾𝗌𝗍-𝖼𝖾 𝗉𝖺𝗌 ? ☀","𝗛𝖾𝗒, 𝗃'𝖾𝗌𝗉è𝗋𝖾 𝗊𝗎𝖾 𝗍𝗎 𝗉𝖺𝗌𝗌𝖾𝗌 𝗎𝗇𝖾 𝖻𝗈𝗇𝗇𝖾 𝗃𝗈𝗎𝗋𝗇é𝖾 ! 🌸","𝗦𝖺𝗅𝗎𝗍, 𝗍𝗎 𝖺𝗌 𝗅'𝖺𝗂𝗋 𝗋𝖺𝖽𝗂𝖾𝗎𝗑 𝖺𝗎𝗃𝗈𝗎𝗋𝖽'𝗁𝗎𝗂 🌷","𝗛𝖾𝗅𝗅𝗈, 𝗉𝗋ê𝗍 𝗉𝗈𝗎𝗋 𝗎𝗇𝖾 𝖺𝗏𝖾𝗇𝗍𝗎𝗋𝖾 ? 🚀","𝗦𝖺𝗅𝗎𝗍, ç𝖺 𝗋𝗈𝗎𝗅𝖾 ? 🚗","𝗛𝖾𝗒, 𝗍𝗎 𝖾𝗌 𝗋𝖺𝗒𝗈𝗇𝗇𝖺𝗇𝗍 𝖺𝗎𝗃𝗈𝗎𝗋𝖽'𝗁𝗎𝗂 😎","𝗖𝗈𝗎𝖼𝗈𝗎, 𝗊𝗎𝖾𝗅𝗅𝖾𝗌 𝗌𝗈𝗇𝗍 𝗅𝖾𝗌 𝗇𝗈𝗎𝗏𝖾𝗅𝗅𝖾𝗌 ? 🌼","𝗕𝗈𝗇𝗃𝗈𝗎𝗋, 𝖻𝗈𝗇𝗇𝖾 𝗃𝗈𝗎𝗋𝗇é𝖾 𝖾𝗇 𝗉𝖾𝗋𝗌𝗉𝖾𝖼𝗍𝗂𝗏𝖾 ! ☕","𝗦𝖺𝗅𝗎𝗍𝖺𝗍𝗂𝗈𝗇𝗌 𝖺𝗆𝗂𝖼𝖺𝗅𝖾𝗌 ! 🌺","𝗦𝖺𝗅𝗎𝗍, 𝗍𝗎 𝖾𝗌 𝗍𝗈𝗎𝗃𝗈𝗎𝗋𝗌 𝖺𝗎𝗌𝗌𝗂 𝗌𝗒𝗆𝗉𝖺 😊","𝗛𝖾𝗅𝗅𝗈, 𝗍𝗈𝗎𝗍 𝗏𝖺 𝖻𝗂𝖾𝗇 ? 🌟","𝗦𝖺𝗅𝗎𝗍, 𝗉𝗋ê𝗍 𝗉𝗈𝗎𝗋 𝖼𝗈𝗇𝗊𝗎é𝗋𝗂𝗋 𝗅𝖾 𝗆𝗈𝗇𝖽𝖾 ? 💪","𝗦𝖺𝗅𝗎𝗍, 𝗊𝗎𝖾𝗅 𝗉𝗅𝖺𝗂𝗌𝗂𝗋 𝖽𝖾 𝗍𝖾 𝗏𝗈𝗂𝗋 ! 🌈","𝗛𝖾𝗒, 𝗍𝖺 𝖻𝗈𝗇𝗇𝖾 𝗁𝗎𝗆𝖾𝗎𝗋 𝖾𝗌𝗍 𝖼𝗈𝗇𝗍𝖺𝗀𝗂𝖾𝗎𝗌𝖾 ! 😄","𝗕𝗈𝗇𝗃𝗈𝗎𝗋, 𝗍𝗈𝗎𝗃𝗈𝗎𝗋𝗌 𝖺𝗎𝗌𝗌𝗂 𝖻𝗋𝗂𝗅𝗅𝖺𝗇𝗍 ! 💫","𝗦𝖺𝗅𝗎𝗍, 𝖼𝗈𝗆𝗆𝖾𝗇𝗍 𝗌'𝖾𝗌𝗍 𝗉𝖺𝗌𝗌é𝖾 𝗍𝖺 𝗃𝗈𝗎𝗋𝗇é𝖾 ? 🌻","𝗖𝗈𝗎𝖼𝗈𝗎, 𝗃'𝖾𝗌𝗉è𝗋𝖾 𝗊𝗎𝖾 𝗍𝗈𝗎𝗍 𝗏𝖺 𝖻𝗂𝖾𝗇 𝗉𝗈𝗎𝗋 𝗍𝗈𝗂 ! 🍀","𝗛𝖾𝗅𝗅𝗈, 𝗈𝗇 𝗌𝖾 𝗏𝗈𝗂𝗍 𝖻𝗂𝖾𝗇𝗍ô𝗍 ? 🎉","𝗦𝖺𝗅𝗎𝗍, 𝗍𝗎 𝖾𝗌 𝗂𝗇𝖼𝗋𝗈𝗒𝖺𝖻𝗅𝖾 ! 🌞","𝗦𝖺𝗅𝗎𝗍, 𝖼𝗈𝗆𝗆𝖾𝗇𝗍 𝖺𝗌-𝗍𝗎 é𝗍é ? 🌸","𝗛𝖾𝗒, 𝗊𝗎𝖾𝗅𝗅𝖾𝗌 𝗌𝗈𝗇𝗍 𝗅𝖾𝗌 𝗇𝗈𝗎𝗏𝖾𝗅𝗅𝖾𝗌 ? 🌺","𝗕𝗈𝗇𝗃𝗈𝗎𝗋, 𝗉𝗋ê𝗍 𝗉𝗈𝗎𝗋 𝖽𝖾 𝗇𝗈𝗎𝗏𝖾𝗅𝗅𝖾𝗌 𝖺𝗏𝖾𝗇𝗍𝗎𝗋𝖾𝗌 ? 🌼","𝗦𝖺𝗅𝗎𝗍, 𝗍𝗎 𝖾𝗌 𝗍𝗈𝗎𝗃𝗈𝗎𝗋𝗌 𝖺𝗎𝗌𝗌𝗂 𝖼𝗈𝗈𝗅 😎","𝗛𝖾𝗅𝗅𝗈, 𝗍𝗎 𝖾𝗌 é𝖻𝗅𝗈𝗎𝗂𝗌𝗌𝖺𝗇𝗍 𝖺𝗎𝗃𝗈𝗎𝗋𝖽'𝗁𝗎𝗂 ! 🌟","𝗦𝖺𝗅𝗎𝗍, 𝗊𝗎𝖾𝗅𝗅𝖾𝗌 𝗌𝗈𝗇𝗍 𝗍𝖾𝗌 𝗉𝖺𝗌𝗌𝗂𝗈𝗇𝗌 ? 🎨","𝗦𝖺𝗅𝗎𝗍, 𝗃'𝖺𝖽𝗈𝗋𝖾 𝗍𝖺 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝖺𝗍𝗍𝗂𝗍𝗎𝖽𝖾 ! 💖","𝗛𝖾𝗒, 𝖾𝗇 𝗋𝗈𝗎𝗍𝖾 𝗉𝗈𝗎𝗋 𝗎𝗇𝖾 𝖻𝖾𝗅𝗅𝖾 𝗃𝗈𝗎𝗋𝗇é𝖾 ! 🌞","𝗖𝗈𝗎𝖼𝗈𝗎, 𝗊𝗎𝖾𝗅 𝖾𝗌𝗍 𝗍𝗈𝗇 𝗌𝖾𝖼𝗋𝖾𝗍 𝗉𝗈𝗎𝗋 ê𝗍𝗋𝖾 𝗍𝗈𝗎𝗃𝗈𝗎𝗋𝗌 𝖺𝗎𝗌𝗌𝗂 𝗀é𝗇𝗂𝖺𝗅 ? 🔮","𝗕𝗈𝗇𝗃𝗈𝗎𝗋, 𝗍𝖺 𝗃𝗈𝗂𝖾 𝖽𝖾 𝗏𝗂𝗏𝗋𝖾 𝖾𝗌𝗍 𝗂𝗇𝗌𝗉𝗂𝗋𝖺𝗇𝗍𝖾 ! 🌈","𝗦𝖺𝗅𝗎𝗍, 𝖺𝗌-𝗍𝗎 𝗉𝖺𝗌𝗌é 𝗎𝗇 𝖻𝗈𝗇 𝗐𝖾𝖾𝗄-𝖾𝗇𝖽 ? 🎶","𝗦𝖺𝗅𝗎𝗍, 𝗍𝗎 𝖾𝗌 𝗆𝖺𝗀𝗇𝗂𝖿𝗂𝗊𝗎𝖾 ! 🌺","𝗛𝖾𝗅𝗅𝗈, 𝖼𝗈𝗆𝗆𝖾𝗇𝗍 𝗌𝖾 𝗉𝖺𝗌𝗌𝖾 𝗍𝖺 𝗌𝖾𝗆𝖺𝗂𝗇𝖾 ? 💼","𝗦𝖺𝗅𝗎𝗍, 𝗍𝗎 𝖾𝗌 𝖿𝖺𝗇𝗍𝖺𝗌𝗍𝗂𝗊𝗎𝖾 ! 🌟","𝗦𝖺𝗅𝗎𝗍, 𝗊𝗎𝖾𝗅𝗅𝖾𝗌 𝗌𝗈𝗇𝗍 𝗍𝖾𝗌 𝖺𝗌𝗉𝗂𝗋𝖺𝗍𝗂𝗈𝗇𝗌 ? 🌌","𝗛𝖾𝗒, 𝗃'𝖺𝖽𝗈𝗋𝖾 𝗍𝖺 𝖻𝗈𝗇𝗇𝖾 𝗁𝗎𝗆𝖾𝗎𝗋 ! 😄","𝗕𝗈𝗇𝗃𝗈𝗎𝗋, 𝗍𝗈𝗎𝗃𝗈𝗎𝗋𝗌 𝖺𝗎𝗌𝗌𝗂 𝗌𝗉𝗅𝖾𝗇𝖽𝗂𝖽𝖾 ! 💐","𝗦𝖺𝗅𝗎𝗍, 𝗍𝗈𝗎𝗍 𝗏𝖺 𝖻𝗂𝖾𝗇 𝖽𝖾 𝗍𝗈𝗇 𝖼ô𝗍é ? 🌼","𝗦𝖺𝗅𝗎𝗍, 𝗈𝗇 𝗌𝖾 𝗏𝗈𝗂𝗍 𝖻𝗂𝖾𝗇𝗍ô𝗍 ? ☕","𝗦𝖺𝗅𝗎𝗍, 𝗍𝗎 𝖾𝗌 𝗎𝗇𝖾 𝗌𝗈𝗎𝗋𝖼𝖾 𝖽𝖾 𝗆𝗈𝗍𝗂𝗏𝖺𝗍𝗂𝗈𝗇 ! 💪","𝗛𝖾𝗅𝗅𝗈, 𝗉𝗋ê𝗍 𝗉𝗈𝗎𝗋 𝗎𝗇𝖾 𝗇𝗈𝗎𝗏𝖾𝗅𝗅𝖾 𝖺𝗏𝖾𝗇𝗍𝗎𝗋𝖾 ? 🚀","𝗦𝖺𝗅𝗎𝗍, 𝗃'𝖺𝗂 𝗁â𝗍𝖾 𝖽𝖾 𝗍𝖾 𝗋𝖾𝗏𝗈𝗂𝗋 ! 🌷","𝗛𝖾𝗒, 𝖼𝗈𝗆𝗆𝖾𝗇𝗍 𝗌'𝖾𝗌𝗍 𝗉𝖺𝗌𝗌é𝖾 𝗍𝖺 𝗃𝗈𝗎𝗋𝗇é𝖾 ? 🌟"
            ];
            const stickers = [
                "254594546003916", "254595732670464", "254593389337365",
                "37117808696806", "254597316003639", "254598806003490",
                "254596219337082", "2379537642070973", "2379545095403561",
                "2379551785402892", "254597059336998"
            ];

            const senderID = event.senderID;
            const senderInfo = await api.getUserInfo(senderID);
            const senderName = senderInfo[senderID].name;
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];

            // Send the greeting message with mention
            await api.sendMessage({
                body: `${randomResponse} ${senderName}`,
                mentions: [{
                    tag: senderName,
                    id: senderID
                }]
            }, event.threadID);
            
            // Send the sticker
            await api.sendMessage({ sticker: randomSticker }, event.threadID);
        }
    }
};