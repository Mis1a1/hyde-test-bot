const { Telegraf } = require("telegraf");
const TOKEN = "6569820116:AAGACJ_0MDa9cqNDiwK6RvTr24W0o9Ju4Lc";
const bot = new Telegraf(TOKEN);

const web_link = "https://main--graceful-griffin-5f863b.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Привет, чтобы продолжить перейдите поссылке", {
    reply_markup: {
      keyboard: [[{ text: "Открыть приложение", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
