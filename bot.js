import TelegramBot from "node-telegram-bot-api";
const token = "6985133927:AAEBA7dWgWRNIovUXJmPMW7pDJF3yHDc4tg";
const bot = new TelegramBot(token, { polling: true });
const channelId = -4018916107;

// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;
//   console.log("Chat ID: ", chatId);
//   bot.sendMessage(chatId, `Your Chat ID is ${chatId}`);
// });

export { bot };
