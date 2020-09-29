module.exports = {
    name: 'twitter',
    description: "this is a twitter command!",
    execute(message, args){
        message.channel.send('Follow the official 1v1.LOL twitter here: https://twitter.com/just_build_lol');
    }
}