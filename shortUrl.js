import { ShortGo } from 'shortgo';

const isGd = new ShortGo('is.gd');

export const run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send('**Proper Usage: !shorten <URL> [title]**');
    }

    try {
        let response;
        if (!args[1]) {
            response = await isGd.shorten(args[0]);
        } else {
            response = await isGd.custom(args[0], args[1]);
        }

        if (response.startsWith('Error:')) {
            message.channel.send('**Please enter a valid URL**');
        } else {
            message.channel.send(`**<${response}>**`);
        }
    } catch (error) {
        console.error('Error shortening URL:', error);
        message.channel.send('**There was an error generating the short URL. Please try again later.**');
    }
};




// async function main() {
//   try {
//     const shortUrl = await isGd.shorten({
//       url: "", // Main url
//       slug: "", // Optional
//       advancedLog: true, // False for default
//     })

//     console.log(shortUrl)
//   } catch (error) {
//     console.log(error)
//   }
// }

// main();