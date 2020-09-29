module.exports = {
    name: 'fail',
    description: "this is a fail command!",
    execute(message, args){
        message.channel.send('Play 1v1.fail here! https://www.1v1.fail ');
    }
}