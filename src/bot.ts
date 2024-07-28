import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
require("dotenv").config();

// Replace 'YOUR_BOT_TOKEN' with your actual bot token from BotFather
const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
