import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `sʜɪ ʜᴀᴏ ʙᴏᴛ ᴏᴡɴᴇʀ `, `ᴅᴏɴᴛ ᴄᴀʟʟ☕︎︎`, `dikirafaelsimarmata@gmail.com`, `ɴᴏᴛ ғᴏᴜɴᴅ`, `♨︎ᴀᴋɪᴏᴘᴀɴᴇʟ.ᴛᴋ`, `ᴅᴏɴᴛ ᴘᴀᴡᴀɴɢ`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `sʜɪ ʜᴀᴏ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, `🜲ᴅᴏɴᴛ sᴘᴀᴍ ᴀɴᴅ ᴄᴀʟʟ, `ɴᴏᴛʜɪɴɢ`, `ɴᴏᴛ ғᴏᴜɴᴅ`, `☯︎ᴀᴋɪᴏᴘᴀɴᴇʟ.ᴛᴋ`, `ᴄᴏɴᴛʀɪʙᴜsɪ ᴅᴏɴɢʜᴜᴀ ᴘᴇʀғᴇᴄᴛ ᴡᴏʀʟᴅ`]
  ], m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya ka😉`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, {mentions: [m.sender]})
  }
}
handler.command = /^(own)$/i

export default handler
