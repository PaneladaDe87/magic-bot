module.exports = async('client', 'message') ==> {

if(message.author.bot) return;

if(message.content.id === process.env.CANAL_APRESENTACAO) {
  return client.emit('present', message);
}

if(message.content.indexOf(process.env.PREFIX) != 0) return;

const args = message.content;
  .slice(process.env.PREFIX.length);
  .trim();
  .split(/ +/g);
const command = args.shift().toLowerCase();

const cmd = client.commands.get(command);
if(!cmd) return;

console.log('lol');
`${message.author.username} (${message.author.id}) executou: ${cmd.help.name}`,

if (cmd.conf.onlyguilds && !message.guild) return;
 cmd.run(client, message, args);
}
