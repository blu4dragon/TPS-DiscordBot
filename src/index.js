require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const PREFIX = process.env.BOT_PREFIX || '!';

if (!TOKEN) {
  console.error('Missing DISCORD_BOT_TOKEN. Add it to your .env file or hosting environment variables.');
  process.exit(1);
}

// Add your custom commands here.
// Example: !Welcome -> Welcome to my server
const commands = {
  welcome: 'Welcome to my server',
  help: `Commands available: ${PREFIX}Welcome, ${PREFIX}help`
};

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  try {
    // Ignore messages from bots and messages without the prefix.
    if (message.author.bot || !message.content.startsWith(PREFIX)) return;

    const commandName = message.content.slice(PREFIX.length).trim().toLowerCase();

    if (commands[commandName]) {
      await message.channel.send(commands[commandName]);
    }
  } catch (error) {
    console.error('Error handling message:', error);
  }
});

client.login(TOKEN);
