module.export = {
    name: 'avatar',
    aliases: ['icon', 'php'],
    description: 'get avatar image',
    guildOnly: false,
    execute(message, args) {
        return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
    }
}