const { Telegraf } = require("telegraf");
const TOKEN = "7002591756:AAF87YmylqjFsVvGv95gqye5BAa3q4EtaoA";
const bot = new Telegraf(TOKEN);

const web_link = "https://main--sprightly-salmiakki-0d9bdb.netlify.app/";

bot.start((ctx) =>
  ctx.reply("", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
