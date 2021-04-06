import emojis from '../emojis';

import Discord from 'discord.js';
const client = new Discord.Client();

import * as Tiles from '../game/village/tiles';

export async function initialize(): Promise<void> {
  client.on('ready', onReady);
  client.on('message', (msg) => void onMessage(msg));

  await client.login(process.env.DISCORD_TOKEN);
}

function onReady(): void {
  const userTag = client.user?.tag ?? '';
  if (userTag === '') {
    console.error('Logged in as anonymous!');
  } else {
    console.log(`Logged in as ${userTag}!`);
  }
}

async function onMessage(message: Discord.Message): Promise<void> {
  const channel = message.channel;
  switch (channel.type) {
    case 'dm':
      return onDmMessage(message);
    case 'text':
      return onTextMessage(message);
    case 'news':
      break;
  }
}

async function onDmMessage(message: Discord.Message): Promise<void> {
  const { channel, content } = message as { channel: Discord.DMChannel; content: string };
}

async function onTextMessage(message: Discord.Message): Promise<void> {
  const { channel, content } = message as { channel: Discord.TextChannel; content: string };
  const channelName = channel.name;

  if (!channelName) return;
  if (!content.startsWith('$')) return;

  const command = content.substr(1);

  console.log(`${(message.channel as Discord.TextChannel).name} - ${command}`);

  switch (command) {
    case 'ping':
      await message.channel.send(`\`\`\`\npong ${emojis[1816]}\n\`\`\``);
      break;

    case 'debug-print':
      await message.channel.send(`\`\`\`\n${Tiles.debugPrint()}\n\`\`\``);
      break;
  }
}
