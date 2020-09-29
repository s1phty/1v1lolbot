module.exports = {
    name: 'invite',
    description: "this is a invite command!",
    execute(message, args){
        message.channel.send('Use this link to invite me to your server! https://discord.com/oauth2/authorize?client_id=755546606056767689&permissions=8&scope=bot');
    }
}