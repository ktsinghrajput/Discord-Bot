import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTIyNDI1NDU3OTkxMTE2ODA3Mg.GB_38k.TO7lTWgg8cvxFW0XC0kGF1ljRvtGwNw6KIlL1M');

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}