const Discord = require('discord.js');

const client = new Discord.Client();
 
const prefix = '1v1.';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('1v1lol is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } if(command === 'invite'){
        client.commands.get('invite').execute(message, args);
    } if(command === 'play'){
        client.commands.get('play').execute(message, args);
    } if(command === 'justbuild'){
        client.commands.get('justbuild').execute(message, args);
    } if(command === 'server'){
        client.commands.get('server').execute(message, args);
    } if(command === 'changelog'){
        client.commands.get('changelog').execute(message, args);
    } if(command === 'v1'){
        client.commands.get('v1').execute(message, args);
    } if(command === 'v2'){
        client.commands.get('v2').execute(message, args);
    } if(command === 'v3'){
        client.commands.get('v3').execute(message, args);
    } if(command === 'fail'){
        client.commands.get('fail').execute(message, args);
    } if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } if(command === 'instagram'){
        client.commands.get('instagram').execute(message, args);
    } if(command === 'twitter'){
        client.commands.get('twitter').execute(message, args);
    } if(command === 'tiktok'){
        client.commands.get('tiktok').execute(message, args);
    } if(command === 'reddit'){
        client.commands.get('reddit').execute(message, args);
    } if(command === 'facebook'){
        client.commands.get('facebook').execute(message, args);
    } if(command === '1cl'){
        client.commands.get('1cl').execute(message, args);
    } else if (command == 'leaderboard'){
        client.commands.get('leaderboard').execute(message, args);
    }
});
 
client.login(process.env.token);
 
