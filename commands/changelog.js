module.exports = {
    name: 'changelog',
    description: "this is a changelog command!",
    execute(message, args){
        message.channel.send('Here is the official 1v1.LOL change log! https://1v1.lol/changelog.txt');
    }
}