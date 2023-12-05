import TelegramBot from "node-telegram-bot-api";
const token = "6985133927:AAE3Xxnk-ArLnbtVTvcGTDl-OC1J2_B99d8";
// const bot = new TelegramBot(token, { polling: true });
const bot = new TelegramBot(token);
const channelId = -4018916107;

// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;
//   console.log("Chat ID: ", chatId);
//   bot.sendMessage(chatId, `Your Chat ID is ${chatId}`);
// });

export { bot };
