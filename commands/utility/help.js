const { prefix } = require('../../config.json');
module.export = {
    name: 'help',
    description: 'List all commands or info about a specific command.',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Here\'s a list of all commands: ');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can sent \`${prefix}help [command name]\` to get info on a specific command.`);

            return message.author.send(data, { split: true})
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commadns!');
                })
                .catch(error => {
                    console.error(`Could no send help DM to ${message.author.tag}.\n`, error)
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                })
        }
    }
}