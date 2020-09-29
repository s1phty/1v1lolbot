module.exports = {
    name: 'leaderboard',
    description: "this is a leaderboard command!",
    execute(message, args){
        message.channel.send('Check out the official 1v1.LOL leaderboard https://1v1.lol/leaderboard.html');
    }
}