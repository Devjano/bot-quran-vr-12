const { TOKEN, CHANNEL, SERVER, STATUS, LIVE } = require("./config.json");
const discord = require("discord.js");
const jano = new discord.Client();
const ytdl = require('ytdl-core');

jano.on('ready', async () => {
  jano.user.setActivity(STATUS + "")
  let channel = jano.channels.cache.get(CHANNEL) || await jano.channels.fetch(CHANNEL)

  if(!channel) return;
  const connection = await channel.join();
  connection.play(ytdl(LIVE))
})

setInterval(async function() {
  if(!jano.voice.connections.get(SERVER)) {
    let channel = jano.channels.cache.get(CHANNEL) || await jano.channels.fetch(CHANNEL)
    if(!channel) return;

    const connection = await channel.join()
    connection.play(ytdl(LIVE))
  }
}, 20000)
//////////////// { aw zanyarya lo bashe config.json } ////////////////// abe bro bashe config.json

/////////////////////////////// channel > id channel da bne 

//////////////////////////////  server > id server da bne 

/////////////////////////////   live > link quran da bne

jano.login("")
