import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent] 
});

client.on("messageCreate", (message) =>{
    console.log(message.content);
    if(message.author.bot) return;
    message.reply({
        content: "Hi I am a bot!"
    })
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(
    process.env.TOKEN
);