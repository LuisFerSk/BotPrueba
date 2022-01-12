const Discord = require("discord.js");
const client = new Discord.Client();

const token = process.env['TOKEN']


client.on("ready", () => {
  console.log("Estoy listo!");
});

client.on("message", (message) => {
  if (message.content.startsWith("13")) {
    message.channel.send("Aqui tienes para que me la beses");
  }
});

client.login(token);
