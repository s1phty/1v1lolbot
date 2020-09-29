module.exports = {
    name: 'facebook',
    description: "this is a facebook command!",
    execute(message, args){
        message.channel.send('Check out the official 1v1.LOL FaceBook here: https://www.facebook.com/justbuildlol/');
    }
}