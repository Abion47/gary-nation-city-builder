import Emojis from "../emoji/emojis";

import Discord from "discord.js";
const client = new Discord.Client();

export async function initialize() {
  client.on("ready", onReady);
  client.on("message", onMessage);

  await client.login(process.env.DISCORD_TOKEN);
}

function onReady() {
  console.log(`Logged in as ${client.user?.tag}!`);
}

async function onMessage(message: Discord.Message) {
  if ((message.channel as Discord.TextChannel) === null) return;
  console.log(
    `${(message.channel as Discord.TextChannel).name} - ${message.content}`
  );
  if (message.content === "ping") {
    await message.channel.send(`\`\`\`\npong ${Emojis["1816"]}\n\`\`\``);
  }
}
